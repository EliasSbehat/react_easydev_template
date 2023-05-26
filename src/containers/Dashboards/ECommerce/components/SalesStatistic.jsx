import React from 'react';
import { useTranslation } from 'react-i18next';
import { PieChart, Pie } from 'recharts';
import Panel from '@/shared/components/Panel';
import {
  DashboardStatChartWrap,
  DashboardStatInfo,
  DashboardStatLabel,
  DashboardStatNumber,
  DashboardStatWrap,
} from '../../BasicStatisticComponents';

const data01 = [{ value: 80, fill: '#4ce1b6' },
  { value: 20, fill: '#eeeeee' }];

const data02 = [{ value: 50, fill: '#ff4861' },
  { value: 50, fill: '#eeeeee' }];

const SalesStatistic = () => {
  const { t } = useTranslation('common');

  return (
    <Panel
      md={12}
      lg={6}
      xl={3}
      xs={12}
      title={t('online_marketing_dashboard.sales_statistic')}
      subhead="Top selling items statistic by last month"
    >
      <DashboardStatWrap>
        <DashboardStatChartWrap>
          <PieChart height={120} width={120}>
            <Pie data={data01} dataKey="value" cx={55} cy={55} innerRadius={55} outerRadius={60} />
          </PieChart>
          <DashboardStatLabel style={{ color: '#4ce1b6' }}>80%</DashboardStatLabel>
        </DashboardStatChartWrap>
        <DashboardStatInfo>
          <p>Top selling items statistic by last month</p>
          <DashboardStatNumber>
            $23,747.00
          </DashboardStatNumber>
        </DashboardStatInfo>
      </DashboardStatWrap>
      <DashboardStatWrap>
        <DashboardStatChartWrap>
          <PieChart height={120} width={120}>
            <Pie data={data02} dataKey="value" cx={55} cy={55} innerRadius={55} outerRadius={60} />
          </PieChart>
          <DashboardStatLabel style={{ color: '#ff4861' }}>50%</DashboardStatLabel>
        </DashboardStatChartWrap>
        <DashboardStatInfo>
          <p>Top selling items statistic by last month</p>
          <DashboardStatNumber>
            $23,747.00
          </DashboardStatNumber>
        </DashboardStatInfo>
      </DashboardStatWrap>
    </Panel>
  );
};

export default SalesStatistic;
