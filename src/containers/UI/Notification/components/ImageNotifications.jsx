import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import { ImageNotification } from '@/shared/components/Notification';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { Button, ButtonToolbar } from '@/shared/components/Button';

const image = `${process.env.PUBLIC_URL}/img/photo_notification.png`;

const show = (showNotification, position) => showNotification({
  notification(theme) {
    return (
      <ImageNotification
        title="Lora Simpson"
        img={image}
        message="Learning day desirous informed expenses material returned six the. She enabled …"
        theme={theme}
      />
    );
  },
  position,
});

const ImageNotifications = ({ showNotification }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xs={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.notifications.image_notifications')}</CardTitle>
            <CardSubhead>Use ImageNotification with necessary value of properties
              <span className="red-text"> position</span> and <span className="red-text">img</span>
            </CardSubhead>
          </CardTitleWrap>
          <ButtonToolbar>
            <Button variant="outline-secondary" onClick={() => show(showNotification, 'left-up')}>Left Up</Button>
            <Button variant="outline-secondary" onClick={() => show(showNotification, 'right-up')}>Right Up</Button>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </Col>
  );
};

ImageNotifications.propTypes = {
  showNotification: PropTypes.func.isRequired,
};

export default ImageNotifications;
