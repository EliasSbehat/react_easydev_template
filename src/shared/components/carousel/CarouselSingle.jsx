import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { SingleSlider } from '@/shared/components/carousel/CarouselElements';

const CarouselSingle = ({ children }) => {
  const rtl = useSelector(state => state.rtl);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: rtl.direction === 'rtl',
  };

  return (
    <SingleSlider {...settings}>
      {children}
    </SingleSlider>
  );
};

CarouselSingle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CarouselSingle;
