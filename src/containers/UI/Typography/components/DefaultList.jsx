import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';

const DefaultList = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.typography.default_list')}</CardTitle>
            <CardSubhead>Use default <span className="red-text">ul</span></CardSubhead>
          </CardTitleWrap>
          <ul className="list">
            <li><p>Nulla tellus elit, varius non commodo eget</p></li>
            <li><p>Cum sociis natoque penatibus</p></li>
            <li><p>Curabitur bibendum ornare dolor</p></li>
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultList;
