import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Pie, Tooltip, Legend } from 'recharts';
import Panel from '@/shared/components/Panel';
import { fetchGlobalQuotes } from '@/redux/actions/globalQuotesActions';
import { fetchCryptoTrends } from '@/redux/actions/cryptoTrendsActions';
import getTooltipStyles from '@/shared/helpers';
import { marginLeft, paddingLeft } from '@/utils/directions';
import ErrorAlert from '@/shared/components/ErrorAlert';
import { DashboardChartLegend, DashboardPieChart, DashboardPieChartContainer } from '../../BasicDashboardComponents';

const colors = ['#4ce1b6', '#70bbfd', '#f6da6e', '#ff4861', '#5e62e6'];

const getData = (sortedQuotes, globalQuotes) => {
  if (!sortedQuotes?.length || !Object.keys(globalQuotes).length) {
    return [];
  }
  const res = [];
  let valueSum = 0;
  Object.values(sortedQuotes)?.forEach((item, index) => {
    valueSum += (item?.quote?.USD?.volume_24h || 0);
    res.push({
      id: item?.id,
      name: item?.name,
      value: item?.quote.USD.volume_24h,
      fill: colors[index],
    });
  });
  res.push({
    id: 'other',
    name: 'Other',
    value: (globalQuotes?.quote?.USD?.total_volume_24h_reported || 0) - valueSum,
    fill: 'grey',
  });
  return res;
};

const style = (dir) => {
  const left = dir === 'ltr' ? { left: 0 } : { right: 0 };
  return {
    ...left,
    width: 150,
    lineHeight: '24px',
    position: 'absolute',
  };
};

const renderLegend = ({ payload }) => (
  <DashboardChartLegend>
    {payload.map(entry => (
      <li key={entry.payload.id}>
        <span style={{ backgroundColor: entry.color }} />
        {entry.value}
      </li>
    ))}
  </DashboardChartLegend>
);

renderLegend.propTypes = {
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string,
      value: PropTypes.string,
    }),
  ).isRequired,
};

const CryptotrendsToday = ({ dir }) => {
  const { t } = useTranslation('common');
  const [coordinate, setCoordinates] = useState({ x: 0, y: 0 });
  const themeName = useSelector(state => state.theme.className);
  const {
    globalQuotes,
    errorGlobalQuotesQuotes,
    isGlobalQuotesLoading,
    cryptoTrends,
    errorCryptoTrends,
    isCryptoTrendsLoading,
  } = useSelector(state => ({
    globalQuotes: state.globalQuotes.data,
    errorGlobalQuotesQuotes: state.globalQuotes.error,
    isGlobalQuotesLoading: state.globalQuotes.isFetching,
    cryptoTrends: state.cryptoTrends.data,
    errorCryptoTrends: state.cryptoTrends.error,
    isCryptoTrendsLoading: state.cryptoTrends.isFetching,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGlobalQuotes());
    dispatch(fetchCryptoTrends(5, 'volume_24h'));
  }, [dispatch]);

  const onMouseMove = (e) => {
    if (e.tooltipPosition) {
      setCoordinates({
        x: dir === 'ltr' ? e.tooltipPosition.x : e.tooltipPosition.x / 10,
        y: e.tooltipPosition.y,
      });
    }
  };

  const refresh = () => {
    dispatch(fetchGlobalQuotes());
    dispatch(fetchCryptoTrends(5, 'volume_24h'));
  };

  return (
    <Panel
      xl={7}
      xs={12}
      title={t('finance_dashboard.cryptotrends_today')}
      subhead="Top selling items statistic by last 24 hours"
      isLoading={isGlobalQuotesLoading || isCryptoTrendsLoading}
      refreshRequest={refresh}
    >
      <div dir={dir}>
        <DashboardCryptoPieChartContainer height={375}>
          <DashboardPieChart>
            {errorGlobalQuotesQuotes || errorCryptoTrends ? (
              <>
                <ErrorAlert error={errorGlobalQuotesQuotes} />
                <ErrorAlert error={errorCryptoTrends} />
              </>
          )
          : (
            <>
              <Tooltip
                formatter={value => (`$${value.toFixed(2)}`)}
                position={coordinate}
                {...getTooltipStyles(themeName)}
              />
              <Pie
                isAnimationActive={false}
                data={getData(cryptoTrends, globalQuotes)}
                dataKey="value"
                cy={185}
                innerRadius={130}
                outerRadius={160}
                label={value => (`$${value.value.toFixed(2)}`)}
                onMouseMove={onMouseMove}
              />
              <Legend layout="vertical" verticalAlign="bottom" wrapperStyle={style(dir)} content={renderLegend} />
            </>
          )}
          </DashboardPieChart>
        </DashboardCryptoPieChartContainer>
      </div>
    </Panel>
  );
};

CryptotrendsToday.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default CryptotrendsToday;

// region STYLES

const DashboardCryptoPieChartContainer = styled(DashboardPieChartContainer)`
  @media screen and (min-width: 768px) {
    height: 300px !important;

    ${DashboardPieChart} {
      height: 300px !important;
    }
  }

  @media screen and (max-width: 480px) {
    height: 240px !important;

    ${DashboardPieChart} {
      height: 180px !important;
    }

    ${DashboardChartLegend} {
      ${marginLeft}: -10px;

      li {
        margin-top: 0;
      }
    }
  }

  @media screen and (min-width: 1200px) {
    ${DashboardPieChart} {
      ${paddingLeft}: 0;
    }
  }

  @media screen and (min-width: 1360px) {
    .recharts-legend-wrapper {
      bottom: 5px !important;
    }import { fetchCryptoTrends } from '../../../../redux/actions/coinmarketcapActions';

  }
`;

// endregion
