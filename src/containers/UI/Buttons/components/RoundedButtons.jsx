import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { Button, ButtonToolbar } from '@/shared/components/Button';

const RoundedButtons = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.buttons.rounded_buttons')}</CardTitle>
            <CardSubhead>
              Use default button with a prop <span className="red-text">rounded</span>
            </CardSubhead>
          </CardTitleWrap>
          <ButtonToolbar>
            <Button rounded variant="outline-secondary">Minimal</Button>
            <Button rounded variant="secondary">Secondary</Button>
            <Button disabled rounded>Disabled</Button>
            <Button variant="primary" rounded>Primary</Button>
            <Button variant="success" rounded>Success</Button>
            <Button variant="warning" rounded>Warning</Button>
            <Button variant="danger" rounded>Danger</Button>
            <Button variant="outline-primary" rounded>Primary</Button>
            <Button variant="outline-success" rounded>Success</Button>
            <Button variant="outline-warning" rounded>Warning</Button>
            <Button variant="outline-danger" rounded>Danger</Button>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RoundedButtons;
