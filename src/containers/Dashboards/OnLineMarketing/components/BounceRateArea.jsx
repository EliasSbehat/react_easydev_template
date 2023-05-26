import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import Panel from '@/shared/components/Panel';
import getTooltipStyles from '@/shared/helpers';
import { colorAccent } from '@/utils/palette';
import { left } from '@/utils/directions';
import { DashboardAreaChartContainer } from '../../BasicDashboardComponents';

const data = [
  { name: '12.03', uv: 4000 },
  { name: '13.03', uv: 3000 },
  { name: '14.03', uv: 2000 },
  { name: '15.03', uv: 2780 },
  { name: '16.03', uv: 1890 },
  { name: '17.03', uv: 2390 },
  { name: '18.03', uv: 3490 },
  { name: '19.03', uv: 3490 },
  { name: '20.03', uv: 3490 },
  { name: '21.03', uv: 3490 },
];

const BounceRateArea = ({ dir }) => {
  const { t } = useTranslation('common');

  const themeName = useSelector(state => state.theme.className);

  return (
    <Panel xl={5} lg={6} md={12} title={t('online_marketing_dashboard.bounce_rate')}>
      <DashboardBouncePercent>32%</DashboardBouncePercent>
      <div dir="ltr">
        <DashboardAreaChartContainer height={220}>
          <AreaChart
            data={data}
            margin={{
              top: 0, right: 0, left: -15, bottom: 0,
            }}
          >
            <XAxis dataKey="name" tickLine={false} reversed={dir === 'rtl'} />
            <YAxis tickLine={false} orientation={dir === 'rtl' ? 'right' : 'left'} />
            <CartesianGrid vertical={false} />
            <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
            <Area type="monotone" dataKey="uv" stroke="#24d6a3" fill="#4ce1b6" fillOpacity={0.2} />
          </AreaChart>
        </DashboardAreaChartContainer>
      </div>
    </Panel>
  );
};

BounceRateArea.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default BounceRateArea;

// region STYLES

const DashboardBouncePercent = styled.p`
  text-align: ${left};
  color: ${colorAccent};
  font-size: 48px;
  line-height: 48px;
  margin-top: 20px;
  margin-bottom: 45px !important;
`;

// endregion
