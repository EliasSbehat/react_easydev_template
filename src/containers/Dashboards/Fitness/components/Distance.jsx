import React from 'react';
import { useTranslation } from 'react-i18next';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import { Col } from 'react-bootstrap';
import MapMarkerRadiusIcon from 'mdi-react/MapMarkerRadiusIcon';
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

const data = [{ value: 3.8, fill: '#70bbfd' },
  { value: 0.2, fill: '#eeeeee' }];

const Distance = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} xl={3} lg={6} sm={12} xs={12}>
      <Card>
        <DashboardHealthChartCard>
          <CardTitleWrap>
            <CardTitle>{t('fitness_dashboard.distance')}</CardTitle>
          </CardTitleWrap>
          <DashboardHealthChartWrap>
            <ResponsiveContainer height={180}>
              <PieChart>
                <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
              </PieChart>
            </ResponsiveContainer>
            <DashboardHealthChartInfo>
              <MapMarkerRadiusIcon style={{ fill: '#70bbfd' }} />
              <DashboardHealthChartNumber>3.8</DashboardHealthChartNumber>
              <DashboardHealthChartUnits>km</DashboardHealthChartUnits>
            </DashboardHealthChartInfo>
          </DashboardHealthChartWrap>
          <DashboardHealthGoal>Goal: 4 km</DashboardHealthGoal>
        </DashboardHealthChartCard>
      </Card>
    </Col>
  );
};

export default Distance;
