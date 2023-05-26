import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Pie, ResponsiveContainer } from 'recharts';
import Panel, { PanelTitle } from '@/shared/components/Panel';
import ProgressBar from '@/shared/components/ProgressBar';
import {
  DashboardWeeklyStatChart,
  DashboardWeeklyStatChartItem,
  DashboardWeeklyStatChartPie,
  DashboardWeeklyStatInfo,
  DashboardWeeklyStatLabel,
  DashboardWeeklyStatPieChart,
  DashboardWeeklyStatWrap,
  DashboardSocialStatItem,
  DashboardSocialStatProgress,
  DashboardSocialStatTitle,
} from '../../BasicStatisticComponents';

const data01 = [{ value: 78, fill: '#b8e986' },
  { value: 23, fill: '#eeeeee' }];

const data02 = [{ value: 25, fill: '#ff4861' },
  { value: 75, fill: '#eeeeee' }];

const social = [
  { id: 0, social: 'Booking.com', progress: '87' },
  { id: 1, social: 'Airbnb', progress: '65' },
  { id: 2, social: 'Tripadvisor', progress: '92' },
  { id: 3, social: 'Tripadvisor', progress: '81' },
];

const SocialScore = ({ children, progress }) => (
  <DashboardSocialStatItem>
    <DashboardSocialStatTitle>
      {children}
    </DashboardSocialStatTitle>
    <DashboardSocialStatProgress>
      <ProgressBar top now={progress} label={`${progress}%`} rounded size="small" gradient="blue" />
    </DashboardSocialStatProgress>
  </DashboardSocialStatItem>
);

SocialScore.propTypes = {
  progress: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const WeeklyStat = () => {
  const { t } = useTranslation('common');

  return (
    <Panel
      md={12}
      lg={6}
      xl={3}
      xs={12}
      title={t('booking_dashboard.weekly_stat')}
      subhead="Top selling items statistic by last month"
    >
      <DashboardWeeklyStatWrap>
        <DashboardWeeklyStatChart>
          <DashboardWeeklyStatChartItem>
            <DashboardWeeklyStatChartPie>
              <ResponsiveContainer>
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
              <ResponsiveContainer>
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
        <hr />
        <PanelTitle title={t('booking_dashboard.social_score')} />
        <div>
          {social.map(item => (
            <SocialScore key={item.id} progress={item.progress}>
              {item.social}
            </SocialScore>
          ))}
        </div>
      </DashboardWeeklyStatWrap>
    </Panel>
  );
};

export default WeeklyStat;
