import React from 'react';
import styled from 'styled-components';
import {
  colorWhite,
} from '@/utils/palette';
import {
  LandingContainer,
  LandingSection,
} from '../BasicLandingElements';

const crypto = `${process.env.PUBLIC_URL}/img/landing/dashboards/crypto.png`;
const ecommerce = `${process.env.PUBLIC_URL}/img/landing/dashboards/ecommerce.png`;
const marketing = `${process.env.PUBLIC_URL}/img/landing/dashboards/marketing.png`;
const app = `${process.env.PUBLIC_URL}/img/landing/dashboards/app.png`;

const Dashboards = () => (
  <LandingDashboardSection>
    <LandingContainer>
      <DashboardHeader>
        <h1 className="animate-on-scroll">
          Dashboards
        </h1>
        <p className="animate-on-scroll">
          Make sure no stats will be lost with our pre built dashboards!
        </p>
      </DashboardHeader>
      <DashboardContainer>
        <DashboardContainerText>
          <span className="animate-on-scroll">Fully Functional Cryptocurrency Dashboard</span>
          <p className="animate-on-scroll">
            Track currencies and exchange rates
          </p>
        </DashboardContainerText>
        <DashboardImageWrap>
          <DashboardImage src={crypto} alt="" />
        </DashboardImageWrap>
      </DashboardContainer>
      <DashboardContainer>
        <DashboardContainerText>
          <span className="animate-on-scroll">E-commerce Dashboard</span>
          <p className="animate-on-scroll">
            Displays sales and profit figures, view reports and latest orders
          </p>
        </DashboardContainerText>
        <DashboardImageWrap>
          <DashboardImage src={ecommerce} alt="" />
        </DashboardImageWrap>
      </DashboardContainer>
      <DashboardContainer>
        <DashboardContainerText>
          <span className="animate-on-scroll">Online Marketing Dashboard</span>
          <p className="animate-on-scroll">
            View statistics for your e-marketing campaigns, track visitors and see stats
          </p>
        </DashboardContainerText>
        <DashboardImageWrap>
          <DashboardImage src={marketing} alt="" />
        </DashboardImageWrap>
      </DashboardContainer>
      <DashboardContainer>
        <DashboardContainerText>
          <span className="animate-on-scroll">App Dashboard</span>
          <p className="animate-on-scroll">
            See how users interact with your mobile or web app, analyze page views and sessions
          </p>
        </DashboardContainerText>
        <DashboardImageWrap>
          <DashboardImage src={app} alt="" />
        </DashboardImageWrap>
      </DashboardContainer>
      <AndMore className="animate-on-scroll">and more...</AndMore>
    </LandingContainer>
  </LandingDashboardSection>
);

export default Dashboards;

// region STYLES

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 64px;
  
  &:nth-child(odd) {

    div {
      margin-left: auto;
      text-align: right;
    }
    
    img {
      right: -8px;
      left: auto;
    }
  }
  
  &:nth-child(even) {
    
    img {
      right: 0;
      left: -8px;
    }
  }
  
  &:last-of-type {
    margin-bottom: 108px;
  }
  
  @media screen and (min-width: 576px) {
    align-items: center;
    gap: 44px;
    margin-bottom: 80px;
    flex-direction: row;

    &:nth-child(odd) {
      
      div {
        margin-left: 0;
        text-align: left;
      }
      
      img {
        right: auto;
        left: -8px;
      }
    }

    &:nth-child(even) {
      flex-direction: row-reverse;

      img {
        right: -8px;
        left: auto;
      }
    }
  }
  
  @media screen and (min-width: 992px) {
    gap: 0;
    margin-bottom: 150px;
  }
`;

const AndMore = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
`;

const DashboardContainerText = styled.div`
  max-width: 264px;
  width: 100%;
  flex-shrink: 0;

  span {
    font-size: 28px;
    font-weight: 700;
    line-height: 40px;
    color: ${colorWhite};
  };

  p {
    margin-top: 20px;
    font-size: 14px;
  };
  
  @media screen and (min-width: 992px) {
    margin-left: 120px;
    margin-right: 120px;
  }
`;

const DashboardImageWrap = styled.div`
  height: 337px;
  position: relative;
  width: 100%;
  margin-top: 40px;
  
  @media screen and (min-width: 576px) {
    margin-top: 0;
  }
`;

const DashboardImage = styled.img`
  position: absolute;
  height: 337px;
  width: 659px;
  left: 0;
`;

const DashboardHeader = styled.div`
  text-align: center;
  margin-bottom: 64px;

  h1 {
    margin-bottom: 24px;
  }
  
  p {
    font-size: 18px;
  };

  @media screen and (min-width: 576px) {
    margin-bottom: 136px;
  }
`;

const LandingDashboardSection = styled(LandingSection)`
  margin-bottom: 240px;
`;

// endregion
