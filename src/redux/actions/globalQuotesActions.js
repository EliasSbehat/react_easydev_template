import { createAction } from 'redux-actions';
import coinmarketcapApi from '@/utils/api/coinmarketcapApi';
import { firstLetterToUpperCase } from '@/shared/helpers';

export const fetchGlobalQuotesRequest = createAction('FETCH_GLOBAL_QUOTES_REQUEST');
export const fetchGlobalQuotesSuccess = createAction('FETCH_GLOBAL_QUOTES_SUCCESS');
export const fetchGlobalQuotesError = createAction('FETCH_GLOBAL_QUOTES_ERROR');

export const fetchGlobalQuotes = () => async (dispatch) => {
  try {
    dispatch(fetchGlobalQuotesRequest());
    const { data } = await coinmarketcapApi.getGlobalQuotes();

    dispatch(fetchGlobalQuotesSuccess(data.data));
  } catch (e) {
    dispatch(fetchGlobalQuotesError(firstLetterToUpperCase(e.response?.data?.error || e.response?.statusText)));
  }
};
