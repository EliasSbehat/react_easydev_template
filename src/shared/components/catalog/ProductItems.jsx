import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, CardBody } from '@/shared/components/Card';
import { colorAccent, colorAdditional, colorBackground } from '@/utils/palette';
import { right, left, marginRight } from '@/utils/directions';

const Sale = `${process.env.PUBLIC_URL}/img/for_store/catalog/sale_lable.png`;
const New = `${process.env.PUBLIC_URL}/img/for_store/catalog/new_lable.png`;

const ProductItems = ({ items }) => (
  <ProductItemsWrap>
    <ProductItemsList>
      {items.map(item => (
        <ProductCard key={item.id}>
          <ProductItem>
            <ProductItemLink to="/e-commerce/product_page">
              {item.new ? <ProductItemLabel src={New} alt="new" /> : ''}
              {item.sale ? <ProductItemLabel src={Sale} alt="sale" /> : ''}
              <ProductItemImageWrap>
                <ProductItemImage src={item.src} alt="catalog-item-img" />
              </ProductItemImageWrap>
              <ProductItemInfo>
                <ProductItemTitle>{item.title}</ProductItemTitle>
                <ProductItemDescription>{item.description}</ProductItemDescription>
                <ProductItemPrice>${item.price}</ProductItemPrice>
                {item.sale ? <ProductItemOldPrice>${item.oldPrice}</ProductItemOldPrice> : ''}
                {item.colors.map(color => (
                  <ProductItemColor
                    key={color}
                    style={{ background: color }}
                  />
                ))}
              </ProductItemInfo>
            </ProductItemLink>
          </ProductItem>
        </ProductCard>
      ))}
    </ProductItemsList>
  </ProductItemsWrap>
);

ProductItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.string),
    new: PropTypes.bool,
  })),
};

ProductItems.defaultProps = {
  items: [],
};

export default ProductItems;

// region STYLES

const ProductItemsWrap = styled.div`
  overflow: hidden;
  width: 100%;
`;

const ProductItemsList = styled.div`
  width: calc(100% + 20px);
  display: flex;
  flex-wrap: wrap;
  margin-right: -20px;
`;

const ProductCard = styled(Card)`
  padding: 0;
  width: 25%;

  @media screen and (max-width: 1500px) {
    width: 33.3333%;
  }

  @media screen and (max-width: 1200px) {
    width: 50%;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    height: auto;
  }
`;

const ProductItem = styled(CardBody)`
  margin-bottom: 30px;
  height: 440px;
  ${marginRight}: 30px;
  position: relative;
  background-color: ${colorBackground};
`;

const ProductItemImageWrap = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  overflow: hidden;
`;

const ProductItemImage = styled.img`
  height: 100%;
  width: auto;
`;

const ProductItemInfo = styled.div`
  text-align: ${left};
  position: relative;
  width: calc(100% - 90px);
`;

const ProductItemTitle = styled.h4`
  font-weight: 500;
  transition: all 0.3s;
`;

const ProductItemLink = styled(Link)`
  padding: 40px 30px;
  display: block;

  &:hover {
    text-decoration: none;

    ${ProductItemTitle} {
      color: ${colorAccent};
    }
  }
`;

const ProductItemDescription = styled.p`
  margin: 0;
  color: ${colorAdditional};
  line-height: 17px;
`;

const ProductItemPrice = styled.h1`
  position: absolute;
  top: 0;
  ${right}: -90px;
  line-height: 36px;
`;

const ProductItemOldPrice = styled.p`
  position: absolute;
  ${right}: -90px;
  top: 36px;
  line-height: 28px;
  color: ${colorAdditional};
  margin: 0;
  text-decoration: line-through;
`;

const ProductItemColor = styled.span`
  height: 10px;
  width: 10px;
  ${marginRight}: 8px;
  display: inline-block;
  border-radius: 50%;
  margin-top: 10px;
`;

const ProductItemLabel = styled.img`
  position: absolute;
  top: -2px;
  ${right}: 20px;
  width: 50px;
`;

// endregion
