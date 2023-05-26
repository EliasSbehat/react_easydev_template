import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import ProgressBar from '@/shared/components/ProgressBar';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';

const AnimatedProgressBar = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.progress_bars.animated_progress_bar')}</CardTitle>
            <CardSubhead>Use default progress with property <span className="red-text">animated</span></CardSubhead>
          </CardTitleWrap>
          <ProgressBar animated now={70} size="middle" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedProgressBar;
