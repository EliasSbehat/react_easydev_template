import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import PaperclipIcon from 'mdi-react/PaperclipIcon';
import EmoticonIcon from 'mdi-react/EmoticonIcon';
import { 
  colorAccent, 
  colorAdditional,
  colorBackgroundBody,
  colorFieldsBorder, 
  colorText,
} from '@/utils/palette';
import {
  right,
  marginLeft,
  paddingRight,
  paddingLeft,
} from '@/utils/directions';

const ChatField = () => (
  <ChatTextField>
    <ChatForm>
      <ChatFieldInput
        type="text"
        name="chatField"
        placeholder="Type here…"
      />
      <ChatFieldControls>
        <ChatIconButton
          type="button"
          onClick={(e) => { e.preventDefault(); }}
        >
          <EmoticonIcon />
        </ChatIconButton>
        <ChatIconButton
          type="button"
          onClick={(e) => { e.preventDefault(); }}
        >
          <PaperclipIcon />
        </ChatIconButton>
      </ChatFieldControls>
    </ChatForm>
  </ChatTextField>
);

export default ChatField;

// region STYLES

const ChatTextField = styled.div`
  height: 64px;
  width: 100%;
  border-top: 1px solid ${colorFieldsBorder};
`;

const ChatForm = styled.form`
  width: 100%;
  position: relative;
  padding: 12px 20px;
`;

const ChatFieldInput = styled(Form.Control)`
  width: 100%;
  height: 36px;
  border-radius: 18px;
  font-size: 12px;
  line-height: 1.33;
  transition: 0.3s;
  ${paddingLeft}: 15px;
  ${paddingRight}: 65px;
  background-color: ${colorBackgroundBody};
  border: 1px solid ${colorBackgroundBody};
  color: ${colorText};

  &:focus, &:hover, &:active {
    border-color: ${colorAccent};
    outline: none;
    box-shadow: none;
  }
`;

const ChatFieldControls = styled.div`
  position: absolute;
  top: 12px;
  height: 36px;
  display: flex;
  ${right}: 35px;
`;

const ChatIconButton = styled.button`
  background: transparent;
  border: none;
  height: 36px;
  cursor: pointer;
  padding: 0 5px;
  ${marginLeft}: 5px;

  svg {
    height: 16px;
    width: 16px;
    fill: ${colorAdditional};
    transition: 0.3s;
  }

  &:hover {

    svg {
      fill: ${colorAccent};
    }
  }
`;

// endregion
