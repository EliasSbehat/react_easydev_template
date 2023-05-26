import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import Slider from '@/shared/components/range_slider/Slider';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';

const DoubleSliderType = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xs={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.range_sliders.double_slider_type')}</CardTitle>
            <CardSubhead>Use default range</CardSubhead>
          </CardTitleWrap>
          <div dir="ltr">
            <Slider range min={0} max={1000} value={[350, 635]} tipFormatter={value => `$${value}`} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DoubleSliderType;
