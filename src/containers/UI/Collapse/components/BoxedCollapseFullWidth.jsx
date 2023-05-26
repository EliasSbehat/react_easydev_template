import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import Collapse from '@/shared/components/Collapse';
import data from './data';

const BoxedCollapseFullWidth = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.collapse.boxed_collapse_full_width')}</CardTitle>
            <CardSubhead>
              Use default collapse with class <span className="red-text">with-shadow</span>
            </CardSubhead>
          </CardTitleWrap>
          {data.map(({ id, title, text }) => (
            <Collapse key={id} title={title} className="with-shadow">
              <p>{text}</p>
            </Collapse>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BoxedCollapseFullWidth;
