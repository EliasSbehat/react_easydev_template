import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { StyledSlider } from '@/shared/components/carousel/CarouselElements';

const CarouselMultiply = ({ children }) => {
  const rtl = useSelector(state => state.rtl);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    swipeToSlide: true,
    slidesToScroll: 1,
    rtl: rtl.direction === 'rtl',
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 100000, settings: { slidesToShow: 4 } },
    ],
  };
  
  return (
    <StyledSlider multiple {...settings}>
      {children}
    </StyledSlider>
  );
};

CarouselMultiply.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CarouselMultiply;
