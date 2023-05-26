import React from 'react';
import { useTranslation } from 'react-i18next';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { Col } from 'react-bootstrap';
import WalkIcon from 'mdi-react/WalkIcon';
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

const data = [{ value: 1200, fill: '#4ce1b6' },
  { value: 800, fill: '#eeeeee' }];

const Steps = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} xl={3} lg={6} sm={12} xs={12}>
      <Card>
        <DashboardHealthChartCard>
          <CardTitleWrap>
            <CardTitle>{t('fitness_dashboard.steps')}</CardTitle>
          </CardTitleWrap>
          <DashboardHealthChartWrap>
            <ResponsiveContainer height={180}>
              <PieChart>
                <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
              </PieChart>
            </ResponsiveContainer>
            <DashboardHealthChartInfo>
              <WalkIcon style={{ fill: '#4ce1b6' }} />
              <DashboardHealthChartNumber>1.2k</DashboardHealthChartNumber>
              <DashboardHealthChartUnits>steps</DashboardHealthChartUnits>
            </DashboardHealthChartInfo>
          </DashboardHealthChartWrap>
          <DashboardHealthGoal>Goal: 2000 steps</DashboardHealthGoal>
        </DashboardHealthChartCard>
      </Card>
    </Col>
  );
};

export default Steps;
