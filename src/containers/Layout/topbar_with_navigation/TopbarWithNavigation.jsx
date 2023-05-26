import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { marginLeft } from '@/utils/directions';
import TopbarLanguage from '../components/topbar/TopbarLanguage';
import TopbarMail from '../components/topbar/TopbarMail';
import TopbarProfile, { TopbarAvatarName, TopbarProfileWrap } from '../components/topbar/TopbarProfile';
import TopbarNotification from '../components/topbar/TopbarNotification';
import TopbarSearch from '../components/topbar/TopbarSearch';
import TopbarSidebarButton, { TopbarDesktopButton, TopbarMobileButton } from '../components/topbar/TopbarSidebarButton';
import TopbarNav from './tobar_nav/TopbarNav';
import {
  TopbarContainer,
  TopbarLeft,
  TopbarRight,
  TopbarRightOver,
  TopbarLogo,
  TopbarSearchWrap,
} from '../components/topbar/BasicTopbarComponents';

const TopbarWithNavigation = ({ changeMobileSidebarVisibility }) => (
  <TopbarNavigationContainer>
    <TopbarLeft>
      <TopbarSidebarButton
        onClickMobile={changeMobileSidebarVisibility}
        onClickDesktop={changeMobileSidebarVisibility}
      />
      <TopbarLogo to="/online_marketing_dashboard" />
    </TopbarLeft>
    <TopbarNav />
    <TopbarRight>
      <TopbarSearchWrap>
        <TopbarSearch />
      </TopbarSearchWrap>
      <TopbarRightOver>
        <TopbarNotification />
        <TopbarMail new />
        <TopbarProfile />
        <TopbarLanguage />
      </TopbarRightOver>
    </TopbarRight>
  </TopbarNavigationContainer>
);

TopbarWithNavigation.propTypes = {
  changeMobileSidebarVisibility: PropTypes.func.isRequired,
};

export default TopbarWithNavigation;

// region STYLES

const TopbarNavigationContainer = styled(TopbarContainer)`
  
  @media screen and (min-width: 1400px) {

    ${TopbarLogo} {
      display: block;
      ${marginLeft}: 15px;
    }

    ${TopbarDesktopButton} {
      display: none;
    }

    ${TopbarMobileButton} {
      display: none;
    }

    ${TopbarAvatarName} {
      display: none;
    }

    ${TopbarProfileWrap} {
      ${marginLeft}: 0;
    }
  }

  @media screen and (min-width: 1200px) {

    ${TopbarAvatarName} {
      display: block;
    }
  }
`;

// endregion
