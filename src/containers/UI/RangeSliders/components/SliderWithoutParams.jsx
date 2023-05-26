import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import Slider from '@/shared/components/range_slider/Slider';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';

const SliderWithoutParams = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xs={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.range_sliders.slider_without_params')}</CardTitle>
            <CardSubhead>Use default slider</CardSubhead>
          </CardTitleWrap>
          <div dir="ltr">
            <Slider min={0} max={100} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SliderWithoutParams;
