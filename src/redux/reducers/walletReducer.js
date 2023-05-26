import {
  CONNECTED,
  DISCONNECTED,
  CONNECTED_ERROR_WALLET,
} from '../actions/walletActions';


const walletReducer = (state = null, action) => {
  switch (action.type) {
    case CONNECTED:
      return { id: action.wallet.id };
    case DISCONNECTED:
      return null;
    case CONNECTED_ERROR_WALLET:
      return { error: action.error };
    default:
      return state;
  }
};

export default walletReducer;
