import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import Carousel from '@/shared/components/carousel/CarouselSingle';
import {
  SliderCaption,
  SliderCaptionDescription,
  SliderCaptionTitle,
} from '@/shared/components/carousel/CarouselElements';

const data = [
  { id: 0, src: `${process.env.PUBLIC_URL}/img/5.png` },
  { id: 1, src: `${process.env.PUBLIC_URL}/img/6.png` },
  { id: 2, src: `${process.env.PUBLIC_URL}/img/5.png` },
  { id: 3, src: `${process.env.PUBLIC_URL}/img/6.png` },
];

const BasicCarouselWithCaption = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.carousel.basic_carousel_with_caption')}</CardTitle>
            <CardSubhead>
              Use the component <span className="red-text">CarouselSingle</span> with text
            </CardSubhead>
          </CardTitleWrap>
          <Carousel>
            {data.map(item => (
              <div key={item.id}>
                <img src={item.src} alt={`slide_${item.src}`} />
                <SliderCaption>
                  <SliderCaptionTitle>Sayan mountains, Siberia</SliderCaptionTitle>
                  <SliderCaptionDescription>Folly words widow one downs few age every seven.</SliderCaptionDescription>
                </SliderCaption>
              </div>
            ))}
          </Carousel>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicCarouselWithCaption;
