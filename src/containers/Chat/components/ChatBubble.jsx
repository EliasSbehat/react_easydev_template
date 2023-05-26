import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import { ContactProps, MessageProps } from '@/shared/prop-types/ChatProps';
import { 
  colorAccent,
  colorAccentHover,
  colorAdditional,
  colorBubbleActive,
  colorText,
  colorBubble,
} from '@/utils/palette';
import { 
  paddingRight,
  paddingLeft,
  marginRight,
  marginLeft, 
  right, 
  left,
} from '@/utils/directions';

const ChatBubble = ({ contact, message, active }) => (
  <ChatBubbleWrap active={active}>
    <ChatBubbleAvatar>
      <img src={contact.avatar} alt="ava" />
    </ChatBubbleAvatar>
    {message.file ? (
      <ChatBubbleMessageWrap file>
        <ChatBubbleContactName>{contact.name}</ChatBubbleContactName>
        <img src={message.file.preview} alt={message.message} />
        <ChatBubbleDate>{moment(message.date).format('LT')}</ChatBubbleDate>
        <ChatBubbleDownloadWrap>
          <ChatBubbleFileName>
            <span>{message.message}</span>
            <span>{message.file.size}</span>
          </ChatBubbleFileName>
          <ChatBubbleDownload href={message.file.preview} download>Download</ChatBubbleDownload>
        </ChatBubbleDownloadWrap>
      </ChatBubbleMessageWrap>
    ) : (
      <ChatBubbleMessageWrap>
        <ChatBubbleContactName>{contact.name}</ChatBubbleContactName>
        <ChatBubbleMessage>{message.message}</ChatBubbleMessage>
        <ChatBubbleDate>{moment(message.date).format('LT')}</ChatBubbleDate>
      </ChatBubbleMessageWrap>
    )}
  </ChatBubbleWrap>
);

ChatBubble.propTypes = {
  contact: ContactProps.isRequired,
  message: MessageProps.isRequired,
  active: PropTypes.bool,
};

ChatBubble.defaultProps = {
  active: false,
};

export default ChatBubble;

// region STYLES

const ChatBubbleWrap = styled.div`
  display: flex;
  margin-bottom: 20px;
  position: relative;

  ${props => props.active && `
  
    .chat__bubble-message-wrap {
      background-color: ${colorBubbleActive(props)};
    }
  `}

  &:last-child {
    margin-bottom: 0;
  }
`;

const ChatBubbleAvatar = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  overflow: hidden;
  border-radius: 50%;
  display: none;
  ${marginRight}: 10px;

  img {
    height: 100%;
    width: 100%;
  }

  @media screen and (min-width: 425px) {
    display: block;
  }
`;

const ChatBubbleMessageWrap = styled.div`
  max-width: 570px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 0 40px 40px 20px;
  position: relative;
  ${paddingRight}: 40px;
  ${paddingLeft}: 20px;
  background-color: ${colorBubble};
  ${props => props.file && 'padding: 10px 20px 20px 20px'};

  @media screen and (min-width: 1366px) {
    position: static;
  }

  img {
    max-width: 215px;
  }
`;

const ChatBubbleContactName = styled.p`
  margin-top: 0;
  margin-bottom: 2px;
  font-size: 13px;
  font-weight: 500;
  color: ${colorAccent};
  ${paddingRight}: 50px;
`;

const ChatBubbleDate = styled.p`
  color: ${colorAdditional};
  font-size: 10px;
  margin: 0;
  text-align: end;
  ${right}: 36px;

  @media screen and (min-width: 1366px) {
    ${right}: 0;
  }
`;

const ChatBubbleMessage = styled.p`
  margin: 0 0 10px 0;
  font-size: 12px;
  color: ${colorText};
`;

const ChatBubbleDownload = styled.a`
  color: ${colorAccent};
  font-weight: 500;

  &:hover {
    color: ${colorAccentHover};
  }
`;

const ChatBubbleDownloadWrap = styled.div`
  max-width: 215px;
  margin-top: 10px;
  font-size: 10px;

  @media screen and (min-width: 1366px) {
    position: absolute;
    top: 0;
    max-width: calc(100% - 375px);
    width: 300px;
    margin-top: 0;
    ${left}: 315px;
  }
`;

const ChatBubbleFileName = styled.p`
  white-space: nowrap;
  display: flex;

  span:first-child {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  span:last-child {
    color: ${colorAdditional};
    ${marginLeft}: 5px;
  }
`;

// endregion
