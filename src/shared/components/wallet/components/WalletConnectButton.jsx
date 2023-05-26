import React from 'react';
import PropTypes from 'prop-types';
import EmptyButton from './EmptyButton';
import useWalletConnectModal from '../hooks/useWalletConnectModal';

const WalletConnectButton = ({ children }) => {
  const { connect } = useWalletConnectModal();

  return (
    <EmptyButton
      type="button"
      onClick={connect}
    >
      {children}
    </EmptyButton>
  );
};

WalletConnectButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WalletConnectButton;
