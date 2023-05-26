import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import Slider from '@/shared/components/range_slider/Slider';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';

const SliderWithScale = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xs={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.range_sliders.slider_with_scale')}</CardTitle>
            <CardSubhead>Use default slider with property <span className="red-text">marks</span></CardSubhead>
          </CardTitleWrap>
          <div dir="ltr">
            <Slider
              min={0}
              max={100}
              value={34}
              marks={{
                0: '0',
                10: '10',
                20: '20',
                30: '30',
                40: '40',
                50: '50',
                60: '60',
                70: '70',
                80: '80',
                90: '90',
                100: '100',
              }}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SliderWithScale;
