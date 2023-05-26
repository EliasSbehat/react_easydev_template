// eslint-disable-file arrow-parens
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Brush, Legend,
} from 'recharts';
import Panel from '@/shared/components/Panel';
import getTooltipStyles from '@/shared/helpers';
import ErrorAlert from '@/shared/components/ErrorAlert';
import { fetchCryptoHistory } from '@/redux/actions/cryptoHistoryActions';
import { CRYPTOCURRENCIES_NAMES_COINCAP } from '@/shared/constants/cryptocurrencies';
import { DashboardAreaChartContainer } from '../../BasicDashboardComponents';
import { getDatesFromYesterdayArr } from '../../../../utils/dates';

const brush = (theme) => {
  if (theme === 'light') {
    return '#f2f4f7';
  }
  return '#38373f';
};

const getBtcEthChartData = (cryptoHistory) => {
  if (!cryptoHistory) {
    return [];
  }
  const BTCHistory = cryptoHistory?.find(item => item.currency === 'BTC');
  const ETHHistory = cryptoHistory?.find(item => item.currency === 'ETH');
  const showDays = 14;
  const dates = getDatesFromYesterdayArr(showDays);

  const res = [];
  if (!BTCHistory || !ETHHistory) return [];

  for (let i = 0; i < showDays; i += 1) {
    const BTCHistoryPriceUsd = BTCHistory?.history[i]?.priceUsd || 0;
    const ETCHistoryPriceUsd = ETHHistory?.history[i]?.priceUsd || 0;
    res.push({
      name: dates[showDays - 1 - i],
      btc: (+BTCHistoryPriceUsd).toFixed(2),
      eth: (+ETCHistoryPriceUsd).toFixed(2),
    });
  }

  return res;
};

const BtcEth = ({ dir }) => {
  const dispatch = useDispatch();
  const {
    isFetching, theme, cryptoHistory, error,
  } = useSelector(state => ({
    isFetching: state.cryptoHistory.isFetching,
    theme: state.theme,
    cryptoHistory: state.cryptoHistory.data.cryptoHistory,
    error: state.cryptoHistory.error,
  }));

  const refreshData = () => {
    dispatch(fetchCryptoHistory({ currencies: CRYPTOCURRENCIES_NAMES_COINCAP }));
  };

  return (
    <Panel
      isLoading={isFetching}
      xs={12}
      title="BTC & ETH"
      subhead="Ratings by Market Capitalization"
      refreshRequest={refreshData}
    >
      <div style={{ height: '100%' }} dir="ltr">
        <DashboardAreaChartContainer height={280}>
          {error ? (
            <ErrorAlert error={error} />
          ) : (
            <AreaChart data={getBtcEthChartData(cryptoHistory)} margin={{ top: 20, left: -15, bottom: 20 }}>
              <XAxis dataKey="name" tickLine={false} reversed={dir === 'rtl'} />
              <YAxis tickLine={false} orientation={dir === 'rtl' ? 'right' : 'left'} />
              <Tooltip {...getTooltipStyles(theme, 'defaultItems')} />
              <Legend />
              <CartesianGrid />
              <Brush dataKey="name" height={12} stroke={brush(theme)} fill={brush(theme)} />
              <Area
                name="BTC"
                type="monotone"
                dataKey="btc"
                fill="#4ce1b6"
                stroke="#4ce1b6"
                fillOpacity={0.2}
              />
              <Area name="ETH" type="monotone" dataKey="eth" fill="#70bbfd" stroke="#70bbfd" fillOpacity={0.2} />
            </AreaChart>
          )}
        </DashboardAreaChartContainer>
      </div>
    </Panel>
  );
};

BtcEth.propTypes = {
  dir: PropTypes.string.isRequired,
};

export default BtcEth;
