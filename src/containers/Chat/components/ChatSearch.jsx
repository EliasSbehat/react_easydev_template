import React from 'react';
import styled from 'styled-components';
import MagnifyIcon from 'mdi-react/MagnifyIcon';
import { 
  colorAdditional,
  colorBackgroundBody,
  colorBlue,
  colorFieldsBorder,
  colorText,
} from '@/utils/palette';
import {
  paddingLeft,
  paddingRight,
  left,
} from '@/utils/directions';

const ChatSearch = () => (
  <ChatSearchWrap>
    <ChatSearchInput placeholder="Search" />
    <MagnifyIcon />
  </ChatSearchWrap>
);

export default ChatSearch;

// region STYLES

const ChatSearchWrap = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  position: relative;
  border-bottom: 1px solid ${colorFieldsBorder};

  svg {
    fill: ${colorAdditional};
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 18px;
    width: 18px;
    pointer-events: none;
    ${left}: 15px;
  }
`;

const ChatSearchInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 12px;
  transition: all 0.3s;
  ${paddingLeft}: 38px;
  ${paddingRight}: 10px;
  background-color: ${colorBackgroundBody};
  border: 1px solid ${colorBackgroundBody};
  color: ${colorText};

  &:focus, &:active {
    outline: none;
    border-color: ${colorBlue};
  }

  &::-webkit-input-placeholder {
    color: ${colorAdditional};
  }
  &::-moz-placeholder {
    color: ${colorAdditional};
  }
  &:-moz-placeholder {
    color: ${colorAdditional};
  }
  &:-ms-input-placeholder {
    color: ${colorAdditional};
  }
`;

// endregion
