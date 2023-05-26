import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { landingAccentColor } from '@/utils/palette';
import { marginLeft } from '@/utils/directions';
import { LandingButtonGradient, LandingButton } from '../BasicLandingElements';
import { ReactComponent as Logo } from './images/aspirity_logo.svg';

const Menu = () => {
  const [active, setActive] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);

    return () => window.removeEventListener('scroll', changeBackground);
  }, []);

  return (
    <LandingMenuWrap active={active}>
      <LandingMenuContainer>
        <LandingMenuLogoWrap target="_blank" href="http://aspirity.com/">
          <Logo />
        </LandingMenuLogoWrap>
        <LandingMenuNav>
          <LandingHireUsButton
            target="_blank"
            rel="noopener noreferrer"
            // eslint-disable-next-line max-len
            href="https://aspirity.com/easydev?utm_source=easydev_landing&utm_medium=referral&utm_campaign=templates#hireus"
          >
            Hire Us
          </LandingHireUsButton>
          <LandingNavButton
            target="_blank"
            rel="noopener noreferrer"
            href="https://1.envato.market/Buy-now-React"
          >
            Buy now
          </LandingNavButton>
        </LandingMenuNav>
      </LandingMenuContainer>
    </LandingMenuWrap>
  );
};

export default Menu;

// region STYLES


const LandingMenuWrap = styled.div`
  position: fixed;
  width: 100%;
  z-index: 10;
  transition: 0.3s;
  background: ${props => (props.active ? 'rgba(255, 255, 255, 0.11)' : 'transparent')};
  backdrop-filter: ${props => (props.active ? 'blur(5px)' : 'none')};
`;

const LandingMenuContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  padding: 20px;
`;

const LandingMenuLogoWrap = styled.a`
  
  svg {
    height: 22px;
  }

  @media screen and (min-width: 576px) {
    
    svg {
      height: 30px;
    }
  }
`;

const LandingMenuNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  ${marginLeft}: auto;
  gap: 20px;

  button {
    position: relative;
    background: transparent;
    border: none;
    color: ${landingAccentColor};
    padding: 0;
    font-size: 14px;
    transition: 0.3s;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    white-space: nowrap;

    &:hover {
      color: ${darken(0.15, landingAccentColor)};
    }
  }
`;

const LandingNavButton = styled(LandingButtonGradient)`
  width: 120px;
  
  @media screen and (min-width: 576px) {
    width: 145px;
  }
`;

const LandingHireUsButton = styled(LandingButton)`
  display: none;
  
  @media screen and (min-width: 576px) {
    display: initial;
  }
`;

// endregion
