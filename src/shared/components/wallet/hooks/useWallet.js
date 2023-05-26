import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { disconnectWallet } from '@/redux/actions/walletActions';
import useWalletConnectModal from './useWalletConnectModal';

const useWallet = () => {
  const dispatch = useDispatch();
  const metaMaskWalletId = useSelector(state => state.wallet?.id);
  const {
    walletId: walletConnectWalletId,
    disconnect: disconnectWalletConnect,
  } = useWalletConnectModal();
  const walletId = metaMaskWalletId || walletConnectWalletId;

  const disconnect = useCallback(() => {
    if (walletConnectWalletId) {
      disconnectWalletConnect();
    }

    if (metaMaskWalletId) {
      dispatch(disconnectWallet());
    }
  }, [disconnectWalletConnect, dispatch, metaMaskWalletId, walletConnectWalletId]);

  return { walletId, disconnect };
};

export default useWallet;
