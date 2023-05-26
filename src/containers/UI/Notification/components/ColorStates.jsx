import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import { BasicNotification } from '@/shared/components/Notification';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { Button, ButtonToolbar } from '@/shared/components/Button';

const show = (showNotification, color) => showNotification({
  notification(theme) {
    return (
      <BasicNotification
        color={color}
        title="Alert panel divider"
        message="Learning day desirous informed expenses material returned six the.
            She enabled invited exposed him another."
        theme={theme}
      />
    );
  },
  position: 'right-up',
});

const ColorStates = ({ showNotification }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xs={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.notifications.color_notifications')}</CardTitle>
            <CardSubhead>Use BasicNotification with color
              <span className="red-text"> primary</span>,
              <span className="red-text"> success</span>,
              <span className="red-text"> warning</span>,
              <span className="red-text"> danger</span>
            </CardSubhead>
          </CardTitleWrap>
          <ButtonToolbar>
            <Button variant="primary" onClick={() => show(showNotification, 'primary')}>Primary</Button>
            <Button variant="success" onClick={() => show(showNotification, 'success')}>Success</Button>
            <Button variant="warning" onClick={() => show(showNotification, 'warning')}>Warning</Button>
            <Button variant="danger" onClick={() => show(showNotification, 'danger')}>Danger</Button>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </Col>
  );
};

ColorStates.propTypes = {
  showNotification: PropTypes.func.isRequired,
};

export default ColorStates;
