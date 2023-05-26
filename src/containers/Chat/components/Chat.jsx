import React, { useState } from 'react';
import styled from 'styled-components';
import Scrollbar from '@/shared/components/ScrollBar';
import { CurrentUserProps, ContactsProps } from '@/shared/prop-types/ChatProps';
import {
  colorAdditional, 
  colorBackground, 
  colorBackgroundBody,
  colorFieldsBorder,
} from '@/utils/palette';
import { 
  borderRight,
  left,
  right,
  marginRight,
} from '@/utils/directions';
import ChatContact from './ChatContact';
import ChatBubble from './ChatBubble';
import ChatSearch from './ChatSearch';
import ChatField from './ChatField';
import ChatTopbar from './ChatTopbar';

const Chat = ({ currentUser, contacts }) => {
  const [currentMessages, setCurrentMessages] = useState(contacts[0].messages);
  const [currentChat, setCurrentChat] = useState(contacts[0].userName);
  const [openContacts, setOpenContacts] = useState(false);

  const onOpenChat = (contact) => {
    const dialog = contacts.find(c => c.userName === contact).messages;
    const messages = dialog || null;
    setCurrentChat(contact);
    setCurrentMessages(messages);
  };

  const onOpenContacts = () => {
    setOpenContacts(state => !state);
  };
  
  return (
    <ChatContainer
      open={openContacts}
      onClick={openContacts ? onOpenContacts : null}
      role="presentation"
    >
      <ChatContactList open={openContacts}>
        <ChatSearch />
        <ChatContacts>
          <ChatContactsScroll alwaysShowTracks>
            {contacts.map(item => (
              <ChatContactButton
                key={item.id}
                type="button"
                onClick={e => onOpenChat(item.userName, e)}
              >
                <ChatContact active={item.userName === currentChat} contact={item} />
              </ChatContactButton>
            ))}
          </ChatContactsScroll>
        </ChatContacts>
      </ChatContactList>
      {currentChat === null ? (
        <ChatDialog>
          <ChatTopbar onClick={onOpenContacts} />
          <ChatEmptyMessages>
            <p>Select a chat to start messaging</p>
          </ChatEmptyMessages>
        </ChatDialog>
      ) : (
        <ChatDialog>
          <ChatTopbar
            contact={contacts.find(item => item.userName === currentChat)}
            onClick={onOpenContacts}
          />
          <ChatScroll alwaysShowTracks>
            <ChatMessagesWrap>
              {currentMessages === null || currentMessages.length === 0 ? (
                <ChatMessages>
                  <ChatEmptyMessages>
                    <p>No messages</p>
                  </ChatEmptyMessages>
                </ChatMessages>
              ) : (
                <ChatMessages>
                  {currentMessages.map(item => (
                    <ChatBubble
                      key={item.id}
                      contact={item.userName === currentUser.userName ? currentUser
                        : contacts.find(c => c.userName === item.userName)}
                      message={item}
                      date={item}
                      active={item.userName === currentUser.userName}
                    />
                  ))}
                </ChatMessages>
              )}
            </ChatMessagesWrap>
          </ChatScroll>
          <ChatField />
        </ChatDialog>
      )}
    </ChatContainer>
  );
};

Chat.propTypes = {
  currentUser: CurrentUserProps.isRequired,
  contacts: ContactsProps.isRequired,
};

export default Chat;

// region STYLES

const ChatContainer = styled.div`
  height: calc(100vh - 185px);
  min-height: 400px;
  display: flex;
  overflow: hidden;
  position: relative;
  border-radius: 5px;
  background-color: ${colorBackground};

  @media screen and (max-width: 1023px) {

    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      ${right}: 0;
      left: 0;
      opacity: 0;
      z-index: 0;
      transition: opacity 0.3s, z-index 0.3s 0.3s;
      background-color: ${colorAdditional};
    }
    
    ${props => props.open && `
      &:before {
        opacity: 0.2;
        z-index: 1;
        transition: opacity 0.3s, z-index 0s;
        pointer-events: none;
      }

      .chat__scroll, .chat__text-field {
        pointer-events: none;
      }
    `}
  }
`;

const ChatContactList = styled.div`
  width: 335px;
  height: 100%;
  overflow: hidden;
  transition: transform 0.3s;
  background-color: ${colorBackground};
  ${borderRight}: 1px solid ${colorFieldsBorder};

  @media screen and (max-width: 1023px) {
    max-width: 335px;
    width: 100%;
    transform: translateX(calc(-100% - 1px));
    position: absolute;
    z-index: 1;

    ${props => props.open && `
      transform: translateX(0);
      ${borderRight(props)}: none;
    `}
  }
`;

const ChatContacts = styled.div`
  overflow: auto;
  height: calc(100% - 55px);
`;

const ChatContactButton = styled.button`
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  text-align: ${left};
`;

const ChatDialog = styled.div`
  width: calc(100% - 335px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 1023px) {
    width: 100%;
  }
`;

const ChatMessagesWrap = styled.div`
  width: 100%;
  display: flex;
`;

const ChatMessages = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
`;

const ChatEmptyMessages = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;

  p {
    margin: auto;
    border-radius: 15px;
    padding: 5px 20px;
    color: ${colorAdditional};
    background-color: ${colorBackgroundBody};
  }
`;

const ChatScroll = styled(Scrollbar)`
  text-align: ${left};

  .scrollbar-track {

    &.scrollbar-track-y {
      width: 2px;
      ${marginRight}: 3px;
    }
  }

  .scrollbar-thumb {
    opacity: 0.3;
    width: 5px;
  }
`;

const ChatContactsScroll = styled(Scrollbar)`
  height: 100%;

  .scroll-content {

    &, & > div {
      height: 100%;
    }
  }

  .scrollbar-track {

    &.scrollbar-track-y {
      width: 2px;
      ${marginRight}: 3px;
    }
  }

  .scrollbar-thumb {
    opacity: 0.3;
    width: 5px;
  }
`;

// endregion
