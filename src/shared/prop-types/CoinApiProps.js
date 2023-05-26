import PropTypes from 'prop-types';

const {
    string, shape, arrayOf, number,
} = PropTypes;

export const History = shape({
  currency: string,
  history: shape({
    priceUsd: string,
    time: number,
    date: string,
  }),
});

export const CoinApiHistory = arrayOf(History);

export const CryptoChartHistoryItem = shape({
  date: string,
  price: number,
}); 

export const CryptoChartHistory = arrayOf(CryptoChartHistoryItem);
