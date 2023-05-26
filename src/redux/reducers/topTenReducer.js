import { handleActions } from 'redux-actions';
import {
  fetchTopTenRequest,
  fetchTopTenSuccess,
  fetchTopTenError,
} from '../actions/topTenActions';

const defaultState = {
  data: [],
  isFetching: false,
  error: null,
};

export default handleActions(
  {
    [fetchTopTenRequest](state) {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    },
    [fetchTopTenSuccess](state, { payload }) {
      return {
        ...state,
        data: payload,
        isFetching: false,
        error: null,
      };
    },
    [fetchTopTenError](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  defaultState,
);
