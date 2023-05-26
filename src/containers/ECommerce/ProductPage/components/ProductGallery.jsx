import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import Carousel from '@brainhubeu/react-carousel';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import '@brainhubeu/react-carousel/lib/style.css';
import { colorBorder } from '@/utils/palette';
import { marginRight } from '@/utils/directions';

const ProductGallery = ({ images }) => {
  const [isOpenLightbox, setIsOpenLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [currentImagePreview, setCurrentImagePreview] = useState(0);
  const [carouselImages, setCarouselImages] = useState([]);

  const changeImg = (item) => {
    setCurrentImagePreview(item);
    setCurrentImage(item);
  };

  const carouselImage = () => {
    setCarouselImages(images);
  };

  const openLightbox = (index) => {
    carouselImage();
    setCurrentImage(index);
    setIsOpenLightbox(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setIsOpenLightbox(false);
  };

  const onChange = (value) => {
    setCurrentImage(value);
  };

  return (
    <ProductGalleryWrap>
      <ProductGalleryImageButton
        type="button"
        onClick={() => openLightbox(currentImage)}
      >
        <img src={images[currentImagePreview].src} alt="product-img" />
      </ProductGalleryImageButton>
      <ProductGalleryImages>
        {images.map((item, index) => (
          <ProductGalleryPreviewButton
            type="button"
            key={`index_${item.src}`}
            onClick={() => changeImg(index)}
          >
            <img src={item.src} alt="product-img" />
          </ProductGalleryPreviewButton>
        ))}
      </ProductGalleryImages>
      <Modal
        show={isOpenLightbox}
        onHide={closeLightbox}
        dialogClassName="modal-dialog--primary"
      >
        <div className="modal__body">
          <div className="modal__header">
            <button
              className="lnr lnr-cross modal__close-btn"
              type="button"
              aria-label="close lightbox button"
              onClick={closeLightbox}
            />
          </div>
          <Carousel
            value={currentImage}
            onChange={onChange}
            slides={
              carouselImages.map(item => (
                <img key={`index_${item.src}`} src={item.src} alt="" />
              ))
            }
            addArrowClickHandler
            arrowLeft={(
              <div className="modal__btn">
                <ChevronLeftIcon className="modal__btn_left" />
              </div>
            )}
            arrowRight={(
              <div className="modal__btn">
                <ChevronRightIcon className="modal__btn_right" />
              </div>
            )}
          />
          <div className="modal__footer">
            <p>{currentImage + 1} of {carouselImages.length}</p>
          </div>
        </div>
      </Modal>
    </ProductGalleryWrap>
  );
};

ProductGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
  })).isRequired,
};

export default ProductGallery;

// region STYLES

const ProductGalleryWrap = styled.div`
  max-width: 440px;
  width: 100%;

  @media screen and (max-width: 1199px) {
    margin: auto;
  }
`;

const ProductGalleryImageButton = styled.button`
  width: 440px;
  height: 440px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  overflow: hidden;
  margin-bottom: 10px;
  border: 1px solid ${colorBorder};
  padding: 0;

  @media screen and (max-width: 568px) {
    max-width: 350px;
    height: 250px;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const ProductGalleryImages = styled.div`
  display: flex;
`;

const ProductGalleryPreviewButton = styled.button`
  width: 80px;
  height: 80px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  cursor: pointer;
  ${marginRight}: 10px;
  padding: 0;
  background: transparent;
  border: 1px solid ${colorBorder};

  &:last-child {
    ${marginRight}: 0;
  }

  img {
    height: 80px;
  }

  @media screen and (max-width: 568px) {
    ${marginRight}: 5px;
    width: 50px;
    height: 50px;

    img {
      height: 60px;
    }
  }
`;

// endregion
