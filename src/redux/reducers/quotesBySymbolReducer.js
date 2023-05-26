import { handleActions } from 'redux-actions';
import {
  fetchQuotesBySymbolRequest,
  fetchQuotesBySymbolSuccess,
  fetchQuotesBySymbolError,
} from '../actions/quotesBySymbolActions';

const defaultState = {
  data: {},
  isFetching: false,
  error: null,
};

export default handleActions(
  {
    [fetchQuotesBySymbolRequest](state) {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    },
    [fetchQuotesBySymbolSuccess](state, { payload }) {
      return {
        ...state,
        data: payload,
        isFetching: false,
        error: null,
      };
    },
    [fetchQuotesBySymbolError](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  defaultState,
);
