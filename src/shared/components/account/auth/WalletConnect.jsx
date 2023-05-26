import React from 'react';
import propTypes from 'prop-types';
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from '@web3modal/ethereum';
import { Web3Modal } from '@web3modal/react';
import {
 configureChains, createClient, WagmiConfig, useAccount, 
} from 'wagmi';
import { arbitrum, mainnet, polygon } from 'wagmi/chains';
import { useHistory } from 'react-router';
import config from '@/config/walletConnect';

const { projectId } = config;
const chains = [arbitrum, mainnet, polygon];

const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId }),
]);
const wagmiClient = createClient({
  autoConnect: false,
  connectors: modalConnectors({
    projectId,
    version: '1',
    appName: 'web3Modal',
    chains,
  }),
  provider,
});

const ethereumClient = new EthereumClient(wagmiClient, chains);

const WalletConnect = ({ children }) => {
  const history = useHistory();

  useAccount({
    onConnect: () => {
      history.push('/online_marketing_dashboard');
    },
  });

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        {children}
      </WagmiConfig>

      {projectId && (
        <Web3Modal
          projectId={projectId}
          ethereumClient={ethereumClient}
        />
      )}
    </>
  );
};

WalletConnect.propTypes = {
  children: propTypes.node.isRequired,
};

export default WalletConnect;
