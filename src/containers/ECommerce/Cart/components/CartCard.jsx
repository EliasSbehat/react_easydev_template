import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { colorAdditional, colorRedHover } from '@/utils/palette';
import { left, paddingLeft, paddingRight } from '@/utils/directions';
import { Table } from '@/shared/components/TableElements';
import CartPurchase from './CartPurchase';

import cartList from './cart_list';

const CartCard = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <CardTitleWrap>
          <CardTitle>Cart</CardTitle>
        </CardTitleWrap>
        <CartTable bordered responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Tax</th>
              <th>Total</th>
              <th aria-label="cart table" />
            </tr>
          </thead>
          <tbody>
            {cartList.map((ct, i) => (
              <tr key={`index_${ct.title}`}>
                <td>{i + 1}</td>
                <td>
                  <CartPreviewImageWrap>
                    <img src={ct.img} alt="product_preview" />
                  </CartPreviewImageWrap>
                  <span>{ct.title}</span>
                </td>
                <td>{ct.quantity}</td>
                <td>${ct.price.toFixed(2)}</td>
                <td>${ct.tax.toFixed(2)}</td>
                <td>${ct.total.toFixed(2)}</td>
                <td>
                  <CartTableButton type="button">
                    <DeleteForeverIcon /> Remove
                  </CartTableButton>
                </td>
              </tr>
            ))}
          </tbody>
        </CartTable>
        <CartSubTotal>Sub-total: $328.00</CartSubTotal>
        <CartPurchase onSubmit />
      </CardBody>
    </Card>
  </Col>
);

export default CartCard;

// region STYLES

const CartPreviewImageWrap = styled.span`
  width: 50px;
  height: 45px;
  border: 1px solid #f0f0f0;
  display: inline-block;
  overflow: hidden;
  text-align: center;
  padding: 5px;
  position: absolute;
  top: 8px;

  & + span {
    ${paddingLeft}: 60px;
    display: block;
    min-width: 400px;
  }

  img {
    height: 100%;
    width: auto;
    max-width: 100%;
  }
`;

const CartTableButton = styled.button`
  background: transparent;
  border: none;
  line-height: 14px;
  ${paddingLeft}: 20px;
  ${paddingRight}: 0;
  padding-top: 0;
  padding-bottom: 0;
  position: relative;
  color: ${colorAdditional};
  cursor: pointer;
  transition: all 0.3s;

  svg {
    height: 16px;
    width: 16px;
    position: absolute;
    top: -2px;
    ${left}: 0;
    fill: ${colorAdditional};
    transition: all 0.3s;
  }

  &:hover {
    color: ${colorRedHover};

    svg {
      fill: ${colorRedHover};
    }
  }
`;

const CartTable = styled(Table)`
  
  tbody td {
    padding: 20px 10px;
    position: relative;
  }
`;

const CartSubTotal = styled.h5`
  text-align: ${left};
  margin-top: 20px;
  font-weight: 700;
`;

// endregion
