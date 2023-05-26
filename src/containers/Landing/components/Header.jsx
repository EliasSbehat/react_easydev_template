import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { colorWhite, landingDarkTextColor } from '@/utils/palette';
import {
  LandingButton,
  LandingButtonGradient,
  LandingContainer,
} from '../BasicLandingElements';
import { ReactComponent as Logo } from './images/header_logo.svg';

const leftTop = `${process.env.PUBLIC_URL}/img/landing/header/header_left_top.png`;
const leftBottom = `${process.env.PUBLIC_URL}/img/landing/header/header_left_bottom.png`;
const rightTop = `${process.env.PUBLIC_URL}/img/landing/header/header_right_top.png`;
const rightMiddle = `${process.env.PUBLIC_URL}/img/landing/header/header_right_middle.png`;
const rightBottom = `${process.env.PUBLIC_URL}/img/landing/header/header_right_bottom.png`;

const background = `${process.env.PUBLIC_URL}/img/landing/header_bg.png`;
const aspirity = `${process.env.PUBLIC_URL}/img/landing/header_aspirity.svg`;
const img = `${process.env.PUBLIC_URL}/img/landing/macbook.png`;

const Header = () => (
  <LandingHeader>
    <LandingContainer>
      <Row>
        <Col md={12}>
          <LandingHeaderLogo />
          <LandingHeaderLogoTitle>
            Modern Admin Template by
            <LandingHeaderAspirity src={aspirity} alt="aspirity" />
            <a target="_blank" href="http://aspirity.com/" rel="noreferrer">Aspirity</a>
          </LandingHeaderLogoTitle>
          <LandingHeaderTitle className="animate-on-scroll scrolled">
            Front-end has never been so easy
          </LandingHeaderTitle>
          <LandingHeaderSubhead className="animate-on-scroll scrolled">
            Use 200+ clean coded components and 50+ <br />
            pre-designed pages for your project.
          </LandingHeaderSubhead>
          <LandingHeaderButtonWrap>
            <LandingButtonGradient
              target="_blank"
              rel="noopener noreferrer"
              href="https://1.envato.market/Buy-now-React"
            >
              Buy now
            </LandingButtonGradient>
            <LandingButton
              as={NavLink}
              to="/online_marketing_dashboard"
              target="_blank"
            >
              Live preview
            </LandingButton>
          </LandingHeaderButtonWrap>
          <div style={{ position: 'relative' }}>
            <HeaderLeftTopShape src={leftTop} />
            <HeaderLeftBottomShape src={leftBottom} />
            <LandingHeaderImage src={img} alt="macbook" />
            <HeaderRightTopShape src={rightTop} />
            <HeaderRightMiddleShape src={rightMiddle} />
            <HeaderRightBottomShape src={rightBottom} />
          </div>
        </Col>
      </Row>
    </LandingContainer>
  </LandingHeader>
);

export default Header;

// region STYLES

const LandingHeader = styled.div`
  padding-top: 100px;
  text-align: center;
  background-repeat: no-repeat;
  background-image: url(${background});
  background-position: top right;
  margin-bottom: 96px;
  
  @media screen and (min-width: 576px) {
    margin-bottom: 232px;
  }
`;

const LandingHeaderLogo = styled(Logo)`
  width: 92px;
  margin-bottom: 8px;
  
  @media screen and (min-width: 576px) {
    width: 162px;
    margin-bottom: 12px;
  }
  
  @media screen and (min-width: 992px) {
    width: 186px;
  }
`;

const LandingHeaderLogoTitle = styled.div`
  color: ${landingDarkTextColor};
  display: flex;
  justify-content: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  margin-bottom: 28px;

  a {
    color: ${landingDarkTextColor};
    font-weight: 700;
    text-decoration-line: underline;
  }
  
  @media screen and (min-width: 576px) {
    font-size: 14px;
    margin-bottom: 50px;
  }
`;

const LandingHeaderAspirity = styled.img`
  width: 17px;
`;

const LandingHeaderTitle = styled.h1`
  text-align: center;
  max-width: 680px;
  color: ${colorWhite};
  margin: auto auto 24px;
  
  @media screen and (min-width: 576px) {
    margin: auto auto 32px;
  }
`;

const LandingHeaderSubhead = styled.p`
  color: ${landingDarkTextColor};
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
  margin-bottom: 24px;
  
  @media screen and (min-width: 576px) {
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 48px;
  }
`;

const LandingHeaderButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 48px;
  align-items: center;
  gap: 16px;

  a {
    width: 174px;
  }
  
  @media screen and (min-width: 576px) {
    flex-direction: row;
    gap: 25px;
    margin-bottom: 128px;
  }
`;

const LandingHeaderImage = styled.img`
  max-width: 1000px;
`;

const HeaderLeftTopShape = styled.img`
  position: absolute;
  width: 80px;
  top: 60px;
  left: -5%;
  z-index: -1;
  animation: ease-in-out float-left 4s infinite;
  
  @keyframes float-left {
    from {
      transform: translate(-10px, -10px);
    }
    50% {
      transform: translate(10px, 10px);
    }
    to {
      transform: translate(-10px, -10px);
    }
  }
  
  @media screen and (min-width: 768px) {
    width: 120px;
    top: 60px;
    left: -5%;
  }
  
  @media screen and (min-width: 992px) {
    width: 200px;
    top: 60px;
    left: -10%;
  }
`;

const HeaderLeftBottomShape = styled.img`
  position: absolute;
  width: 50px;
  top: 160px;
  left: 0;
  z-index: -1;
  animation: ease-in-out float-left 4s infinite;
  animation-delay: -3s;

  @media screen and (min-width: 768px) {
    width: 80px;
    top: 200px;
    left: 0;
  }

  @media screen and (min-width: 992px) {
    width: 200px;
    top: 250px;
    left: 0;
  }
`;

const HeaderRightTopShape = styled.img`
  position: absolute;
  width: 40px;
  top: 70px;
  left: 90%;
  z-index: -1;
  animation: ease-in-out float-right 4s infinite;

  @keyframes float-right {
    from {
      transform: translate(10px, -10px);
    }
    50% {
      transform: translate(-10px, 10px);
    }
    to {
      transform: translate(10px, -10px);
    }
  }

  @media screen and (min-width: 768px) {
    width: 60px;
    top: 70px;
    left: 90%;
  }

  @media screen and (min-width: 992px) {
    width: 98px;
    top: 150px;
    left: 90%;
  }
`;

const HeaderRightMiddleShape = styled.img`
  position: absolute;
  width: 68px;
  top: 90px;
  left: calc(90% + 40px);
  z-index: -1;
  animation: ease-in-out float-right 4s infinite;
  animation-delay: -0.5s;

  @media screen and (min-width: 768px) {
    width: 92px;
    top: 100px;
    left: calc(90% + 70px);
  }

  @media screen and (min-width: 992px) {
    width: 148px;
    top: 150px;
    left: calc(90% + 120px);
  }
`;

const HeaderRightBottomShape = styled.img`
  position: absolute;
  width: 50px;
  top: 170px;
  left: 90%;
  z-index: -1;
  animation: ease-in-out float-right 4s infinite;
  animation-delay: -1s;

  @media screen and (min-width: 768px) {
    width: 80px;
    top: 185px;
    left: 90%;
  }

  @media screen and (min-width: 992px) {
    width: 130px;
    top: 250px;
    left: calc(90% - 20px);
  }
`;

// endregion
