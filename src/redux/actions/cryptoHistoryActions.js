import { createAction } from 'redux-actions';
import axios from 'axios';
import coinHistoryApi from '@/utils/api/coinHistoryApi';
import { firstLetterToUpperCase } from '@/shared/helpers';
import { getDateDaysBack } from '@/utils/dates';

export const fetchCryptoHistoryRequest = createAction('FETCH_CRYPTO_HISTORY_REQUEST');
export const fetchCryptoHistorySuccess = createAction('FETCH_CRYPTO_HISTORY_SUCCESS');
export const fetchCryptoHistoryError = createAction('FETCH_CRYPTO_HISTORY_ERROR');

export const fetchCryptoHistory = ({
  currencies = ['bitcoin'],
  period = 'd1',
  startDate = getDateDaysBack(15),
  endDate = getDateDaysBack(-1),
}) => async (dispatch) => {
  try {
    dispatch(fetchCryptoHistoryRequest());

    const startTimeMS = startDate.getTime();
    const endTimeMS = endDate.getTime();
    const slugs = Object.values(currencies);
    const currFlipped = Object.entries(currencies) // swap key and value
      .reduce((obj, [key, value]) => ({ ...obj, [value]: key }), {});

    const res = await axios.all(
      slugs.map(item => coinHistoryApi.getCurrencyHistoryByCoinCap(item, period, startTimeMS, endTimeMS)),
    );

    const data = res.map((item, index) => ({ currency: currFlipped[slugs[index]], history: item.data.data }));
    dispatch(fetchCryptoHistorySuccess({ cryptoHistory: data }));
  } catch (e) {
    dispatch(fetchCryptoHistoryError(firstLetterToUpperCase(e.response.data?.error || e.response?.statusText)));
  }
};
