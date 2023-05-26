import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { BorderedBottomTabs } from '@/shared/components/Tabs';
import Tabs from './Tabs';

const DefaultTabsBorderedBottom = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.tabs.tabs_bordered_bottom')}</CardTitle>
          </CardTitleWrap>
          <BorderedBottomTabs>
            <Tabs />
          </BorderedBottomTabs>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultTabsBorderedBottom;
