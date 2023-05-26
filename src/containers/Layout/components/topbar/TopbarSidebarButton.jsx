import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorHover } from '@/utils/palette';

const icon = `${process.env.PUBLIC_URL}/img/burger.svg`;

const TopbarSidebarButton = ({ onClickDesktop, onClickMobile }) => (
  <div>
    <TopbarDesktopButton
      onClick={onClickDesktop}
      type="button"
    >
      <TopbarButtonIcon src={icon} alt="" />
    </TopbarDesktopButton>
    <TopbarMobileButton
      onClick={onClickMobile}
      type="button"
    >
      <TopbarButtonIcon src={icon} alt="" />
    </TopbarMobileButton>
  </div>
);

TopbarSidebarButton.propTypes = {
  onClickDesktop: PropTypes.func.isRequired,
  onClickMobile: PropTypes.func.isRequired,
};

export default TopbarSidebarButton;

// region STYLES

const TopbarButton = styled.button`
  width: 60px;
  height: 60px;
  display: flex;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${colorHover};
  }
`;

export const TopbarDesktopButton = styled(TopbarButton)`
  
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const TopbarMobileButton = styled(TopbarButton)`
  
  @media screen and (min-width: 576px) {
    display: none;
  }
`;

const TopbarButtonIcon = styled.img`
  margin: auto;
  transition: all 0.3s;
  width: 16px;
  z-index: 101;
`;

// endregion
