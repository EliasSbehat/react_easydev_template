import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ContactProps } from '@/shared/prop-types/ChatProps';
import {
  colorAccent, 
  colorAdditional,
  colorFieldsBorder,
  colorHover,
} from '@/utils/palette';
import {
  marginRight,
  marginLeft,
} from '@/utils/directions';

const ChatUser = ({ contact, active }) => {
  let lastMessage = '';
  if (contact.messages.length) {
    lastMessage = contact.messages.slice(-1)[0].message;
  } else {
    lastMessage = 'new contact';
  }

  return (
    <ChatContactWrap active={active}>
      <ChatContactAvatar>
        <img src={contact.avatar} alt="ava" />
      </ChatContactAvatar>
      <ChatContactPreview>
        <ChatContactName>{contact.name}</ChatContactName>
        <ChatContactPost>{contact.post}</ChatContactPost>
        <ChatContactLastMessage>{lastMessage}</ChatContactLastMessage>
      </ChatContactPreview>
    </ChatContactWrap>
  );
};

ChatUser.propTypes = {
  contact: ContactProps.isRequired,
  active: PropTypes.bool,
};

ChatUser.defaultProps = {
  active: false,
};

export default ChatUser;

// region STYLES

const ChatContactWrap = styled.div`
  height: 72px;
  display: flex;
  cursor: pointer;
  transition: all 0.3s;
  border-bottom: 1px solid ${colorFieldsBorder};

  &:hover {
    background-color: ${colorHover};
  }
  
  ${props => props.active && `
    background-color: ${colorHover(props)};

    &:hover {
      background-color: ${colorHover(props)};
    }
  `}
`;

const ChatContactAvatar = styled.div`
  display: flex;
  flex-flow: column;
  align-self: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
  min-width: 40px;
  ${marginRight}: 10px;
  ${marginLeft}: 15px;

  img {
    height: 100%;
  }
`;

const ChatContactPreview = styled.div`
  display: flex;
  flex-flow: column;
  align-self: center;
  width: calc(100% - 80px);
  ${marginRight}: 20px;
  ${marginLeft}: 0;
`;

const ChatContactName = styled.p`
  font-size: 12px;
  font-weight: 500;
  margin: 0;
  color: ${colorAccent};
`;

const ChatContactPost = styled.p`
  margin-top: 0;
  margin-bottom: 3px;
  font-size: 10px;
  line-height: 1.2;
  color: ${colorAdditional};
`;

const ChatContactLastMessage = styled.p`
  margin: 4px 0 0 0;
  font-size: 12px;
  line-height: 1.33;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

// endregion
