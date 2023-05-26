import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  HorizontalGridLines, LineMarkSeries, VerticalGridLines, XAxis, FlexibleWidthXYPlot, YAxis,
} from 'react-vis';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const getRandomData = () => new Array(500).fill(0).map((row, i) => ({
  x: i,
  y: Math.random() * 20,
}));

const lineSeriesProps = {
  color: '#70bbfd',
  strokeWidth: 1,
  data: getRandomData(),
};

const LineSeriesCanvas = () => {
  const { t } = useTranslation('common');

  return (
    <Col xs={12} md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('charts.react_vis.line_series_canvas')}</CardTitle>
          </CardTitleWrap>
          <div className="react-vis" dir="ltr">
            <FlexibleWidthXYPlot
              height={300}
            >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineMarkSeries
                className="react-vis__svg-line"
                {...lineSeriesProps}
              />
            </FlexibleWidthXYPlot>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineSeriesCanvas;
