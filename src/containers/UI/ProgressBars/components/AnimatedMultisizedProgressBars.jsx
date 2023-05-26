import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import ProgressBar from '@/shared/components/ProgressBar';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';

const AnimatedMultisizedProgressBars = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.progress_bars.animated_multisized_progress_bars')}</CardTitle>
            <CardSubhead>
              Use default progress with <span className="red-text">animated</span> property
            </CardSubhead>
          </CardTitleWrap>
          <ProgressBar animated now={20} />
          <ProgressBar animated now={40} size="small" />
          <ProgressBar animated now={60} size="middle" />
          <ProgressBar animated now={80} size="big" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedMultisizedProgressBars;
