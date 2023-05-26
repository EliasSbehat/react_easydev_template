import React from 'react';
import metaMaskLogo from '@/shared/img/metaMaskLogo.svg';
import { AccountSocialButtonMetaMask } from '@/shared/components/account/AccountElements';
import useMetaMaskConnect from '@/shared/components/wallet/hooks/useMetaMaskConnect';

const MetaMaskAuthBtn = () => {
  const { connect, isDisabled } = useMetaMaskConnect();

  return (
    <AccountSocialButtonMetaMask onClick={connect} disabled={isDisabled}>
      <img src={metaMaskLogo} alt="icon" />
    </AccountSocialButtonMetaMask>
  ); 
};

export default MetaMaskAuthBtn;
