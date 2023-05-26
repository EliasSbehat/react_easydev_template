import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap';
import MetaMaskConnectButton from '@/shared/components/wallet/components/MetaMaskConnectButton';
import WalletConnectButton from '@/shared/components/wallet/components/WalletConnectButton';
import WalletCard from './components/WalletCard';

const Metamask = `${process.env.PUBLIC_URL}/img/connect_wallet/metamask.png`;
const Bitski = `${process.env.PUBLIC_URL}/img/connect_wallet/bitski.svg`;
const CoinbaseWallet = `${process.env.PUBLIC_URL}/img/connect_wallet/coinbase_wallet.svg`;
const WalletConnect = `${process.env.PUBLIC_URL}/img/connect_wallet/wallet_connect.svg`;
const Authereum = `${process.env.PUBLIC_URL}/img/connect_wallet/authereum.svg`;
const Arkane = `${process.env.PUBLIC_URL}/img/connect_wallet/arkane.png`;
const Formatic = `${process.env.PUBLIC_URL}/img/connect_wallet/formatic.png`;
const Torus = `${process.env.PUBLIC_URL}/img/connect_wallet/torus.svg`;

const ConnectWallet = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">
            {t('connect_wallet.page_title')}
          </h3>
        </Col>
      </Row>
      <WalletContainer>
        <MetaMaskConnectButton>
          <WalletCard
            walletTitle={t('connect_wallet.metamask.title')}
            description={t('connect_wallet.metamask.description')}
            src={Metamask}
            alt="wallet-logo"
          />
        </MetaMaskConnectButton>
        <WalletCard
          walletTitle={t('connect_wallet.bitski.title')}
          description={t('connect_wallet.bitski.description')}
          src={Bitski}
          alt="wallet-logo"
        />
        <WalletCard
          walletTitle={t('connect_wallet.coinbase_wallet.title')}
          description={t('connect_wallet.coinbase_wallet.description')}
          src={CoinbaseWallet}
          alt="wallet-logo"
        />
        <WalletConnectButton>
          <WalletCard
            walletTitle={t('connect_wallet.wallet_connect.title')}
            description={t('connect_wallet.wallet_connect.description')}
            src={WalletConnect}
            alt="wallet-logo"
          />
        </WalletConnectButton>
        <WalletCard
          walletTitle={t('connect_wallet.authereum.title')}
          description={t('connect_wallet.authereum.description')}
          src={Authereum}
          alt="wallet-logo"
        />
        <WalletCard
          walletTitle={t('connect_wallet.arkane.title')}
          description={t('connect_wallet.arkane.description')}
          src={Arkane}
          alt="wallet-logo"
        />
        <WalletCard
          walletTitle={t('connect_wallet.formatic.title')}
          description={t('connect_wallet.torus.description')}
          src={Formatic}
          alt="wallet-logo"
        />
        <WalletCard
          walletTitle={t('connect_wallet.metamask.title')}
          description={t('connect_wallet.metamask.description')}
          src={Torus}
          alt="wallet-logo"
        />
      </WalletContainer>
    </Container>
  );
};

export default ConnectWallet;

export const WalletContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 30px;

  @media (max-width: 1750px) {
    grid-template-columns: auto;
  }
`;
