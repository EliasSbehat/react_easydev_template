import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import { Polar } from 'react-chartjs-2';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const data = {
  datasets: [{
    data: [11, 16, 7, 3, 14],
    backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
    label: 'My dataset',
    borderColor: 'rgba(255,255,255,0.54)',
  }],
  labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
};

const options = {
  legend: {
    position: 'bottom',
  },
  scale: {
    gridLines: {
      color: 'rgb(204, 204, 204)',
      borderDash: [3, 3],
    },
    ticks: {
      fontColor: 'black',
    },
  },
};

const PolarArea = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('charts.react_chartjs.polar_area')}</CardTitle>
          </CardTitleWrap>
          <div>
            <Polar data={data} options={options} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PolarArea;
