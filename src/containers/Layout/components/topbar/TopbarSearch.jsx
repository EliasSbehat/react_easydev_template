import React from 'react';
import styled from 'styled-components';
import CloseIcon from 'mdi-react/CloseIcon';
import { colorAccent, colorBackgroundBody, colorText } from '@/utils/palette';
import {
 marginRight, marginLeft, paddingLeft, paddingRight, right, 
} from '@/utils/directions';
import { TopbarButton } from './BasicTopbarComponents';

const TopbarSearch = () => (
  <TopbarSearchForm>
    <TopbarSearchInput placeholder="Search..." />
    <TopbarSearchButton
      type="button"
      aria-label="topbar search button"
    >
      <CloseIcon />
    </TopbarSearchButton>
  </TopbarSearchForm>
);

export default TopbarSearch;

// region STYLES

const TopbarSearchForm = styled.form`
  display: flex;
  padding: 0;
  position: relative;
  margin: auto 0 15px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const TopbarSearchInput = styled.input`
  width: 100%;
  height: 26px;
  min-width: 50px;
  margin-top: auto;
  border-radius: 13px;
  transition: border 0.3s;
  ${marginRight}: auto;
  ${marginLeft}: 0;
  ${paddingLeft}: 10px;
  ${paddingRight}: 46px;
  background-color: ${colorBackgroundBody};
  border: 1px solid ${colorBackgroundBody};
  color: ${colorText};
  max-width: 300px;
  
  &::placeholder {
    color: #cac1c1;
    ${paddingRight}: 50px;
  }

  &:focus, &:active {
    outline: none;
    border: 1px solid ${colorAccent};
  }
  
  @media screen and (min-width: 576px) {
    margin-bottom: auto;
    max-width: 350px;
  }
`;

const TopbarSearchButton = styled(TopbarButton)`
  position: absolute;
  height: 24px;
  width: 24px;
  border-radius: 13px;
  border: none;
  padding: 0;
  background: transparent;
  top: 1px;
  ${right}: 2px;

  &:hover {
    background-color: ${colorBackgroundBody};
  }
`;

// endregion
