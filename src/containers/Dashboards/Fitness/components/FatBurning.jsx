import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {
  AreaChart, Area, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import Panel from '@/shared/components/Panel';
import getTooltipStyles from '@/shared/helpers';
import { colorRed, colorYellow } from '@/utils/palette';
import { marginRight } from '@/utils/directions';

const data = [
  { name: 'Page A', uv: 56 },
  { name: 'Page B', uv: 42 },
  { name: 'Page C', uv: 54 },
  { name: 'Page D', uv: 43 },
  { name: 'Page E', uv: 45 },
  { name: 'Page E', uv: 41 },
  { name: 'Page F', uv: 50 },
  { name: 'Page G', uv: 58 },
];

const FatBurning = ({ dir }) => {
  const { t } = useTranslation('common');

  const themeName = useSelector(state => state.theme.className);

  return (
    <Panel lg={7} xl={6} md={12} xs={12} title={t('fitness_dashboard.fat_burning')}>
      <DashboardWeightStats>
        <DashboardWeightStat>
          <DashboardWeightStatTitle>Weight control</DashboardWeightStatTitle>
          <DashboardWeightStatValue color={colorYellow}>+3 kg</DashboardWeightStatValue>
        </DashboardWeightStat>
        <DashboardWeightStat>
          <DashboardWeightStatTitle>Your total weight</DashboardWeightStatTitle>
          <DashboardWeightStatValue color={colorRed}>58 kg</DashboardWeightStatValue>
        </DashboardWeightStat>
      </DashboardWeightStats>
      <div dir="ltr">
        <ResponsiveContainer height={250}>
          <AreaChart
            data={data}
            margin={{
              top: 0, right: 0, left: -15, bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#FA697D" stopOpacity={1} />
                <stop offset="100%" stopColor="#E14C4C" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <YAxis
              tickFormatter={value => `${value}kg`}
              axisLine={false}
              tickLine={false}
              orientation={dir === 'rtl' ? 'right' : 'left'}
            />
            <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#F66C7D"
              strokeWidth={3}
              fill="url(#colorUv)"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
};

FatBurning.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default FatBurning;

// region STYLES

const DashboardWeightStats = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const DashboardWeightStat = styled.div`
  ${marginRight}: 40px;

  @media screen and (min-width: 768px) {
    ${marginRight}: 80px;
  }

  &:last-child {
    ${marginRight}: 0;
  }
`;

const DashboardWeightStatTitle = styled.p`
  margin-top: 0;
  margin-bottom: 3px;
`;

const DashboardWeightStatValue = styled.p`
  font-size: 36px;
  line-height: 48px;
  color: ${props => props.color};
  margin-top: 10px;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 62px;
  }
`;

// endregion
