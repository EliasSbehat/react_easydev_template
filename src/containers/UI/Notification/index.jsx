import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import Notification from 'rc-notification';
import BasicNotifications from './components/BasicNotifications';
import ImageNotifications from './components/ImageNotifications';
import ColorStates from './components/ColorStates';
import ColorStatesFullWidth from './components/ColorStatesFullWidth';

const objectNotification = {
  LU: null,
  RU: null,
  TC: null,
};

Notification.newInstance({ style: { top: 65 } }, (n) => { objectNotification.LU = n; });
Notification.newInstance({ style: { top: 65 } }, (n) => { objectNotification.RU = n; });
Notification.newInstance({ style: { top: 65 } }, (n) => { objectNotification.TC = n; });

const Notifications = () => {
  const { t } = useTranslation('common');
  
  const { rtl, theme } = useSelector(state => ({
    rtl: state.rtl,
    theme: state.theme,
  }));

  const showNotification = ({ notification, position }, direction) => {
    let type;
    let style;
    const notificationDefaultProps = {
      content: notification(theme),
      key: new Date().getTime(),
      duration: 5,
      closable: true,
      className: `${position} ${direction}-support`,
    };

    switch (position) {
      case 'left-up':
      style = { top: 0, left: 0 };
      type = 'LU';
        break;
      case 'right-up':
      style = { top: 0, left: 'calc(100vw - 100%)' };
      type = 'RU';
        break;
      default:
      style = { top: 0, left: 0 };
      type = 'TC';
        break;
    }

    objectNotification[type].notice({
      ...notificationDefaultProps,
      style,
    });
  };

  useEffect(() => {
    const currentTheme = theme.className === 'dark' ? 'light' : 'dark';
    [].forEach.call(document.querySelectorAll(`.notification--${currentTheme}`), (el) => {
      // eslint-disable-next-line no-param-reassign
      el.className = el.className
        .replace(`notification--${currentTheme}`, `notification--${theme.className}`);
    });
  }, [theme]);

  const onShowNotification = ({ notification, position }) => {
    showNotification({ notification, position }, rtl.direction);
  };

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('ui_elements.notifications.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <BasicNotifications
          theme={theme}
          showNotification={onShowNotification}
        />
        <ImageNotifications
          theme={theme}
          showNotification={onShowNotification}
        />
        <ColorStates
          theme={theme}
          showNotification={onShowNotification}
        />
        <ColorStatesFullWidth
          showNotification={onShowNotification}
        />
      </Row>
    </Container>
  );
};

export default Notifications;
