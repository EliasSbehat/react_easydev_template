import * as am5 from '@amcharts/amcharts5';
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy';
import am5themesAnimated from '@amcharts/amcharts5/themes/Animated';
import React, { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import rawData from '../data/multilevelTreeMap';

const processData = (data) => {
  const treeData = [];

  am5.object.eachOrdered(
    data,
    (brand) => {
      const brandData = { name: brand, children: [] };
      let brandTotal = 0;
      const models = Object.keys(data[brand]);

      models.forEach((model) => {
        const value = data[brand][model];
        brandTotal += value;

        if (value > 100) {
          brandData.children.push({ name: model, value });
        }
      });

      if (brandTotal > 200000) {
        treeData.push(brandData);
      }
    },
    (a, b) => {
      let totalA = 0;
      let totalB = 0;

      am5.object.each(data[a], (_, val) => {
        totalA += val;
      });

      am5.object.each(data[b], (_, val) => {
        totalB += val;
      });

      if (totalA > totalB) return -1;

      if (totalA < totalB) return 1;

      return 0;
    },
  );

  return [{
    name: 'Root',
    children: treeData,
  }];
};

const MultilevelTreeMap = () => {
  const { t } = useTranslation('common');

  useLayoutEffect(() => {
    const root = am5.Root.new('chartdiv');
    const theme = am5.Theme.new(root);

    theme.rule('RoundedRectangle', ['hierarchy', 'node', 'shape', 'depth1']).setAll({
      strokeWidth: 2,
    });

    theme.rule('RoundedRectangle', ['hierarchy', 'node', 'shape', 'depth2']).setAll({
      fillOpacity: 0,
      strokeWidth: 1,
      strokeOpacity: 0.2,
    });

    root.setThemes([
      am5themesAnimated.new(root),
      theme,
    ]);

    const container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.p100,
        height: am5.p100,
        layout: root.verticalLayout,
      }),
    );

    const series = container.children.push(
      am5hierarchy.Treemap.new(root, {
        sort: 'descending',
        singleBranchOnly: false,
        downDepth: 1,
        upDepth: -1,
        initialDepth: 2,
        valueField: 'value',
        categoryField: 'name',
        childDataField: 'children',
        nodePaddingOuter: 0,
        nodePaddingInner: 0,
      }),
    );

    series.get('colors').set('step', 1);
    series.data.setAll(processData(rawData));
    series.set('selectedDataItem', series.dataItems[0]);

    series.labels.each((label) => {
      const depth = label.dataItem.get('depth');

      if (depth === 1) {
        label.setAll({
          fontSize: 24,
          x: am5.p0,
          centerX: am5.p0,
          y: am5.p0,
          centerY: am5.p0,
          paddingLeft: 5,
          paddingTop: 5,  
        });
      }

      if (depth === 2) {
        label.setAll({
          fontSize: 14,
          x: am5.p0,
          centerX: am5.p0,
          y: am5.p100,
          centerY: am5.p100,
          paddingLeft: 5,
          paddingBottom: 5,  
        });
      }
    });

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <Col md={12} lg={12} xl={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('charts.amcharts.multilevel_tree_map')}</CardTitle>
          </CardTitleWrap>
          <div id="chartdiv" style={{ width: '100%', height: '700px' }} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultilevelTreeMap;
