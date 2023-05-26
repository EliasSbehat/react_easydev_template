import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow',
  ],
  datasets: [{
    data: [300, 50, 100],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
    hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
    ],
    borderColor: 'rgba(255,255,255,0.54)',
  }],
};

const legendOpts = {
  onClick: (e, item) => alert(`Item with text ${item.text} and index ${item.index} clicked`),
};

const PolarArea = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('charts.react_chartjs.legend_handlers')}</CardTitle>
          </CardTitleWrap>
          <div>
            <Pie data={data} legend={legendOpts} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PolarArea;
