import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import styled from 'styled-components';
import Carousel from '@brainhubeu/react-carousel';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import '@brainhubeu/react-carousel/lib/style.css';
import { colorAccent, colorAdditional, colorAdditionalHover } from '@/utils/palette';
import { marginRight, left } from '@/utils/directions';

const Gallery = ({ images, tags }) => {
  const [image, setImage] = useState(images);
  const [currentTag, setCurrentTag] = useState('all');
  const [tag] = useState(tags);
  const [isOpenLightbox, setIsOpenLightbox] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [carouselImages, setCarouselImages] = useState([]);

  const onFilter = (item) => {
    if (item === 'all') {
      setImage(images);
      setCurrentTag('all');
    } else {
      setImage(images.filter(t => t.type === item));
      setCurrentTag(item);
    }
  };

  const onChange = (value) => {
    setCurrentImage(value);
  };

  const carouselImage = () => {
    setCarouselImages(image.map(item => item.src));
  };

  const openLightbox = (index) => {
    setIsOpenLightbox(true);
    setCurrentImage(index);
    carouselImage();
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setIsOpenLightbox(false);
  };

  return (
    <GalleryWrap>
      <GalleryButtons>
        <GalleryButton
          type="button"
          active={currentTag === 'all'}
          onClick={() => onFilter('all')}
        >
          all
        </GalleryButton>
        {tag.map(btn => (
          <GalleryButton
            key={`index_${btn.tag}`}
            type="button"
            active={btn.tag === currentTag}
            onClick={() => onFilter(btn.tag)}
          >
            {btn.title}
          </GalleryButton>
        ))}
      </GalleryButtons>
      {image.map((img, index) => (
        <GalleryImageButton
          key={`index_${img.src}`}
          type="button"
          onClick={() => openLightbox(index)}
        >
          <img src={img.src} alt={img.alt} />
        </GalleryImageButton>
      ))}
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
                <div key={`index_${item}`}>
                  <img src={item} alt="" />
                </div>
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
    </GalleryWrap>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    type: PropTypes.string,
    alt: PropTypes.string,
  })).isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    tag: PropTypes.string,
    title: PropTypes.string,
  })).isRequired,
};

export default Gallery;

// region

const GalleryWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  img {
    width: 100%;
  }
`;

const GalleryButtons = styled.div`
  width: 100%;
  margin-bottom: 20px;
  text-align: ${left};
`;

const GalleryButton = styled.button`
  background: transparent;
  padding: 0;
  text-transform: uppercase;
  color: ${props => (props.active ? colorAccent : colorAdditional)};
  font-size: 12px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  ${marginRight}: 20px;

  &:focus, &:active {
    outline: none;
  }

  &:hover {
    color: ${colorAdditionalHover};
  }
`;

const GalleryImageButton = styled.button`
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  border: none;
  padding: 0;

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 992px) {
    width: 25%;
  }
`;

// endregion
