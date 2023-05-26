import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const SampleTextDescription = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.typography.sample_text_with_description')}</CardTitle>
          </CardTitleWrap>
          <h4><b>This is a sample heading for text part.</b></h4>
          <h4 className="subhead typography-message">
            Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
            penatibus.
          </h4>
          <p className="typography-message">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare dolor, quis
            ullamcorper ligula sodales at. Nulla tellus elit, varius non commodo eget, mattis vel eros. In
            sed ornare nulla. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula
            ut id elit.
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SampleTextDescription;
