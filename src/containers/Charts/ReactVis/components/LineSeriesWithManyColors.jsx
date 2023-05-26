import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  HorizontalGridLines, LineSeries, VerticalGridLines, XAxis, FlexibleWidthXYPlot, YAxis,
} from 'react-vis';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const getRandomData = () => new Array(20).fill(0).map((row, i) => Object({
  color: i,
  key: i,
  data: new Array(100).fill(0).map((col, j) => Object({
    x: j,
    y: ((i / 10) + 1) * Math.sin((Math.PI * (i + j)) / 50),
  })),
  opacity: 0.8,
}));

const data = getRandomData();

const LineSeriesWithManyColors = () => {
  const { t } = useTranslation('common');

  return (
    <Col xs={12} md={12} lg={12} xl={4}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('charts.react_vis.line_series_with_many_colors')}</CardTitle>
          </CardTitleWrap>
          <div className="react-vis" dir="ltr">
            <FlexibleWidthXYPlot
              height={250}
              colorType="linear"
              colorDomain={[0, 9]}
              colorRange={['#70bbfd', '#c88ffa']}
            >
              <HorizontalGridLines />
              <VerticalGridLines />
              <XAxis />
              <YAxis />
              {data.map(props => <LineSeries className="react-vis__svg-line" {...props} />)}
            </FlexibleWidthXYPlot>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineSeriesWithManyColors;
