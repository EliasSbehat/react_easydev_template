import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5themesAnimated from '@amcharts/amcharts5/themes/Animated';
import am5geodataWorldLow from '@amcharts/amcharts5-geodata/worldLow';
import React, { useLayoutEffect } from 'react';
import { Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import data from './world-population-density.json';

// you can find demos here: https://www.amcharts.com/demos

const strokeColor = '#999999';
const startColor = '#ffffff';
const endColor = '#4ce1b6';
const legendLabelColor = '#93A2AF';

const Map = () => {
  const { t } = useTranslation('common');

  useLayoutEffect(() => {
    const root = am5.Root.new('chartdiv');

    root.setThemes([
      am5themesAnimated.new(root),
    ]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: 'translateX',
        panY: 'translateY',
        projection: am5map.geoMercator(),
        homeZoomLevel: 2,
        homeGeoPoint: { longitude: 10, latitude: 52 },
      }),
    );

    const zoomControl = am5map.ZoomControl.new(root, {
      x: 10,
      centerX: am5.p0,
      y: am5.p50,
      centerY: am5.p50,
    });

    chart.set('zoomControl', zoomControl);

    zoomControl.minusButton.setAll({
      marginTop: 10,
    });

    chart.set('zoomStep', 1.5);

    chart.chartContainer.get('background').events.on('click', () => {
      chart.goHome();
    });

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodataWorldLow,
        valueField: 'value',
        calculateAggregates: true,
      }),
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: '{name}: {value}',
      fill: am5.color(startColor),
      stroke: am5.color(strokeColor),
      strokeWidth: 0.5,
    });

    polygonSeries.set('heatRules', [{
      target: polygonSeries.mapPolygons.template,
      dataField: 'value',
      min: am5.color(startColor),
      max: am5.color(endColor),
      key: 'fill',
    }]);

    polygonSeries.mapPolygons.template.states.create('hover', {
      stroke: endColor,
      strokeWidth: 2,
    });

    const heatLegend = chart.children.push(
      am5.HeatLegend.new(root, {
        orientation: 'horizontal',
        startColor: am5.color(startColor),
        endColor: am5.color(endColor),
        startText: 'Lowest',
        endText: 'Highest',
        stepCount: 1,
        width: 250,
        y: am5.percent(80),
        x: am5.p50,
        centerX: am5.p50,
      }),
    );

    heatLegend.startLabel.setAll({
      fontSize: 12,
      fill: am5.color(legendLabelColor),
    });

    heatLegend.endLabel.setAll({
      fontSize: 12,
      fill: am5.color(legendLabelColor),
    });

    polygonSeries.mapPolygons.template.events.on('pointerover', (e) => {
      heatLegend.showValue(e.target.dataItem.get('value'));
    });

    polygonSeries.events.on('datavalidated', () => {
      chart.goHome();

      const valueLow = polygonSeries.getPrivate('valueLow');
      const valueHigh = polygonSeries.getPrivate('valueHigh');

      heatLegend.set('startValue', valueLow);
      heatLegend.set('endValue', valueHigh);

      heatLegend.set('startText', valueLow);
      heatLegend.set('endText', valueHigh);
    });

    polygonSeries.data.setAll(data);

    return () => {
      root.dispose();
    };
  }, []);

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('maps.vector_map.vector_world_map')}</CardTitle>
          </CardTitleWrap>
          <div id="chartdiv" style={{ width: '100%', height: '55vh' }} />
        </CardBody>
      </Card>
    </Col>

  );
};

export default Map;
