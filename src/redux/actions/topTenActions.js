import { createAction } from 'redux-actions';
import coinmarketcapApi from '@/utils/api/coinmarketcapApi';
import { firstLetterToUpperCase } from '@/shared/helpers';

export const fetchTopTenRequest = createAction('FETCH_TOP_TEN_REQUEST');
export const fetchTopTenSuccess = createAction('FETCH_TOP_TEN_SUCCESS');
export const fetchTopTenError = createAction('FETCH_TOP_TEN_ERROR');

export const fetchTopTenCurrencies = () => async (dispatch) => {
  try {
    dispatch(fetchTopTenRequest());
    const { data } = await coinmarketcapApi.getListingsLatest();

    dispatch(fetchTopTenSuccess(data.data));
  } catch (e) {
    dispatch(fetchTopTenError(firstLetterToUpperCase(e.response?.data?.error || e.response?.statusText)));
  }
};
