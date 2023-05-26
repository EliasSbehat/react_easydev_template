import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { Button, ButtonToolbar } from '@/shared/components/Button';

const StatusButtons = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.buttons.status_buttons')}</CardTitle>
            <CardSubhead>
              Use default buttons with a property <span className="red-text">size</span>
            </CardSubhead>
          </CardTitleWrap>
          <h5><b>Small buttons</b></h5>
          <CardTitleWrap>
            <CardSubhead>Use the modifier <span className="red-text">sm</span></CardSubhead>
          </CardTitleWrap>
          <ButtonToolbar>
            <Button size="sm" variant="outline-secondary">Minimal</Button>
            <Button size="sm" variant="secondary">Secondary</Button>
            <Button size="sm" disabled>Disabled</Button>
            <Button size="sm" variant="primary">Primary</Button>
            <Button size="sm" variant="success">Success</Button>
            <Button size="sm" variant="warning">Warning</Button>
            <Button size="sm" variant="danger">Danger</Button>
            <Button size="sm" variant="outline-primary">Primary</Button>
            <Button size="sm" variant="outline-success">Success</Button>
            <Button size="sm" variant="outline-warning">Warning</Button>
            <Button size="sm" variant="outline-danger">Danger</Button>
          </ButtonToolbar>
          <h5><b>Large buttons</b></h5>
          <CardTitleWrap>
            <CardSubhead>Use the modifier <span className="red-text">lg</span></CardSubhead>
          </CardTitleWrap>
          <ButtonToolbar>
            <Button size="lg" variant="outline-secondary">Minimal</Button>
            <Button size="lg" variant="secondary">Secondary</Button>
            <Button size="lg" disabled>Disabled</Button>
            <Button size="lg" variant="primary">Primary</Button>
            <Button size="lg" variant="success">Success</Button>
            <Button size="lg" variant="warning">Warning</Button>
            <Button size="lg" variant="danger">Danger</Button>
            <Button size="lg" variant="outline-primary">Primary</Button>
            <Button size="lg" variant="outline-success">Success</Button>
            <Button size="lg" variant="outline-warning">Warning</Button>
            <Button size="lg" variant="outline-danger">Danger</Button>
          </ButtonToolbar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StatusButtons;
