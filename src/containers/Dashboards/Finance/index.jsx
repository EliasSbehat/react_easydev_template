import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap';
import { CRYPTOCURRENCIES_NAMES_COINCAP } from '@/shared/constants/cryptocurrencies';
import { fetchTopTenCurrencies } from '@/redux/actions/topTenActions';
import { fetchCryptoHistory } from '@/redux/actions/cryptoHistoryActions';
import CryptoRow from './components/CryptoRow';
import TradeHistory from './components/TradeHistory';
import BtcEth from './components/BtcEth';
import CryptotrendsToday from './components/CryptotrendsToday';
import TopTen from './components/TopTen';

const getAllCurrencies = (topCurr) => {
  const curr = topCurr.map(({ symbol, slug }) => [symbol, slug]);
  return { ...Object.fromEntries(curr), ...CRYPTOCURRENCIES_NAMES_COINCAP };
};

const FinanceDashboard = () => {
  const { t } = useTranslation('common');
  const dispatch = useDispatch();

  const { rtl, topTen } = useSelector(state => ({
    rtl: state.rtl,
    topTen: state.topTen.data,
  }));

  useEffect(() => {
    dispatch(fetchTopTenCurrencies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCryptoHistory({ currencies: getAllCurrencies(topTen) }));
  }, [topTen, dispatch]);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('finance_dashboard.page_title')}</h3>
        </Col>
      </Row>
      <CryptoRow />
      <Row>        
        <BtcEth dir={rtl.direction} />
        <TradeHistory />
        <CryptotrendsToday dir={rtl.direction} />
        <TopTen />
      </Row>
    </Container>
  );
};

export default FinanceDashboard;
