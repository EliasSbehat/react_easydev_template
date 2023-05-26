import { handleActions } from 'redux-actions';
import {
  changeRoundBordersToOnAction,
  changeRoundBordersToOffAction,
} from '../actions/roundBordersActions';

const defaultState = {
  className: 'off',
};

export default handleActions(
  {
    [changeRoundBordersToOnAction](state) {
      return {
        ...state,
        className: 'on',
      };
    },
    [changeRoundBordersToOffAction](state) {
      return {
        ...state,
        className: 'off',
      };
    },
  },
  defaultState,
);
