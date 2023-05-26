import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const getRandomData = () => new Array(7).fill(0).map(() => Math.floor(Math.random() * 100));

const getState = () => ({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First Dataset',
      fill: false,
      lineTension: 0.3,
      backgroundColor: '#36A2EB',
      borderColor: '#36A2EB',
      borderWidth: 2,
      pointBackgroundColor: '#36A2EB',
      pointHoverRadius: 3,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: getRandomData(),
    },
    {
      label: 'My Second Dataset',
      fill: false,
      lineTension: 0.3,
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
      borderWidth: 2,
      pointBackgroundColor: '#FF6384',
      pointHoverRadius: 3,
      pointHoverBorderWidth: 1,
      pointRadius: 1,
      pointHitRadius: 10,
      data: getRandomData(),
    },
  ],
});

const options = {
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'rgb(204, 204, 204)',
          borderDash: [3, 3],
        },
        ticks: {
          fontColor: 'rgb(204, 204, 204)',
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          color: 'rgb(204, 204, 204)',
          borderDash: [3, 3],
        },
        ticks: {
          fontColor: 'rgb(204, 204, 204)',
        },
      },
    ],
  },
};

const RandomAnimatedLine = () => {
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
            <CardTitle>{t('charts.react_chartjs.random_animated_line')}</CardTitle>
          </CardTitleWrap>
          <div>
            <Line data={data} options={options} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RandomAnimatedLine;
