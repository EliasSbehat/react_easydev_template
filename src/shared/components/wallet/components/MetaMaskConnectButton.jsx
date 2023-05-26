import React from 'react';
import PropTypes from 'prop-types';
import EmptyButton from './EmptyButton';
import useMetaMaskConnect from '../hooks/useMetaMaskConnect';

const MetaMaskConnectButton = ({ children }) => {
  const { connect, isDisabled } = useMetaMaskConnect();

  return (
    <EmptyButton
      type="button"
      onClick={connect}
      disabled={isDisabled}
    >
      {children}
    </EmptyButton>
  );
};

MetaMaskConnectButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MetaMaskConnectButton;
