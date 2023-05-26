import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { BorderedBottomTabs, JustifyTabs } from '@/shared/components/Tabs';
import Tabs from './Tabs';

const JustifyTabsBorderedBottom = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.tabs.justify_tabs_bordered_bottom')}</CardTitle>
          </CardTitleWrap>
          <BorderedBottomTabs as={JustifyTabs}>
            <Tabs />
          </BorderedBottomTabs>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JustifyTabsBorderedBottom;
