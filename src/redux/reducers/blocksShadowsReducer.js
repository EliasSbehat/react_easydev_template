import { handleActions } from 'redux-actions';
import {
  changeBlocksShadowsToOnAction,
  changeBlocksShadowsToOffAction,
} from '../actions/blocksShadowsActions';

const defaultState = {
  className: 'off',
};

export default handleActions(
  {
    [changeBlocksShadowsToOnAction](state) {
      return {
        ...state,
        className: 'on',
      };
    },
    [changeBlocksShadowsToOffAction](state) {
      return {
        ...state,
        className: 'off',
      };
    },
  },
  defaultState,
);
