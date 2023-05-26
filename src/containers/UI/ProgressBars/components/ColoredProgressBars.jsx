import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import ProgressBar from '@/shared/components/ProgressBar';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';

const ColoredProgressBars = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.progress_bars.colored_progress_bars')}</CardTitle>
            <CardSubhead>
              Use default progress with
              <span className="red-text"> color</span> prop with one of the values:
              <span className="red-text"> yellow</span>,
              <span className="red-text"> violet</span>,
              <span className="red-text"> pink</span>,
              <span className="red-text"> blue</span>
            </CardSubhead>
          </CardTitleWrap>
          <ProgressBar now={20} />
          <ProgressBar now={30} color="yellow" />
          <ProgressBar now={40} color="violet" />
          <ProgressBar now={50} color="pink" />
          <ProgressBar now={60} color="blue" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColoredProgressBars;
