import React from 'react';
import { useTranslation } from 'react-i18next';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { Col } from 'react-bootstrap';
import FlashIcon from 'mdi-react/FlashIcon';
import {
  Card, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import {
  DashboardHealthChartCard,
  DashboardHealthChartInfo,
  DashboardHealthChartNumber,
  DashboardHealthChartUnits,
  DashboardHealthChartWrap,
  DashboardHealthGoal,
} from '../DashboardHealthChartElements';

const data = [{ value: 360, fill: '#f6da6e' },
  { value: 140, fill: '#eeeeee' }];

const CaloriesBurn = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} xl={3} lg={6} sm={12} xs={12}>
      <Card>
        <DashboardHealthChartCard>
          <CardTitleWrap>
            <CardTitle>{t('fitness_dashboard.calories_burn')}</CardTitle>
          </CardTitleWrap>
          <DashboardHealthChartWrap>
            <ResponsiveContainer height={180}>
              <PieChart>
                <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
              </PieChart>
            </ResponsiveContainer>
            <DashboardHealthChartInfo>
              <FlashIcon style={{ fill: '#f6da6e' }} />
              <DashboardHealthChartNumber>360</DashboardHealthChartNumber>
              <DashboardHealthChartUnits>kKal</DashboardHealthChartUnits>
            </DashboardHealthChartInfo>
          </DashboardHealthChartWrap>
          <DashboardHealthGoal>Goal: 500 kKal</DashboardHealthGoal>
        </DashboardHealthChartCard>
      </Card>
    </Col>
  );
};

export default CaloriesBurn;
