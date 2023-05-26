import { handleActions } from 'redux-actions';
import {
  fetchGlobalQuotesRequest,
  fetchGlobalQuotesSuccess,
  fetchGlobalQuotesError,
} from '../actions/globalQuotesActions';

const defaultState = {
  data: {},
  isFetching: false,
  error: null,
};

export default handleActions(
  {
    [fetchGlobalQuotesRequest](state) {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    },
    [fetchGlobalQuotesSuccess](state, { payload }) {
      return {
        ...state,
        data: payload,
        isFetching: false,
        error: null,
      };
    },
    [fetchGlobalQuotesError](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  defaultState,
);
