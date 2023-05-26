import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import styled from 'styled-components';
import MailIcon from 'mdi-react/MailIcon';
import { TopbarBack, TopbarButton, TopbarButtonNewLabel } from './BasicTopbarComponents';
import {
  TopbarCollapse,
  TopbarCollapseContent,
  TopbarCollapseTitleWrap,
  TopbarCollapseItem,
  TopbarCollapseImageWrap,
  TopbarCollapseMessage,
  TopbarCollapseName,
  TopbarCollapseDate,
  TopbarCollapseLink,
  TopbarCollapseTitle,
  TopbarCollapseButton,
} from './CollapseTopbarComponents';

const notifications = [
  {
    id: 0,
    ava: `${process.env.PUBLIC_URL}/img/topbar/ava.png`,
    name: 'Cristopher Changer',
    message: 'Good but communication was good e..',
    date: '09:02',
  },
  {
    id: 1,
    ava: `${process.env.PUBLIC_URL}/img/topbar/ava2.png`,
    name: 'Sveta Narry',
    message: 'It is a long established fact that a read..',
    date: '09:00',
  },
  {
    id: 2,
    ava: `${process.env.PUBLIC_URL}/img/topbar/ava3.png`,
    name: 'Lory McQueen',
    message: 'There are many variations of passages..',
    date: '08:43',
  },
  {
    id: 3,
    ava: `${process.env.PUBLIC_URL}/img/topbar/ava2.png`,
    name: 'Cristopher Changer',
    message: 'Yas sent you an invitation to join proje..',
    date: '08:43',
  },
];

const TopbarMail = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const collapseMail = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <TopbarCollapse>
      <TopbarMailButton type="button" onClick={collapseMail}>
        <MailIcon />
        <TopbarButtonNewLabel>
          <span />
        </TopbarButtonNewLabel>
      </TopbarMailButton>
      {isCollapsed && (
        <TopbarBack
          aria-label="topbar__back"
          type="button"
          onClick={collapseMail}
        />
      )}
      <Collapse
        in={isCollapsed}
      >
        <TopbarCollapseContent>
          <TopbarCollapseTitleWrap>
            <TopbarCollapseTitle>Unread messages</TopbarCollapseTitle>
            <TopbarCollapseButton type="button">Mark all as read</TopbarCollapseButton>
          </TopbarCollapseTitleWrap>
          {notifications.map(notification => (
            <TopbarCollapseItem key={notification.id}>
              <TopbarCollapseImageWrap>
                <img src={notification.ava} alt="" />
              </TopbarCollapseImageWrap>
              <TopbarCollapseName>{notification.name}</TopbarCollapseName>
              <TopbarMailCollapseMessage>{notification.message}</TopbarMailCollapseMessage>
              <TopbarCollapseDate>{notification.date}</TopbarCollapseDate>
            </TopbarCollapseItem>
          ))}
          <TopbarCollapseLink to="/mail" onClick={collapseMail}>
            See all messages
          </TopbarCollapseLink>
        </TopbarCollapseContent>
      </Collapse>
    </TopbarCollapse>
  );
};

export default TopbarMail;

// region STYLES

const TopbarMailCollapseMessage = styled(TopbarCollapseMessage)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const TopbarMailButton = styled(TopbarButton)`

  @media screen and (max-width: 640px) {
    right: 5px !important;
  }
`;

// endregion
