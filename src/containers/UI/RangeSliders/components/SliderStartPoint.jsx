import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import Slider from '@/shared/components/range_slider/Slider';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';

const SliderStartPoint = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xs={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.range_sliders.slider_start_point')}</CardTitle>
            <CardSubhead>
              Use default slider with value of property&nbsp;
              <span className="red-text">value</span>
            </CardSubhead>
          </CardTitleWrap>
          <div dir="ltr">
            <Slider min={0} max={129} value={34} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SliderStartPoint;
