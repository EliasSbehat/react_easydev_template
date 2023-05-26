import { createAction } from 'redux-actions';
import coinmarketcapApi from '@/utils/api/coinmarketcapApi';
import { firstLetterToUpperCase } from '@/shared/helpers';

export const fetchCryptoTrendsRequest = createAction('FETCH_CRYPTO_TRENDS_REQUEST');
export const fetchCryptoTrendsSuccess = createAction('FETCH_CRYPTO_TRENDS_SUCCESS');
export const fetchCryptoTrendsError = createAction('FETCH_CRYPTO_TRENDS_ERROR');

export const fetchCryptoTrends = (limit, sortBy) => async (dispatch) => {
  try {
    dispatch(fetchCryptoTrendsRequest());
    const { data } = await coinmarketcapApi.getListingsLatest(limit, sortBy);
    dispatch(fetchCryptoTrendsSuccess(data?.data));
  } catch (e) {
    dispatch(fetchCryptoTrendsError(firstLetterToUpperCase(e.response?.data?.error || e.response?.statusText)));
  }
};
