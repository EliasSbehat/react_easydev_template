import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { logout as logoutAuth0 } from '@/shared/components/account/auth/withAuth0';
import {
 colorBackground, colorHover, colorText, colorBorder, 
} from '@/utils/palette';
import { marginLeft, right, left } from '@/utils/directions';
import { TopbarBack, TopbarDownIcon } from './BasicTopbarComponents';
import TopbarMenuLink, { TopbarLink } from './TopbarMenuLink';

const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

const TopbarProfile = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const user = useSelector(state => state.user);

  const toggleProfile = () => {
    setIsCollapsed(!isCollapsed);
  };

  const logout = () => {
    localStorage.removeItem('easydev');
    logoutAuth0();
  };

  return (
    <TopbarProfileWrap>
      <TopbarAvatarButton type="button" onClick={toggleProfile}>
        <TopbarAvatarImage
          src={(user && user.avatar) || Ava}
          alt="avatar"
        />
        <TopbarAvatarName>
          {user && user.fullName}
        </TopbarAvatarName>
        <TopbarDownIcon />
      </TopbarAvatarButton>
      {isCollapsed && (
        <TopbarBack
          type="button"
          aria-label="profile button"
          onClick={toggleProfile}
        />
      )}
      <Collapse in={isCollapsed}>
        <TopbarMenuWrap>
          <TopbarMenu>
            <TopbarMenuLink
              title="My Profile"
              icon="user"
              path="/account/profile"
              onClick={toggleProfile}
            />
            <TopbarMenuLink
              title="Calendar"
              icon="calendar-full"
              path="/default_pages/calendar"
              onClick={toggleProfile}
            />
            <TopbarMenuLink
              title="Tasks"
              icon="list"
              path="/todo"
              onClick={toggleProfile}
            />
            <TopbarMenuLink
              title="Inbox"
              icon="inbox"
              path="/mail"
              onClick={toggleProfile}
            />
            <TopbarMenuDivider />
            <TopbarMenuLink
              title="Account Settings"
              icon="cog"
              path="/account/profile"
              onClick={toggleProfile}
            />
            <TopbarMenuLink
              title="Lock Screen"
              icon="lock"
              path="/lock_screen"
              onClick={toggleProfile}
            />
            <TopbarMenuLink
              title="Log Out"
              icon="exit"
              path="/log_in"
              onClick={logout}
            />
          </TopbarMenu>
        </TopbarMenuWrap>
      </Collapse>
    </TopbarProfileWrap>
  );
};

export default TopbarProfile;

// region STYLES

export const TopbarProfileWrap = styled.div`
  position: relative;
  margin-bottom: 0;
  ${marginLeft}: 0;

  @media screen and (max-width: 576px) {
    margin: inherit;
  }

  @media screen and (max-width: 320px) {
    margin: auto 0;
  }
`;

const TopbarAvatarButton = styled.button`
  height: 100%;
  display: flex;
  cursor: pointer;
  position: relative;
  border-radius: 0;
  border: none;
  transition: all 0.3s;
  box-shadow: none;
  padding: 0 15px;
  background-color: transparent;

  &:hover, &:focus, &:active, &:focus:active {
    background-color: ${colorHover};
  }

  &:focus {
    outline: none;
  }

  &:before {
    display: none;
  }  
`;

const TopbarAvatarImage = styled.img`
  margin: auto 0;
  border-radius: 50%;
  height: 36px;
  width: 36px;
`;

export const TopbarAvatarName = styled.p`
  margin: auto 0;
  font-size: 13px;
  line-height: 18px;
  font-weight: 400;
  display: none;
  ${marginLeft}: 10px;
  color: ${colorText};

  @media screen and (min-width: 480px) {
      display: block;
  }
`;

const TopbarMenuWrap = styled.div`
  z-index: 101;
  position: absolute;
  width: 100%;
  min-width: 210px;
  ${right}: 0;

  @media screen and (max-width: 320px) {
    ${right}: -50px;
  }
`;

const TopbarMenu = styled.div`
  width: 200px;
  border-radius: 0;
  border: none;
  padding: 15px 0;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  margin-top: 0;
  background: ${colorBackground};

  button {
    padding: 0;

    &:hover {
      background-color: ${colorHover};
    }

    &${TopbarLink} {
      background-color: transparent;
      border: none;
      padding: 9px 20px;
    }
  }

  *:focus {
    outline: none;
  }

  @media screen and (min-width: 480px) {
    width: 100%;
    ${left}: 0 !important;
  }
`;

const TopbarMenuDivider = styled.div`
  margin: 15px 0;
  border-top: 1px solid ${colorBorder};
`;

// endregion
