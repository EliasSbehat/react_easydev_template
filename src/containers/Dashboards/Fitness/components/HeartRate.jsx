import React from 'react';
import { useTranslation } from 'react-i18next';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { Col } from 'react-bootstrap';
import HeartOutlineIcon from 'mdi-react/HeartOutlineIcon';
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

const data = [{ value: 68, fill: '#ff4861' },
  { value: 32, fill: '#eeeeee' }];

const HeartRate = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} xl={3} lg={6} sm={12} xs={12}>
      <Card>
        <DashboardHealthChartCard>
          <CardTitleWrap>
            <CardTitle>{t('fitness_dashboard.heartrate')}</CardTitle>
          </CardTitleWrap>
          <DashboardHealthChartWrap>
            <ResponsiveContainer height={180}>
              <PieChart>
                <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
              </PieChart>
            </ResponsiveContainer>
            <DashboardHealthChartInfo>
              <HeartOutlineIcon style={{ fill: '#ff4861' }} />
              <DashboardHealthChartNumber>96</DashboardHealthChartNumber>
              <DashboardHealthChartUnits>b/min</DashboardHealthChartUnits>
            </DashboardHealthChartInfo>
          </DashboardHealthChartWrap>
          <DashboardHealthGoal>Reference: 58-120</DashboardHealthGoal>
        </DashboardHealthChartCard>
      </Card>
    </Col>
  );
};

export default HeartRate;
