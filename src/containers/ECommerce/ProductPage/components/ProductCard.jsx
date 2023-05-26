import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import HeartIcon from 'mdi-react/HeartIcon';
import StarIcon from 'mdi-react/StarIcon';
import StarOutlineIcon from 'mdi-react/StarOutlineIcon';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/components/Button';
import {
  Card, CardBody,
} from '@/shared/components/Card';
import {
  colorAdditional,
  colorBlue,
  colorBlueHover,
  colorYellow,
} from '@/utils/palette';
import {
  left,
  paddingLeft,
  marginLeft,
} from '@/utils/directions';
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import ProductGallery from './ProductGallery';
import images from './imgs';
import ProductTabs from './ProductTabs';
import ColorSelect from './ColorSelect';

const ProductCard = () => {
  const [color, setColor] = useState('white');

  const onLike = () => {
    if (color === 'white') {
      setColor('#70bbfd');
    } else {
      setColor('white');
    }
  };

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <ProductCardContent>
            <ProductGallery images={images} />
            <ProductCardInfo>
              <ProductCardTitle>French bulldog pillow</ProductCardTitle>
              <ProductCardRate>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarOutlineIcon />
                <ProductCardLink href="/easydev/e-commerce/product_page">
                  See all reviews
                </ProductCardLink>
              </ProductCardRate>
              <ProductCardPrice>
                $17.19 <ProductCardOldPrice>$23</ProductCardOldPrice>
              </ProductCardPrice>
              <p className="typography-message">
                Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way unaffected expression
                for. His mistress ladyship required off horrible disposed rejoiced. Unpleasing pianoforte unreserved
                as oh he unpleasant no inquietude insipidity. Advantages can discretion possession add favourable
                cultivated admiration far.
              </p>
              <ProductCardForm>
                <FormGroup>
                  <ProductCardLabel>Select Color</ProductCardLabel>
                  <FormGroupField>
                    <ColorSelect
                      options={[
                        { value: 'Pink Sugar', label: 'Pink Sugar', color: '#f7a9c4' },
                        { value: 'Pink Sugar', label: 'Pink Sugar', color: '#f7a9c4' },
                        { value: 'Pink Sugar', label: 'Pink Sugar', color: '#f7a9c4' },
                      ]}
                    />
                  </FormGroupField>
                </FormGroup>
                <FormButtonToolbar>
                  <Button as={Link} variant="primary" to="/e-commerce/cart">Add to cart</Button>
                  <ProductCArdWishButton
                    type="button"
                    onClick={onLike}
                  >
                    <HeartIcon color={color} />Add to wishlist
                  </ProductCArdWishButton>
                </FormButtonToolbar>
              </ProductCardForm>
              <ProductTabs />
            </ProductCardInfo>
          </ProductCardContent>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProductCard;

// region STYLES

const ProductCardForm = styled(FormContainer)`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ProductCardLabel = styled(FormGroupLabel)`
  font-weight: 500;
`;

const ProductCardContent = styled.div`
  display: flex;
  flex-wrap: wrap;

  .product-card__btn-toolbar {
    margin-bottom: 10px;
  }
`;

const ProductCardInfo = styled.div`
  width: calc(100% - 440px);
  ${paddingLeft}: 42px;

  @media screen and (max-width: 1199px) {
    width: 100%;
    ${paddingLeft}: 0;
    padding-top: 35px;
  }
`;

const ProductCardTitle = styled.h3`
  text-align: ${left};
  font-weight: 700;
  margin-bottom: 10px;
`;

const ProductCardRate = styled.div`
  display: flex;
  margin-bottom: 30px;

  svg {
    fill: ${colorYellow};
    height: 14px;
    width: 14px;
  }
`;

const ProductCardLink = styled.a`
  font-size: 12px;
  color: ${colorBlue};
  line-height: 16px;
  display: block;
  ${marginLeft}: 5px;

  &:hover {
    color: ${colorBlueHover};
    text-decoration: none;
  }
`;

const ProductCardPrice = styled.h1`
  margin-bottom: 25px;
  text-align: ${left};
`;

const ProductCardOldPrice = styled.span`
  font-size: 24px;
  color: ${colorAdditional};
  text-decoration: line-through;
`;

const ProductCArdWishButton = styled.button`
  display: block;
  padding: 10px 0;
  font-size: 14px;
  color: ${colorBlue};
  height: 42px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  svg {
    height: 14px;
    transition: all 0.3s;
    stroke: ${colorBlue};
  }

  &:hover {
    color: ${colorBlueHover};

    svg {
      fill: ${colorBlueHover};
    }
  }
`;

//
