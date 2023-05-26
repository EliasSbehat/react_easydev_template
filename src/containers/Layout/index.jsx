import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { paddingLeft } from '@/utils/directions';
import { changeMobileSidebarVisibility, changeSidebarVisibility } from '@/redux/actions/sidebarActions';
import {
  changeThemeToDark, changeThemeToLight,
} from '@/redux/actions/themeActions';
import Topbar from './topbar/Topbar';
import TopbarWithNavigation from './topbar_with_navigation/TopbarWithNavigation';
import Sidebar from './components/sidebar/Sidebar';
import Customizer from './customizer/Customizer';
import WelcomeNotification from './components/WelcomeNotification';

const Layout = () => {
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  const {
    customizer, sidebar, theme, rtl,
  } = useSelector(state => ({
    customizer: state.customizer,
    sidebar: state.sidebar,
    theme: state.theme,
    rtl: state.rtl,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isNotificationShown) {
      WelcomeNotification(theme, rtl, setIsNotificationShown, isNotificationShown);
    }
  }, [theme, rtl, isNotificationShown]);

  const sidebarVisibility = () => {
    dispatch(changeSidebarVisibility());
  };

  const mobileSidebarVisibility = () => {
    dispatch(changeMobileSidebarVisibility());
  };

  const changeToDark = () => {
    dispatch(changeThemeToDark());
  };

  const changeToLight = () => {
    dispatch(changeThemeToLight());
  };

  return (
    <LayoutContainer
      collapse={sidebar.collapse}
      topNavigation={customizer.topNavigation}
    >
      <Customizer
        changeSidebarVisibility={sidebarVisibility}
        changeToLight={changeToLight}
        changeToDark={changeToDark}
      />
      {customizer.topNavigation ? (
        <TopbarWithNavigation
          changeMobileSidebarVisibility={mobileSidebarVisibility}
        />
      ) : (
        <Topbar
          changeMobileSidebarVisibility={mobileSidebarVisibility}
          changeSidebarVisibility={sidebarVisibility}
        />
      )}
      <Sidebar
        sidebar={sidebar}
        changeToDark={changeToDark}
        changeToLight={changeToLight}
        changeMobileSidebarVisibility={mobileSidebarVisibility}
        topNavigation={customizer.topNavigation}
      />
    </LayoutContainer>
  );
};


export default withRouter(Layout);

// region STYLES

const LayoutContainer = styled.div`
  & + div {
    ${props => props.collapse && `
      ${paddingLeft(props)}: 0;
    `};

    @media screen and (min-width: 576px) {
      ${props => props.collapse && `
        ${paddingLeft(props)}: 60px;
      `}

      ${props => props.topNavigation && `
         ${paddingLeft(props)}: 0;
      `}
    }
  }
`;

// endregion
