import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import Collapse from '@/shared/components/Collapse';
import data from './data';

const BoxedCollapse = () => {
  const { t } = useTranslation('common');

  return (
    <Col xs={12} md={12} lg={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.collapse.boxed_collapse')}</CardTitle>
            <CardSubhead>
              Use default collapse with a class <span className="red-text">boxed</span>
            </CardSubhead>
          </CardTitleWrap>
          {data.map(({ id, title, text }) => (
            <Collapse key={id} title={title} className="boxed">
              <p>{text}</p>
            </Collapse>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BoxedCollapse;
