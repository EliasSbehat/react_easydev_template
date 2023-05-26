import React from 'react';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import CodeHighlither from '@/shared/components/CodeHighlither';

const Carousel = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Carousel</CardTitle>
      </CardTitleWrap>
      <p>Carousels is based on <a href="https://github.com/akiran/react-slick">react-slick</a>. The template has two
        ready types of them:
      </p>
      <CodeHighlither>
        {`import React from 'react';
import Carousel from 'template/src/components/carousel/CarouselSingle'; // or CarouselMultiply
import Slide1 from 'imgs/img/booking_light.png';
import Slide2 from 'imgs/img/app_light.png';

const Example = () => (
  <Carousel>
    <div><img src={Slide1} alt='slide'/></div>
    <div><img src={Slide2} alt='slide'/></div>
    <div><img src={Slide1} alt='slide'/></div>
    <div><img src={Slide2} alt='slide'/></div>
  </Carousel>
);

export default Example;`}
      </CodeHighlither>
    </CardBody>
  </Card>
);

export default Carousel;
