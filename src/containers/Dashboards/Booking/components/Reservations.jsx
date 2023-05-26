import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import {
  Legend, Pie, PieChart, ResponsiveContainer, Tooltip,
} from 'recharts';
import getTooltipStyles from '@/shared/helpers';
import ArrowDownwardIcon from 'mdi-react/ArrowDownwardIcon';
import Panel from '@/shared/components/Panel';
import { colorBlue, colorDustyWhite, colorGray } from '@/utils/palette';
import { left } from '@/utils/directions';
import OurMission from './OurMission';
import { DashboardChartLegend } from '../../BasicDashboardComponents';

const data = [{
  id: 0, name: 'Completed', value: 2500, fill: '#b8e986',
}, {
  id: 1, name: 'Online check-in', value: 2500, fill: '#4ce1b6',
}, {
  id: 2, name: 'Remain', value: 5000, fill: '#f2f4f7',
}];

const style = (dir) => {
  const direction = dir === 'ltr' ? { left: 0 } : { right: 0 };

  return ({
    ...direction,
    marginTop: '-5px',
    lineHeight: '16px',
    position: 'absolute',
  });
};

const renderLegend = ({ payload }) => (
  <DashboardChartLegend>
    {payload.map(entry => (
      <li key={entry.payload.id}>
        <span style={{ backgroundColor: entry.color }} />
        <p>{entry.value}</p>
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

const Reservations = ({ dir }) => {
  const { t } = useTranslation('common');
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  const themeName = useSelector(state => state.theme.className);

  const onMouseMove = (e) => {
    if (e.tooltipPosition) {
      setCoordinates({
        x: dir === 'ltr' ? e.tooltipPosition.x - 130 : e.tooltipPosition.x / 10, y: e.tooltipPosition.y - 40,
      });
    }
  };

  return (
    <DashboardReservationPanel
      lg={6}
      xl={3}
      md={12}
      title={t('booking_dashboard.reservations')}
      subhead="Reservation overview"
      before={<OurMission />}
    >
      <DashboardReservationsWrap>
        <DashboardReservationsTitle>Total visitors on 23.08.2018</DashboardReservationsTitle>
        <DashboardReservationsNumber>345</DashboardReservationsNumber>
        <DashboardReservationsChartWrap dir={dir}>
          <ResponsiveContainer>
            <DashboardReservationsChartContainer>
              <Tooltip position={coordinates} {...getTooltipStyles(themeName)} />
              <Pie
                data={data}
                dataKey="value"
                cy={80}
                innerRadius={47}
                outerRadius={65}
                onMouseMove={onMouseMove}
              />
              <Legend
                layout="vertical"
                verticalAlign="middle"
                wrapperStyle={style(dir)}
                content={renderLegend}
              />
            </DashboardReservationsChartContainer>
          </ResponsiveContainer>
          <DashboardReservationsLink>
            Download report <DashboardReservationsLinkIcon />
          </DashboardReservationsLink>
        </DashboardReservationsChartWrap>
      </DashboardReservationsWrap>
    </DashboardReservationPanel>
  );
};

Reservations.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default Reservations;

// region STYLES

const DashboardReservationPanel = styled(Panel)`
  &:not(.panel--collapse) {
    height: calc(100% - 138px);
  }
`;

const DashboardReservationsWrap = styled.div`
  text-align: ${left};
  margin-top: -10px;
`; 

const DashboardReservationsTitle = styled.p`
  font-size: 13px;
  color: ${props => (props.theme === 'dark' ? colorDustyWhite : colorGray)};
`;

const DashboardReservationsNumber = styled.p`
  font-size: 48px;
  line-height: 34px;
  margin-top: 15px;
  margin-bottom: 10px;
  color: ${props => (props.theme === 'dark' ? colorDustyWhite : colorGray)};
`;

const DashboardReservationsChartWrap = styled.div`
  height: 180px;
  position: relative;

  @media screen and (min-width: 1400px) and (max-width: 1599px) {
    height: 230px;
  }

  .recharts-surface {
    width: 100%;
    height: 100%;
  }

  .recharts-legend-wrapper {
    width: 100% !important;
    display: block;
    position: static !important;

    li {
      display: flex;
      align-items: baseline;
    }

    p {
      display: inline-block;
      margin: 0;
    }
    
    @media screen and (min-width: 370px) {
      bottom: 0;
    }
    
    @media screen and (min-width: 992px) {
      bottom: 70px;
    }
    
    @media screen and (min-width: 1020px) {
      bottom: -30px;
    }
    
    @media screen and (min-width: 1400px) {
      bottom: -55px;
    }
    
    @media screen and (min-width: 1800px) {
      bottom: -30px;
    }
  }

  .recharts-responsive-container {
    width: 100% !important;
    height: 100% !important;
    @media screen and (min-width: 1400px) and (max-width: 1599px) {
      height: calc(100% - 18px) !important;
    }
  }
`;

const DashboardReservationsChartContainer = styled(PieChart)`
  width: 100% !important;
  height: 100% !important;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  @media screen and (min-width: 992px) {
    width: 100% !important;
    height: 100% !important;
  }
  
  @media screen and (min-width: 1400px) and (max-width: 1599px) {
    flex-direction: column;
    align-items: baseline;
  }
`;

const DashboardReservationsLink = styled.span`
  color: ${colorBlue};
  font-size: 12px;
  line-height: 1.5;
  position: absolute;
  bottom: 0;
  cursor: pointer;
  ${left}: 0;

  @media screen and (min-width: 1400px) {
    margin-top: 10px;
    display: inline-block;
    position: static;
  }
`;

const DashboardReservationsLinkIcon = styled(ArrowDownwardIcon)`
  width: 12px;
  height: 12px;
`;

// endregion
