import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';

const Highlight = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.typography.highlight')}</CardTitle>
            <CardSubhead>Use span with class <span className="red-text">highlight</span></CardSubhead>
          </CardTitleWrap>
          <p className="typography-message">
            Nulla tellus elit, varius non <span className="highlight">commodo</span> eget, mattis vel eros.
            In sed ornare nulla. Nullam quis risuseget urna mollis ornare vel eu leo. Cum sociis natoque
            penatibus et magnis dis parturient montes,nascetur ridiculus mus.
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Highlight;
