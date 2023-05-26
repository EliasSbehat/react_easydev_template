import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colorHover, colorText } from '@/utils/palette';
import { marginRight } from '@/utils/directions';
import TopbarNavDashboards from './TopbarNavDashboards';
import TopbarNavUIElements from './TopbarNavUIElements';
import TopbarNavOtherPages from './TopbarNavOtherPages';

const TopbarNav = () => (
  <TopbarNavigation>
    <TopbarNavDashboards />
    <TopbarNavUIElements />
    <TopbarNavOtherPages />
    <TopbarNavLink to="/documentation/introduction">Documentation</TopbarNavLink>
  </TopbarNavigation>
);

export default TopbarNav;

// region STYLES

const TopbarNavigation = styled.nav`
  width: 75%;
  display: none;
  height: 100%;
  justify-content: center;
  align-items: center;
  ${marginRight}: 140px;

  @media screen and (min-width: 1400px) {
    display: flex;
  }

  @media screen and (max-width: 1550px) {
    width: 65%;
  }
`;

const TopbarNavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 10px 25px;
  transition: 0.3s;
  font-size: 14px;
  color: ${colorText};

  &:hover {
    background-color: ${colorHover};
    color: ${colorText};
  }

  @media screen and (min-width: 1920px) {
    width: 240px;
  }
`;

// endregion
