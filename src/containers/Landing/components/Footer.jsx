import React from 'react';
import styled from 'styled-components';
import { LandingContainer } from '../BasicLandingElements';
import { ReactComponent as Sprout } from './images/sprout.svg';
import { landingGreenColor } from '../../../utils/palette';

const Footer = () => (
  <LandingFooter>
    <LandingContainer>
      <FooterInfo>
        <FooterInfoBlock>
          <LoveAndCoffee className="animate-on-scroll">Made with love<br /> and tons of coffee</LoveAndCoffee>
        </FooterInfoBlock>
        <FooterInfoBlock>
          <p className="animate-on-scroll">
            1390 Market Street, Suite 200<br />
            San Francisco, CA<br />
            94102<br />
            USA
          </p>
        </FooterInfoBlock>
        <FooterInfoBlock>
          <p><a href="mailto:hi@aspirity.com">hi@aspirity.com</a></p>
        </FooterInfoBlock>
      </FooterInfo>
      <CaptionBlock>
        <p>2022 All rights reserved Aspirity Inc.</p>
        <p><Sprout />Vegan product</p>
      </CaptionBlock>
    </LandingContainer>
  </LandingFooter>
);

export default Footer;

// region STYLES

const LandingFooter = styled.footer`
  border-top: 1px solid #454554;
  padding: 48px 0 24px;

  @media screen and (min-width: 576px) {
    padding: 68px 0 32px;
  }
`;

const FooterInfo = styled.div`
  width: 100%;
  margin-bottom: 36px;
  
  @media screen and (min-width: 576px) {
    display: flex;
    margin-bottom: 56px;
  }
`;

const FooterInfoBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #DDDDDD;
  
  a {
    color: #DDDDDD;
    
    &:hover {
      color: ${landingGreenColor};
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 28px;
  }

  @media screen and (min-width: 576px) {
    border-right: 1px solid #454554;
    padding-right: 64px;
    padding-left: 64px;

    &:first-of-type {
      padding-left: 0;
    }

    &:last-of-type {
      border-right: none;
      justify-content: flex-end;
      padding-right: 0;
    }

    &:not(:last-of-type) {
      margin-bottom: 0;
    }
  }
`;

const LoveAndCoffee = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
`;

const CaptionBlock = styled.div`
  opacity: 0.6;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  width: 100%;
  
  svg {
    margin-right: 8px;
  }
  
  & > p:not(:last-of-type) {
    margin-bottom: 16px;
  }
  
  @media screen and (min-width: 576px) {
    display: flex;
    justify-content: space-between;

    & > p:not(:last-of-type) {
      margin-bottom: 0;
    }
  }
`;

// endregion
