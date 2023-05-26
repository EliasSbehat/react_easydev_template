import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row } from 'react-bootstrap';
import { CRYPTOCURRENCIES } from '@/shared/constants/cryptocurrencies';
import ErrorAlert from '@/shared/components/ErrorAlert';
import { getWeekChartData } from '@/utils/helpers';
import { fetchQuotesBySymbol } from '@/redux/actions/quotesBySymbolActions';
import CryptoCell from './CryptoCell';

const CRYPTOCURRENCIES_NAMES = {
  BTC: 'Bitcoin',
  ETH: 'Ethereum',
  DOGE: 'Dogecoin',
  BCH: 'Bitcoin-cash',
};

const CryptoRow = () => {
  const {
    quotes, rtl, cryptoHistory, errorQuotes,
    errorHistory, isHistoryLoading, isQuoteLoading,
  } = useSelector(state => ({
    quotes: state.quotesBySymbol.data,
    errorQuotes: state.quotesBySymbol.error,
    isQuoteLoading: state.quotesBySymbol.isFetching,
    errorHistory: state.cryptoHistory.error,
    cryptoHistory: state.cryptoHistory.data.cryptoHistory,
    isHistoryLoading: state.cryptoHistory.isFetching,
    rtl: state.rtl,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuotesBySymbol(CRYPTOCURRENCIES));
  }, [dispatch]);

  return (
    <>
      <ErrorAlert subTitle="Quotes" error={errorQuotes} />
      <ErrorAlert subTitle="Charts" error={errorHistory} />
      <Row>
        {CRYPTOCURRENCIES.split(',').map(cryptoKey => (
          <CryptoCell
            key={cryptoKey}
            quote={Object.keys(quotes).length ? quotes?.[cryptoKey][0]?.quote?.USD : null}
            dir={rtl.direction}
            symbol={cryptoKey}
            name={CRYPTOCURRENCIES_NAMES[cryptoKey]}
            data={getWeekChartData(cryptoHistory)?.[cryptoKey]}
            isHistoryLoading={isHistoryLoading}
            isQuoteLoading={isQuoteLoading}
          />
        ))}
      </Row>
    </>
  );
};

export default CryptoRow;
