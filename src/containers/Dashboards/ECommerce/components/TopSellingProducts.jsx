import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {
  Pie, Tooltip, Legend,
} from 'recharts';
import Panel from '@/shared/components/Panel';
import getTooltipStyles from '@/shared/helpers';
import { DashboardChartLegend, DashboardPieChart, DashboardPieChartContainer } from '../../BasicDashboardComponents';

const data01 = [{
  id: 0, name: 'Sony Xperia Z', value: 12934, fill: '#4ce1b6',
}, {
  id: 1, name: 'Xiaomi Mi 6', value: 9934, fill: '#70bbfd',
}, {
  id: 2, name: 'Apple iPhone 7 Plus', value: 20432, fill: '#f6da6e',
}, {
  id: 3, name: 'Apple iPhone 6 Plus', value: 15432, fill: '#ff4861',
}];

const style = (dir) => {
  const left = dir === 'ltr' ? { left: 0 } : { right: 0 };
  return ({
    ...left,
    width: 150,
    lineHeight: '24px',
    position: 'absolute',
  });
};

const renderLegend = ({ payload }) => (
  <DashboardChartLegend>
    {payload.map(entry => (
      <li key={entry.payload.id}><span style={{ backgroundColor: entry.color }} />{entry.value}</li>
    ))}
  </DashboardChartLegend>
);

renderLegend.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};

const TopSellingProducts = ({ dir }) => {
  const { t } = useTranslation('common');
  const [coordinates, setCoordinate] = useState({ x: 0, y: 0 });

  const themeName = useSelector(state => state.theme.className);

  const onMouseMove = (e) => {
    if (e.tooltipPosition) {
      setCoordinate({ x: dir === 'ltr' ? e.tooltipPosition.x : e.tooltipPosition.x / 10, y: e.tooltipPosition.y });
    }
  };

  return (
    <Panel lg={12} xl={6} md={12} xs={12} title={t('dashboard_commerce.top_selling_products')}>
      <div dir={dir}>
        <DashboardCommercePieChartContainer height={360}>
          <DashboardPieChart>
            <Tooltip position={coordinates} {...getTooltipStyles(themeName)} />
            <Pie
              data={data01}
              dataKey="value"
              cy={180}
              innerRadius={130}
              outerRadius={160}
              label
              onMouseMove={onMouseMove}
            />
            <Legend layout="vertical" verticalAlign="bottom" wrapperStyle={style(dir)} content={renderLegend} />
          </DashboardPieChart>
        </DashboardCommercePieChartContainer>
      </div>
    </Panel>
  );
};

TopSellingProducts.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default TopSellingProducts;

// region

const DashboardCommercePieChartContainer = styled(DashboardPieChartContainer)`

  @media screen and (min-width: 768px) {
    height: 360px !important;

    ${DashboardPieChart} {
      height: 360px !important;
    }
  }

  .recharts-legend-wrapper {
    @media screen and (min-width: 370px) {
      bottom: 0 !important;
    }
    @media screen and (min-width: 700px) {
      bottom: 70px !important;
    }
    @media screen and (min-width: 1020px) {
      bottom: -30px !important;
    }
    @media screen and (min-width: 1200px) {
      bottom: -55px !important;
    }
    @media screen and (min-width: 1400px) {
      bottom: -25px !important;
    }
    @media screen and (min-width: 1800px) {
      bottom: -30px !important;
    }
  }
`;

// endregion
