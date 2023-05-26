import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import { changeThemeToDark, changeThemeToLight } from '@/redux/actions/themeActions';
import { landingBackground, landingLightTextColor, colorWhite } from '@/utils/palette';
import Header from './components/Header';
import Technologies from './components/Technologies';
import Dashboards from './components/Dashboards';
import Demos from './components/Demos';
import Features from './components/Features';
import Purchase from './components/Purchase';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Applications from './components/Applications';
import Menu from './components/Menu';
import Updates from './components/Updates';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import scrollAnimation, { splitText } from '../../utils/animateOnScroll';

const noiseBackground = `${process.env.PUBLIC_URL}/img/landing/noise_bg.png`;

const Landing = () => {
  const theme = useSelector(state => state.theme);

  const dispatch = useDispatch();

  const changeToDark = () => {
    dispatch(changeThemeToDark());
  };

  const changeToLight = () => {
    dispatch(changeThemeToLight());
  };
  
  useEffect(() => {
    splitText();
    window.addEventListener('scroll', scrollAnimation);
    window.addEventListener('resize', splitText);

    return () => window.removeEventListener('resize', splitText);
  }, []);

  return (
    <LandingWrap>
      <Menu />
      <Header />
      <Technologies />
      <Features />
      <Updates />
      <Demos theme={theme} changeToDark={changeToDark} changeToLight={changeToLight} />
      <Dashboards />
      <Applications />
      <Element name="feature_request" />
      <ContactUs />
      <Testimonials />
      <Purchase />
      <FAQ />
      <Footer />
    </LandingWrap>
  );
};

export default Landing;

// region STYLES

const LandingWrap = styled.div`
  font-family: 'Poppins', sans-serif;
  width: 100%;
  background: ${landingBackground};
  background-image: url(${noiseBackground});
  position: absolute;
  z-index: 0;
  overflow-x: hidden;

  h1 {
    color: ${colorWhite};
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
  };
  
  h2 {
    color: ${colorWhite};
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
  };

  h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: ${landingLightTextColor};
  };

  p {
    color: ${landingLightTextColor};
  };

  .animate-on-scroll {
    opacity: 0;

    &.scrolled {
      opacity: 1;

      .line {
        overflow: hidden;
        white-space: nowrap;

        &:last-child {
          animation-delay: 0.1s;
        }
      }

      .word {
        opacity: 0;
        animation: slide-in 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        animation-fill-mode: forwards;
      }
    }
  }

  @keyframes slide-in {
    from {
      transform: translateY(40px);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @media screen and (min-width: 576px) {
    
    h1 {
      font-size: 60px;
      line-height: 70px;
    }
  }
`;

// endregion
