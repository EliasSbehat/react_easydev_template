import { handleActions } from 'redux-actions';
import {
  fetchCryptoTrendsRequest,
  fetchCryptoTrendsSuccess,
  fetchCryptoTrendsError,
} from '../actions/cryptoTrendsActions';

const defaultState = {
  data: [],
  isFetching: false,
  error: null,
};

export default handleActions(
  {
    [fetchCryptoTrendsRequest](state) {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    },
    [fetchCryptoTrendsSuccess](state, { payload }) {
      return {
        ...state,
        data: payload,
        isFetching: false,
        error: null,
      };
    },
    [fetchCryptoTrendsError](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  defaultState,
);
