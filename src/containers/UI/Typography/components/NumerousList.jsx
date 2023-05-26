import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';

const NumerousList = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.typography.numerous_list')}</CardTitle>
            <CardSubhead>Use default <span className="red-text">ol</span></CardSubhead>
          </CardTitleWrap>
          <ol className="list">
            <li><p>Nulla tellus elit, varius non commodo eget</p></li>
            <li><p>Cum sociis natoque penatibus</p></li>
            <li><p>Curabitur bibendum ornare dolor</p></li>
          </ol>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NumerousList;
