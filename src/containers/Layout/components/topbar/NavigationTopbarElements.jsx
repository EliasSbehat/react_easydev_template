import styled from 'styled-components';
import {
 colorAdditional, colorHover, colorText, colorAccent, 
} from '@/utils/palette';
import { marginRight, marginLeft } from '@/utils/directions';
import { DropdownToggle, DropdownMenu } from '@/shared/components/Dropdown';

export const TopbarNavigationToggle = styled(DropdownToggle)`
  height: 60px;
  background-color: transparent !important;
  border-radius: 0;
  border: none;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  color: ${colorText};

  &:before, &:after {
    display: none;
  }

  &:hover, &:focus, &:active, &:focus:active {
    background-color: ${colorHover} !important;
    color: ${colorText} !important;
  }

  svg {
    height: 16px;
    width: 16px;
    fill: ${colorAdditional};
    ${marginLeft}: 3px;
    ${marginRight}: 0;
  }

  @media screen and (min-width: 1920px) {
    width: 240px;
  }
`;

export const TopbarNavigationMenu = styled(DropdownMenu)`
  width: 240px;
  border-top: 2px solid ${colorAccent};
  margin-top: -2px;

  .dropdown-item {
    padding: 0;

    .topbar__link {
      white-space: nowrap;
    }
  }
`;
