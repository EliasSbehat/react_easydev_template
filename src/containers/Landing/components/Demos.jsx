import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ThemeProps } from '@/shared/prop-types/ReducerProps';
import { ToggleButtonField } from '@/shared/components/form/ToggleButton';
import { NavLink } from 'react-router-dom';
import {
  LandingSection,
  LandingContainer,
  LandingButton,
} from '../BasicLandingElements';
import { ReactComponent as BackgroundBack } from './images/demos_background_back.svg';

const dashboardDark = `${process.env.PUBLIC_URL}/img/landing/demos/dashboard_dark.png`;
const dashboardLight = `${process.env.PUBLIC_URL}/img/landing/demos/dashboard_light.png`;
const mac = `${process.env.PUBLIC_URL}/img/landing/demos/mac.png`;
const ipad = `${process.env.PUBLIC_URL}/img/landing/demos/ipad.png`;
const macMobile = `${process.env.PUBLIC_URL}/img/landing/demos/mac_mobile.png`;
const backgroundSpot = `${process.env.PUBLIC_URL}/img/landing/demos/background_spot.svg`;
const background = `${process.env.PUBLIC_URL}/img/landing/demos/demos_background.svg`;

const DemoThemeToggle = ({ theme, changeToLight, changeToDark }) => (
  <LandingDemoToggleWrap>
    <p>Dark</p>
    <LandingDemoToggle
      name="demos"
      onChange={theme.className === 'dark' ? changeToLight : changeToDark}
      value={theme.className !== 'dark'}
    />
    <p>Light</p>
  </LandingDemoToggleWrap>
);

DemoThemeToggle.propTypes = {
  theme: ThemeProps.isRequired,
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
};

const Demos = ({ theme, changeToLight, changeToDark }) => (
  <LandingDemosSection>
    <LandingDemosSectionBackgroundBack />
    <LandingDemosSectionBackgroundWrap>
      <LandingDemosSectionBackground src={background} />
    </LandingDemosSectionBackgroundWrap>
    <LandingDemosSectionBackgroundSpot src={backgroundSpot} alt="" />
    <LandingContainer>
      <DemosHeader>
        <h1 className="animate-on-scroll">
          Awesome
          <br />
          Design
        </h1>
        <div>
          <LivePreviewDescription className="animate-on-scroll">
            Over <b>200</b> awesome UI elements.
            <br />
            Make any idea for real <b>with EasyDev</b>
          </LivePreviewDescription>
          <LandingButton as={NavLink} to="/online_marketing_dashboard">Live preview</LandingButton>
        </div>
        <DemoThemeToggle
          theme={theme}
          changeToLight={changeToLight}
          changeToDark={changeToDark}
        />
      </DemosHeader>
    </LandingContainer>
    <DashboardImage theme={theme.className} />
    <LandingContainer>
      <MacContainer>
        <MacImageWrap>
          <MacImage src={mac} alt="" />
        </MacImageWrap>
        <MacContainerText>
          <h2 className="animate-on-scroll">EasyDev looks great on any device!</h2>
          <p className="animate-on-scroll">
            You can use the Easydev on all devices - it&aposll look great
            everywhere! Lazy loading allows your device to display the graphic
            content softly and correctly
          </p>
          <IpadImageWrap>
            <IpadImage src={ipad} alt="" />
          </IpadImageWrap>
          <MacMobileImageWrap>
            <MacMobileImage src={macMobile} alt="" />
          </MacMobileImageWrap>
        </MacContainerText>
      </MacContainer>
    </LandingContainer>
  </LandingDemosSection>
);

Demos.propTypes = {
  theme: ThemeProps.isRequired,
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
};

export default Demos;

// region STYLES

const LandingDemosSectionBackgroundWrap = styled.div`
  position: absolute;
  z-index: -1;
  width: 100vw;
  left: calc(50% - 10px);
  transform: translate(-50%, 0);
`;

const LandingDemosSectionBackgroundBack = styled(BackgroundBack)`
  position: absolute;
  z-index: -1;
  min-width: 100vw;
  left: 50%;
  transform: translate(-50%, -180px);
  min-height: 1360px;
`;

const LandingDemosSectionBackground = styled.img`
  min-width: calc(100vw + 20px);
  min-height: 1360px;
  animation: ease-in-out float-left 4s infinite;
  object-fit: cover;
  object-position: top left;
`;

const LandingDemosSectionBackgroundSpot = styled.img`
  position: absolute;
  z-index: -1;
  left: -100px;
  top: 480px;
  width: 608px;
  height: 570px;
`;

const DashboardImage = styled.div`
  background-size: cover;
  margin-top: 100px;
  background-image: url(${props => (props.theme === 'dark' ? dashboardDark : dashboardLight)});
  background-position: center;
  background-repeat: no-repeat;
  height: 560px;
  
  @media screen and (min-width: 576px) {
    height: 1550px;
  }
`;

const MacContainer = styled.div`
  margin-top: 252px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: relative;
  gap: 32px;
  height: 614px;
  
  @media screen and (min-width: 576px) {
    margin-top: 460px;
  }
`;

const MacContainerText = styled.div`
  max-width: 460px;
  width: 100%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

const MacMobileImageWrap = styled.div`
  position: relative;
  margin-top: 32px;
  height: 442px;

  @media screen and (min-width: 576px) {
    display: none;
  }
`;

const MacMobileImage = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 631px;
  height: 442px;
`;

const MacImageWrap = styled.div`
  width: 100%;
  z-index: -1;
  position: relative;
  display: none;

  @media screen and (min-width: 576px) {
    display: block;
  }
`;

const MacImage = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  height: 614px;
  width: 718px;
`;

const IpadImageWrap = styled.div`
  position: relative;
  margin-top: auto;
  height: 352px;
  display: none;
  
  @media screen and (min-width: 576px) {
    display: block;
  }
`;

const IpadImage = styled.img`
  transform: translate(-12px, 36px);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 532px;
  height: 352px;
`;

const DemosHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  white-space: nowrap;
  flex-wrap: wrap;
  gap: 24px;

  a {
    margin-top: 24px;
    width: 152px;
  }
`;

const LandingDemosSection = styled(LandingSection)`
  margin-bottom: 240px;
`;

const LivePreviewDescription = styled.p`
  margin-top: 16px;
  font-size: 18px;
  line-height: 30px;
`;

const LandingDemoToggleWrap = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-bottom: auto;

  p {
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  }
`;

const LandingDemoToggle = styled(ToggleButtonField)`
  width: auto;
  margin: 0 15px;

  button {
    background-color: #365552 !important;
    width: 40px;
    height: 24px;

    &:after {
      background: #192A35;
      box-shadow: 0px 0px 10px rgba(89, 181, 210, 0.75);
      width: 24px;
      height: 24px;
    }
  }
`;

// endregion
