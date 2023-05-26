import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap';
import Plots from './components/Plots';
import LineSeriesCanvas from './components/LineSeriesCanvas';
import MarkSeriesCanvas from './components/MarkSeriesCanvas';
import LineSeries from './components/LineSeries';
import LineSeriesWithManyColors from './components/LineSeriesWithManyColors';
import Bar from './components/Bar';

import 'react-vis/dist/style.css';

const ReactVis = () => {
  const { t } = useTranslation('common');

  const rtl = useSelector(state => state.rtl);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('charts.react_vis.title')}</h3>
          <h3 className="page-subhead subhead">
            Use this elements, if you want to show some hints or additional information
          </h3>
        </Col>
      </Row>
      <Row>
        <Plots dir={rtl.direction} />
        <LineSeriesCanvas />
        <MarkSeriesCanvas />
        <LineSeries />
        <LineSeriesWithManyColors />
        <Bar />
      </Row>
    </Container>
  );
};

export default ReactVis;
