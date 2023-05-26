import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import {
  borderRightColor,
  left,
  marginRight,
  paddingRight,
  paddingLeft,
  borderRight,
} from '@/utils/directions';
import {
  colorAccent,
  colorAdditional,
  colorBackground,
  colorDustyWhite,
  colorHover,
  colorText,
} from '@/utils/palette';

export const TabsWrap = styled.div`
  text-align: ${left};
  min-width: min-content;
`;

export const NavLink = styled(Nav.Link)`
  padding: 10px 20px;
  ${marginRight}: 0px;
  transition: background-color 0.3s;
  cursor: pointer;
  color:${colorText};

  &:hover, &:focus, &:active {
    outline: none;
    background-color:${colorHover} !important;
    border-color:${colorHover} !important;
    border-bottom-color: ${colorDustyWhite} !important;
    color:${colorText};
  }

  &.active, &.active:focus,
  &.active:hover {
    background-color: transparent !important;
    border-color: ${colorDustyWhite} !important;
    border-bottom-color: ${colorBackground} !important;
    color: ${colorText} !important;
  }
`;

export const NavItem = styled(Nav.Item)`

  &.disabled ${NavLink} {
    color: ${colorAdditional};
  }
`;

export const Tabs = styled.div`

  .tab-pane {
    padding-top: 15px;
    
    p:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }
`;

export const BorderedTopTabs = styled(Tabs)`
  
  ${NavLink} {
    border-top: 2px solid transparent !important;
    border-radius: 0;
  }

  ${NavLink}.active {

    &, &:focus, &:hover {
      border-radius: 0;
      border-top: 2px solid ${colorAccent} !important;
    }
  }
`;

export const BorderedBottomTabs = styled(Tabs)`
  
  ${NavLink} {
    border-color: transparent !important;
    border-bottom: 1px solid transparent !important;
    padding-bottom: 11px;
  }

  ${NavLink}.active {

    &, &:focus, &:hover {
      border-radius: 0;
      border-color: transparent !important;
      border-bottom: 2px solid ${colorAccent} !important;
      padding-bottom: 10px;
    }
  }
`;

export const JustifyTabs = styled(Tabs)`
  
  .nav-tabs {
    display: flex;
    flex-wrap: nowrap;

    ${NavItem} {
      width: 100%;

      a {
        text-align: center;
      }
    }
  }
`;

export const VerticalTabs = styled(Tabs)`
  
  ${TabsWrap} {
    display: flex;
  }

  .nav-tabs {
    border-bottom: none;
    width: 90px;
    height: 100%;
    flex-wrap: wrap;

    ${NavItem} {
      margin-top: 0;
      margin-bottom: 0;
      width: 100%;

      ${NavLink} {
        ${paddingRight}: 10px;
        ${paddingLeft}: 0px;
        ${marginRight}: 0;
        ${borderRight}: 2px solid #dddddd !important;
        padding-top: 10px;
        padding-bottom: 10px;
        transition: background-color 0.3s;
        border-radius: 0;
        border: none;
        color: ${colorText};

        &:hover, &:focus, &:active {
          outline: none;
          background-color: ${colorHover};
        }
      }

      ${NavLink}.active, ${NavLink}.active:focus,
      ${NavLink}.active:hover {
        background-color: transparent !important;
        ${borderRightColor}: ${colorAccent} !important;
      }

      &.disabled ${NavLink} {
        color: ${colorAdditional};
      }
    }
  }

  .tab-pane {
    padding-top: 0;
    ${paddingLeft}: 20px;
  }
`;

export const VerticalColoredTabs = styled(VerticalTabs)`

  .nav-tabs ${NavItem} {
    
    ${NavLink} {
      ${borderRightColor}: #eeeeee !important;
      ${paddingLeft}: 10px;
      text-align: center;
    }

    ${NavLink}.active, ${NavLink}.active:focus,
    ${NavLink}.active:hover {
      background-color: #eeeeee !important;
      ${borderRightColor}: #eeeeee !important;
      color: #646777 !important;
    }
  }
`;
