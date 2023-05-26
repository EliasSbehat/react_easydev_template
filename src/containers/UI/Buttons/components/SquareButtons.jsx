import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Col,
} from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { Button, ButtonToolbar } from '@/shared/components/Button';

const SquareButtons = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.buttons.square_buttons')}</CardTitle>
            <CardSubhead>
              Use default button with a prop <span className="red-text">squared</span>
            </CardSubhead>
          </CardTitleWrap>
          <ButtonToolbar>
            <Button squared variant="outline-secondary">Minimal</Button>
            <Button squared variant="secondary">Secondary</Button>
            <Button disabled squared>Disabled</Button>
            <Button variant="primary" squared>Primary</Button>
            <Button variant="success" squared>Success</Button>
            <Button variant="warning" squared>Warning</Button>
            <Button variant="danger" squared>Danger</Button>
            <Button variant="outline-primary" squared>Primary</Button>
            <Button variant="outline-success" squared>Success</Button>
            <Button variant="outline-warning" squared>Warning</Button>
            <Button variant="outline-danger" squared>Danger</Button>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SquareButtons;
