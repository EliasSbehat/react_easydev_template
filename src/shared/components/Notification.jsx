import React from 'react';
import PropTypes from 'prop-types';
import Notification from 'rc-notification';
import styled from 'styled-components';
import { ThemeProps } from '@/shared/prop-types/ReducerProps';
import {
  paddingLeft,
} from '@/utils/directions';
import {
  colorAccent,
  colorBlackBackground,
  colorBlue,
  colorRed,
  colorWhite,
  colorYellow,
} from '@/utils/palette';

let notification = null;
// eslint-disable-next-line no-return-assign
Notification.newInstance({ style: { top: 65 } }, n => notification = n);

const showNotification = (theme, rtl, title, message) => {
  const notificationInitialProps = {
    content: <BasicNotification
      color="danger"
      title={title}
      message={message}
      theme={theme}
    />,
    closable: true,
    duration: 5,
    style: { top: 0, left: 'calc(100vw - 100%)' },
    className: `right-up ${rtl.direction}-support`,
  };
  notification.notice(notificationInitialProps);
};

const BasicNotification = ({
  color, title, message, theme,
}) => (
  <NotificationContent color={color} theme={theme.className}>
    <NotificationMessageWrap>
      <NotificationTitle>{title}</NotificationTitle>
      <NotificationMessage>{message}</NotificationMessage>
    </NotificationMessageWrap>
  </NotificationContent>
);

BasicNotification.propTypes = {
  theme: ThemeProps.isRequired,
  color: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
};

BasicNotification.defaultProps = {
  color: '',
  title: '',
};

const ImageNotification = ({
  img, title, message, theme,
}) => (
  <NotificationContent theme={theme.className}>
    <NotificationImage>
      <img src={img} alt="" />
    </NotificationImage>
    <NotificationMessageWrap>
      <NotificationTitle>{title}</NotificationTitle>
      <NotificationMessage>{message}</NotificationMessage>
    </NotificationMessageWrap>
  </NotificationContent>
);

ImageNotification.propTypes = {
  theme: ThemeProps.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
  message: PropTypes.string.isRequired,
};

ImageNotification.defaultProps = {
  title: '',
};

const FullWideNotification = ({ color, message }) => (
  <NotificationContent fullWidth color={color}>
    <NotificationMessage>{message}</NotificationMessage>
  </NotificationContent>
);

FullWideNotification.propTypes = {
  color: PropTypes.string,
  message: PropTypes.string.isRequired,
};

FullWideNotification.defaultProps = {
  color: '',
};

export {
  BasicNotification,
  ImageNotification,
  FullWideNotification,
  showNotification,
};

// region STYLES

const NotificationMessage = styled.p`
  margin-top: 0;
  font-size: 12px;
`;

const NotificationTitle = styled.h5`
  margin-bottom: 8px;
  font-weight: 700;
`;

const NotificationImage = styled.div`
  height: 106px;
  width: 106px;
  overflow: hidden;
  flex-shrink: 0;

  & ~ * {
    ${paddingLeft}: 106px;
  }
`;

const getColor = (color) => {
  switch (color) {
    case 'light':
      return colorWhite;
    case 'dark':
      return colorBlackBackground;
    case 'primary':
      return colorBlue;
    case 'success':
      return colorAccent;
    case 'warning':
      return colorYellow;
    case 'danger':
      return colorRed;
      
    default:
      return colorWhite;
  }
};

const NotificationMessageWrap = styled.div`
  padding: 20px 40px 20px 25px;
`;

const NotificationContent = styled.div`
  max-width: 400px;
  width: calc(100% - 50px);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.07);
  background: ${props => getColor(props.color || props.theme)};
  position: relative;
  margin: 10px 25px;
  display: flex;

  ${props => props.fullWidth && `
    max-width: 100vw;
    width: 100vw;
    margin: 0;
    padding: 20px 40px 20px 25px;

    ${NotificationMessage} {
      text-align: center;
      width: calc(100% - 30px);
    }
  `}

  ${props => (props.color || props.theme === 'dark') && `
    ${NotificationMessage}, ${NotificationTitle} {
      color: ${colorWhite};
    }
  `}
`;

// endregion
