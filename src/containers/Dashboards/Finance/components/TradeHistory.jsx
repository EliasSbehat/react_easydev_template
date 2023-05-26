import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Panel from '@/shared/components/Panel';
import { Table } from '@/shared/components/TableElements';
import { useSelector, useDispatch } from 'react-redux';
import ErrorAlert from '@/shared/components/ErrorAlert';
import { fetchTopTenCurrencies } from '@/redux/actions/topTenActions';

const header = [
  { id: 0, title: 'Coin' },
  { id: 1, title: 'Market Cap' },
  { id: 2, title: 'Volume (last 24 hrs.)' },
];

const colors = [
 '#f6a81e',
 '#5e62e6',
 '#3ddb42',
 '#21cbe6',
 '#6d6a6a',
 '#b7b3b3',
];

const TradeHistory = () => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();
  const {
    topTen, errorTopTen, isTopTenLoading,
  } = useSelector(state => ({
    topTen: state.topTen.data,
    errorTopTen: state.topTen.error,
    isTopTenLoading: state.topTen.isFetching,
  }));
  const topSix = topTen?.slice(0, 6);

  const refreshData = () => {
    dispatch(fetchTopTenCurrencies());
  };

  return (
    <Panel
      xl={5}
      xs={12}
      title={t('finance_dashboard.trade_history')}
      subhead="Ratings by Market Capitalization"
      isLoading={isTopTenLoading}
      refreshRequest={refreshData}
    >
      <ErrorAlert subTitle="Quotes" error={errorTopTen} />
      <Table responsive striped>
        <thead>
          <tr>
            {header.map(item => (
              <TradeHistoryTh key={item.id}>{item.title}</TradeHistoryTh>
            ))}
          </tr>
        </thead>
        <tbody>
          {topSix?.map((item, index) => (
            <tr key={item?.id}>
              <td>
                <DashboardCoin color={colors[index]}>
                  {item?.symbol}
                </DashboardCoin>
              </td>
              <td>{item?.quote?.USD?.market_cap?.toFixed(2)}</td>
              <td>{item?.quote?.USD?.volume_24h?.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Panel>
  );
};

export default TradeHistory;

// region STYLES

const DashboardCoin = styled.p`
  color: ${props => props.color};
  font-weight: 700;
`;

const TradeHistoryTh = styled.th`
  white-space: pre;
`;

// endregion
