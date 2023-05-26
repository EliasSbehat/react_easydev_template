import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import ProgressBar from '@/shared/components/ProgressBar';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';

const DefaultProgressBar = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.progress_bars.default_progress_bar')}</CardTitle>
            <CardSubhead>Use default progress</CardSubhead>
          </CardTitleWrap>
          <ProgressBar now={80} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultProgressBar;
