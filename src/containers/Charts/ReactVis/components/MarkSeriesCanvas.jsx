import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  HorizontalGridLines, MarkSeries, VerticalGridLines, XAxis, FlexibleWidthXYPlot, YAxis,
} from 'react-vis';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const getRandomData = () => new Array(100).fill(0).map(() => ({
  x: Math.random() * 10,
  y: Math.random() * 20,
  size: Math.random() * 10,
  color: Math.random() * 10,
  opacity: (Math.random() * 0.5) + 0.5,
}));

const MarkSeriesCanvas = () => {
  const { t } = useTranslation('common');

  return (
    <Col xs={12} md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('charts.react_vis.mark_series_canvas')}</CardTitle>
          </CardTitleWrap>
          <div className="react-vis" dir="ltr">
            <FlexibleWidthXYPlot
              height={300}
            >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <MarkSeries
                className="mark-series-example"
                strokeWidth={2}
                opacity="0.8"
                sizeRange={[5, 15]}
                data={getRandomData()}
                colorRange={['#70bbfd', '#c88ffa']}
              />
            </FlexibleWidthXYPlot>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MarkSeriesCanvas;
