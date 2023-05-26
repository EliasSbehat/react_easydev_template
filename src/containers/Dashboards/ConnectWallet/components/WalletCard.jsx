import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  CardTitle,
  CardBody,
} from '@/shared/components/Card';

const WalletCard = ({
 walletTitle, description, src, alt,
}) => (
  <CardBodyWallet>
    <CardLogoWallet src={src} alt={alt} />
    <TextBodyWallet>
      <CardTitleWallet>{walletTitle}</CardTitleWallet>
      <CardDescriptionWallet>{description}</CardDescriptionWallet>
    </TextBodyWallet>
  </CardBodyWallet>
);

WalletCard.propTypes = {
  walletTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
export default WalletCard;

export const CardBodyWallet = styled(CardBody)`
  display: flex;
  height: 200px;
  padding: 42px 30px;
  gap: 12px;

  @media (max-width: 480px) {
    flex-direction: column;
    height: 304px;
    padding: 36px 30px;
  }

  &:hover {
    box-shadow: 0px 0px 39px -18px #53C8B7;
  }
`;

export const CardLogoWallet = styled.img`
  height: 108px;
  width: 108px;
`;

export const TextBodyWallet = styled.div`
`;

export const CardDescriptionWallet = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;

export const CardTitleWallet = styled(CardTitle)`
  text-transform: uppercase;
  margin-bottom: 16px;
`;
