import React from 'react';
import { AccountSocialButtonWalletConnect } from '@/shared/components/account/AccountElements';
import { ReactComponent as WalletConnectLogo } from '@/shared/img/walletConnectLogo.svg';
import useWalletConnectModal from '@/shared/components/wallet/hooks/useWalletConnectModal';

const WalletConnectAuthBtn = () => {
  const { connect } = useWalletConnectModal();

  return (
    <AccountSocialButtonWalletConnect onClick={connect}>
      <WalletConnectLogo />
    </AccountSocialButtonWalletConnect>
);
};

export default WalletConnectAuthBtn;
