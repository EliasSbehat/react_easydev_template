import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const getRandomData = () => new Array(7).fill(0).map(() => Math.floor(Math.random() * 100));

const getState = () => ({
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#FF6384',
      borderColor: '#FF6384',
      borderWidth: 1,
      hoverBackgroundColor: '#FF6384',
      hoverBorderColor: '#FF6384',
      data: getRandomData(),
    },
  ],
});

const options = {
  legend: {
    position: 'bottom',
  },
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

const RandomAnimatedBars = () => {
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
            <CardTitle>{t('charts.react_chartjs.random_animated_bars')}</CardTitle>
          </CardTitleWrap>
          <div>
            <Bar data={data} options={options} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RandomAnimatedBars;
