import React from 'react';
import styled from 'styled-components';
import {
  LandingButtonGradient,
  LandingContainer,
  LandingSection,
} from '../BasicLandingElements';
import { ReactComponent as Logo } from './images/bottom_logo.svg';

const Purchase = () => (
  <LandingSection>
    <LandingContainer>
      <LandingLogo />
      <PurchaseText className="animate-on-scroll">
        Ready to start your project with EasyDev?
      </PurchaseText>
      <LandingCenterButtonWrap>
        <LandingButtonGradient
          target="_blank"
          rel="noopener noreferrer"
          href="https://1.envato.market/Buy-now-React"
        >
          Buy now from $28
        </LandingButtonGradient>
      </LandingCenterButtonWrap>
    </LandingContainer>
  </LandingSection>
);

export default Purchase;

// region STYLES

const LandingLogo = styled(Logo)`
  width: 200px;
  margin-bottom: 16px;
  
  @media screen and (min-width: 576px) {
    width: 250px;
    margin-bottom: 20px;
  }
`;

const PurchaseText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  margin-bottom: 32px;

  @media screen and (min-width: 576px) {   
    margin-bottom: 24px;
  }

  @media screen and (max-width: 576px) {
    & div {
      &:last-child {
        margin: 0 auto !important;
        width: fit-content !important;  
      }
    }
  }
`;

const LandingCenterButtonWrap = styled.div`
 text-align: center;
`;

// endregion
