import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import ProgressBar from '@/shared/components/ProgressBar';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';

const MultisizedProgressBars = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.progress_bars.multisized_progress_bars')}</CardTitle>
            <CardSubhead>
              Use default progress with <span className="red-text">size</span> with one of values:
              <span className="red-text"> small</span>,
              <span className="red-text"> middle</span>,
              <span className="red-text"> big</span>
            </CardSubhead>
          </CardTitleWrap>
          <ProgressBar now={20} />
          <ProgressBar now={40} size="small" />
          <ProgressBar now={60} size="middle" />
          <ProgressBar now={80} size="big" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultisizedProgressBars;
