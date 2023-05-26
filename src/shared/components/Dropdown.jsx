import React from 'react';
import styled from 'styled-components';
import { Dropdown as BootstrapDropdown } from 'react-bootstrap';
import {
 colorBackground, colorBlue, colorBlueHover, colorHover, colorText, 
} from '@/utils/palette';
import { marginRight, left } from '@/utils/directions';
import { Button } from './Button';

export const DropdownItem = styled(BootstrapDropdown.Item)`
  transition: all 0.3s;
  padding: 7px 24px;
  cursor: pointer;
  font-family: sans-serif;
  line-height: 1.15;
  color: ${colorText};
  text-align: ${left};
  width: 100%;
  display: block;

  &:hover {
    background: ${colorHover};
    color: ${colorText};
  }

  &:focus,
  &:active,
  &:active:focus {
    outline: none;
  }
`;

export const DropdownMenu = styled(BootstrapDropdown.Menu)`
  width: 170px;
  min-width: auto;
  border-radius: 0;
  border: none;
  margin: 0;
  padding: 15px 0;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  font-size: 13px;
  background: ${colorBackground};

  .active ${DropdownItem} {
    background-color: ${colorBlue};

    &:hover {
      background-color: ${colorBlueHover};
    }
  }
`;


export const DropdownDivider = styled(BootstrapDropdown.Divider)`
  border-top: 1px solid #e9ecef;
`;

export const Dropdown = styled(BootstrapDropdown)`
  
  button {
    ${marginRight}: 0;

    &:after {
      display: none;
    }
  }

  &:last-child button {
    ${marginRight}: 0;
  }

  button svg {
    height: 18px;
    width: 20px;
    ${marginRight}: -5px;
  }
  
  button {
    padding: 10px 15px;
  }

  &.btn-group {
    ${marginRight}: 15px;

    .btn {

      &.dropdown-toggle {
        padding: 7px;

        svg {
          margin-left: 0;
          margin-right: 0;
        }
      }
    }
  }
`;

export const DropdownToggle = props => (
  <Button as={BootstrapDropdown.Toggle} {...props} />
);
