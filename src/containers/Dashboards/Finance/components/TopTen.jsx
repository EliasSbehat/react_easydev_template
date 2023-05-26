import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Panel from '@/shared/components/Panel';
import { Table } from '@/shared/components/TableElements';
import { getWeekChartData } from '@/utils/helpers';
import ErrorAlert from '@/shared/components/ErrorAlert';
import { fetchTopTenCurrencies } from '@/redux/actions/topTenActions';
import TopTenRow from './TopTenRow';

const TopTen = () => {
  const {
    topTen, cryptoHistory, errorTopTen, errorHistory, isHistoryLoading, isTopTenLoading,
  } = useSelector(state => ({
    topTen: state.topTen.data,
    cryptoHistory: state.cryptoHistory.data.cryptoHistory,
    errorTopTen: state.topTen.error,
    errorHistory: state.cryptoHistory.error,
    isHistoryLoading: state.cryptoHistory.isFetching,
    isTopTenLoading: state.topTen.isFetching,
  }));
  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  const chartData = getWeekChartData(cryptoHistory);

  const refreshRequest = () => {
    dispatch(fetchTopTenCurrencies());
  };

  return (
    <Panel
      lg={12}
      title={t('finance_dashboard.top_cryptocurrencies')}
      isLoading={isHistoryLoading || isTopTenLoading}
      refreshRequest={refreshRequest}
    >
      {(errorTopTen || errorHistory) ? (
        <>
          <ErrorAlert subTitle="Quotes" error={errorTopTen} />
          <ErrorAlert subTitle="Charts" error={errorHistory} />
        </>
      ) : (
        <DashboardTableCrypto responsive bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Market Cap</th>
              <th>Price</th>
              <th>Volume</th>
              <th>Circulating Supply</th>
              <th>Change 24h</th>
              <th>Change 7d</th>
              <th dir="ltr">Graph (7 days)</th>
            </tr>
          </thead>
          <tbody>
            {topTen.length > 0 && topTen.map((crypto, index) => (
              <TopTenRow
                key={crypto.id}
                crypto={crypto}
                index={index}
                chartData={chartData?.[crypto.symbol]}
              />
            ))}
          </tbody>
        </DashboardTableCrypto>
      )}
    </Panel>
  );
};

export default TopTen;

// region STYLES

const DashboardTableCrypto = styled(Table)`

  tbody td {
    padding: 10px;
    white-space: nowrap;
  }
`;

// endregion
