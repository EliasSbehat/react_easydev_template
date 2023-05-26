export const CONNECTED = 'CONNECTED';
export const DISCONNECTED = 'DISCONNECTED';
export const CONNECTED_ERROR_WALLET = 'CONNECTED_ERROR_WALLET';

export function connectWallet(id) {
  return {
    type: CONNECTED,
    wallet: { id },
  };
}

export function disconnectWallet() {
  return {
    type: DISCONNECTED,
    wallet: { id: null },
  };
}

export function connectWalletError(error) {
  return {
    type: CONNECTED_ERROR_WALLET,
    error,
  };
}
