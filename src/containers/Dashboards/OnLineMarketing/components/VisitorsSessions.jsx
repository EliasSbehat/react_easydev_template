import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Pie, Tooltip, Legend,
} from 'recharts';
import Panel from '@/shared/components/Panel';
import getTooltipStyles from '@/shared/helpers';
import { colorAdditional } from '@/utils/palette';
import { left } from '@/utils/directions';
import { DashboardChartLegend, DashboardPieChart, DashboardPieChartContainer } from '../../BasicDashboardComponents';

const data01 = [{
  id: 0, name: 'Chrome', value: 12934, fill: '#4ce1b6',
}, {
  id: 1, name: 'Safari', value: 9934, fill: '#70bbfd',
}, {
  id: 2, name: 'Mozilla', value: 20432, fill: '#f6da6e',
}, {
  id: 3, name: 'IE', value: 15432, fill: '#ff4861',
}];

const style = {
  left: 0,
  width: 150,
  lineHeight: '24px',
  position: 'relative',
};

const renderLegend = ({ payload }) => (
  <DashboardChartLegend>
    {payload.map(entry => (
      <li key={entry.payload.id}>
        <span style={{ backgroundColor: entry.color }} />{entry.value}
      </li>
    ))}
  </DashboardChartLegend>
);

renderLegend.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};

const VisitorsSessions = ({ dir }) => {
  const { t } = useTranslation('common');
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const themeName = useSelector(state => state.theme.className);

  const onMouseMove = (e) => {
    if (e.tooltipPosition) {
      setCoordinates({ x: dir === 'ltr' ? e.tooltipPosition.x : e.tooltipPosition.x / 10, y: e.tooltipPosition.y });
    }
  };

  return (
    <Panel
      lg={6}
      xl={4}
      md={12}
      title={t('online_marketing_dashboard.visitors_sessions')}
      subhead="What browsers are most popular"
    >
      <div>
        <DashboardVisitorsChartTitle>Total visitors <span>on 23.08.2017</span></DashboardVisitorsChartTitle>
        <DashboardVisitorsChartNumber>12,384</DashboardVisitorsChartNumber>
        <DashboardPieChartContainer width="100%" height={220}>
          <DashboardPieChart>
            <Tooltip position={coordinates} {...getTooltipStyles(themeName)} />
            <Pie
              data={data01}
              dataKey="value"
              cy={110}
              innerRadius={70}
              outerRadius={100}
              onMouseMove={onMouseMove}
            />
            <Legend layout="vertical" verticalAlign="bottom" wrapperStyle={style} content={renderLegend} />
          </DashboardPieChart>
        </DashboardPieChartContainer>
      </div>
    </Panel>
  );
};

VisitorsSessions.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default VisitorsSessions;

// region STYLES

const DashboardVisitorsChartTitle = styled.p`
  text-align: ${left};

  span {
    color: ${colorAdditional};
    font-size: 11px;
  }
`;

const DashboardVisitorsChartNumber = styled.p`
  text-align: ${left};
  font-size: 48px;
  line-height: 34px;
  margin-bottom: 10px;
  margin-top: 10px;
`;

// endregion
