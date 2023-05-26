import { handleActions } from 'redux-actions';
import {
  fetchCryptoHistoryRequest,
  fetchCryptoHistorySuccess,
  fetchCryptoHistoryError,
} from '../actions/cryptoHistoryActions';

const defaultState = {
  data: [],
  isFetching: false,
  error: null,
};

export default handleActions(
  {
    [fetchCryptoHistoryRequest](state) {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    },
    [fetchCryptoHistorySuccess](state, { payload }) {
      return {
        ...state,
        data: payload,
        isFetching: false,
        error: null,
      };
    },
    [fetchCryptoHistoryError](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  defaultState,
);
