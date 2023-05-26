import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { Button, ButtonToolbar } from '@/shared/components/Button';

const DefaultButtons = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.buttons.default_buttons')}</CardTitle>
            <CardSubhead>Use default button with necessary values of properties
              <span className="red-text"> variant</span>,
              <span className="red-text"> disabled</span>
            </CardSubhead>
          </CardTitleWrap>
          <CardTitleWrap>
            <CardSubhead>Modifier variant <span className="red-text">primary</span>,
              <span className="red-text"> success</span>,
              <span className="red-text"> warning</span>,
              <span className="red-text"> danger</span>,
              <span className="red-text"> outline-primary</span>,
              <span className="red-text"> outline-success</span>,
              <span className="red-text"> outline-warning</span>,
              <span className="red-text"> outline-danger</span>,
            </CardSubhead>
            <CardSubhead>Modifier disabled <span className="red-text">true</span>,
              <span className="red-text"> false</span>
            </CardSubhead>
          </CardTitleWrap>
          <ButtonToolbar>
            <Button variant="outline-secondary">Minimal</Button>
            <Button variant="secondary">Secondary</Button>
            <Button disabled>Disabled</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="success">Success</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="outline-primary">Primary</Button>
            <Button variant="outline-success">Success</Button>
            <Button variant="outline-warning">Warning</Button>
            <Button variant="outline-danger">Danger</Button>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultButtons;
