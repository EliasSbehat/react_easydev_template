import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuIcon from 'mdi-react/MenuIcon';
import MoreVertIcon from 'mdi-react/MoreVertIcon';
import VideoIcon from 'mdi-react/VideoIcon';
import PhoneIcon from 'mdi-react/PhoneIcon';
import StarIcon from 'mdi-react/StarIcon';
import { ContactProps } from '@/shared/prop-types/ChatProps';
import {
  colorAccent,
  colorAdditional,
  colorBackground,
  colorFieldsBorder,
  colorIcon,
} from '@/utils/palette';
import {
  marginLeft,
  marginRight,
  left,
} from '@/utils/directions';

const ChatTopbar = ({ onClick, contact }) => (
  <ChatTopbarWrap>
    <ChatTopbarButtonMenu type="button" onClick={onClick}>
      <MenuIcon />
    </ChatTopbarButtonMenu>
    {contact && (
      <ChatTopbarContact>
        <ChatTopBbarContactName>{contact.name}</ChatTopBbarContactName>
        <ChatTopbarContactPost>{contact.post}</ChatTopbarContactPost>
      </ChatTopbarContact>
    )}
    <ChatTopbarRight>
      {contact && (
        <ChatTopbarControls>
          <ChatTopbarButton type="button">
            <VideoIcon />
          </ChatTopbarButton>
          <ChatTopbarButton type="button">
            <PhoneIcon />
          </ChatTopbarButton>
          <ChatTopbarButton type="button">
            <StarIcon />
          </ChatTopbarButton>
        </ChatTopbarControls>
      )}
      <ChatTopbarButton type="button">
        <MoreVertIcon />
      </ChatTopbarButton>
    </ChatTopbarRight>
  </ChatTopbarWrap>
);

ChatTopbar.propTypes = {
  onClick: PropTypes.func.isRequired,
  contact: ContactProps,
};

ChatTopbar.defaultProps = {
  contact: null,
};

export default ChatTopbar;

// region STYLES

const ChatTopbarWrap = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  border-bottom: 1px solid ${colorFieldsBorder};
  background-color: ${colorBackground};
`;

const ChatTopbarButton = styled.button`
  background-color: transparent;
  border: none;
  transition: all 0.3s;
  cursor: pointer;
  width: 50px;
  height: 50px;
  
  svg {
    height: 18px;
    width: 18px;
    transition: 0.3s;
    fill: ${colorIcon};
  }

  &:hover svg {
    fill: ${colorAccent};
  }
`;

const ChatTopbarButtonMenu = styled(ChatTopbarButton)`
  ${marginRight}: -20px;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const ChatTopbarControls = styled.div`
  display: none;

  @media screen and (min-width: 698px) {
    display: flex;
  }
`;

const ChatTopbarRight = styled.div`
  ${marginLeft}: auto;
  display: flex;
`;

const ChatTopbarContact = styled.div`
  text-align: ${left};
  ${marginLeft}: 20px;
`;

const ChatTopBbarContactName = styled.p`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
`;

const ChatTopbarContactPost = styled.p`
  margin: 0;
  color: ${colorAdditional};
  font-size: 11px;
  line-height: 1.45
`;

// endregion
