import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const getRandomInt = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const getState = () => ({
  labels: [
    'Red',
    'Blue',
    'Yellow',
  ],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
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
});

const DynamicallyRefreshedDoughnut = () => {
  const { t } = useTranslation('common');
  const [data, setData] = useState(getState());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setData(getState());
    }, 4000);
    return (() => {
      clearInterval(intervalId);
    });
  }, []);

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('charts.react_chartjs.dynamically_refreshed_doughnut')}</CardTitle>
          </CardTitleWrap>
          <div>
            <Doughnut data={data} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DynamicallyRefreshedDoughnut;
