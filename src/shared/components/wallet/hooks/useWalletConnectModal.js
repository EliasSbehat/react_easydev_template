import { useCallback } from 'react';
import { useWeb3Modal } from '@web3modal/react';
import { useAccount, useDisconnect } from 'wagmi';

const useWalletConnectModal = () => {
  const { open } = useWeb3Modal();
  const { address: walletId } = useAccount();
  const connect = useCallback(() => open({ route: 'ConnectWallet' }), [open]);
  const { disconnect } = useDisconnect();

  return { connect, disconnect, walletId };
};

export default useWalletConnectModal;
