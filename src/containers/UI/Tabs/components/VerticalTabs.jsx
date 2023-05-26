import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { VerticalTabs } from '@/shared/components/Tabs';
import Tabs from './Tabs';

const VerticTabs = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xs={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.tabs.vertical_tabs')}</CardTitle>
          </CardTitleWrap>
          <VerticalTabs>
            <Tabs />
          </VerticalTabs>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VerticTabs;
