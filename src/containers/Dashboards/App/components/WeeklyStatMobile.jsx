import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pie, ResponsiveContainer } from 'recharts';
import Panel from '@/shared/components/Panel';
import {
  DashboardWeeklyStatChart,
  DashboardWeeklyStatChartItem,
  DashboardWeeklyStatChartPie,
  DashboardWeeklyStatInfo,
  DashboardWeeklyStatLabel,
  DashboardWeeklyStatPieChart,
  DashboardWeeklyStatWrap,
} from '../../BasicStatisticComponents';

const data01 = [{ value: 78, fill: '#b8e986' },
  { value: 23, fill: '#eeeeee' }];

const data02 = [{ value: 25, fill: '#ff4861' },
  { value: 75, fill: '#eeeeee' }];

const WeeklyStatMobile = () => {
  const { t } = useTranslation('common');

  return (
    <Panel
      md={12}
      lg={6}
      xl={3}
      xs={12}
      title={t('app_dashboard.weekly_stat_mobile')}
      subhead="Top selling items statistic by last month"
    >
      <DashboardWeeklyStatWrap>
        <DashboardWeeklyStatChart>
          <DashboardWeeklyStatChartItem>
            <DashboardWeeklyStatChartPie>
              <ResponsiveContainer
                width={110}
              >
                <DashboardWeeklyStatPieChart>
                  <Pie
                    data={data01}
                    dataKey="value"
                    cx={50}
                    cy={50}
                    innerRadius={50}
                    outerRadius={55}
                  />
                </DashboardWeeklyStatPieChart>
              </ResponsiveContainer>
              <DashboardWeeklyStatLabel style={{ color: '#b8e986' }}>78%</DashboardWeeklyStatLabel>
            </DashboardWeeklyStatChartPie>
            <DashboardWeeklyStatInfo>
              <p>Customers satisfaction rate</p>
            </DashboardWeeklyStatInfo>
          </DashboardWeeklyStatChartItem>
          <DashboardWeeklyStatChartItem>
            <DashboardWeeklyStatChartPie>
              <ResponsiveContainer
                width={110}
              >
                <DashboardWeeklyStatPieChart>
                  <Pie
                    data={data02}
                    dataKey="value"
                    cx={50}
                    cy={50}
                    innerRadius={50}
                    outerRadius={55}
                  />
                </DashboardWeeklyStatPieChart>
              </ResponsiveContainer>
              <DashboardWeeklyStatLabel style={{ color: '#ff4861' }}>25%</DashboardWeeklyStatLabel>
            </DashboardWeeklyStatChartPie>
            <DashboardWeeklyStatInfo>
              <p>Negative <br />feedback</p>
            </DashboardWeeklyStatInfo>
          </DashboardWeeklyStatChartItem>
        </DashboardWeeklyStatChart>
      </DashboardWeeklyStatWrap>
    </Panel>
  );
};

export default WeeklyStatMobile;
