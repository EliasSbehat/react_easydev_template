import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import showResults from '@/utils/showResults';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import PaymentForm from './PaymentForm';

const PaymentCard = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <CardTitleWrap>
          <CardTitle>Payment</CardTitle>
        </CardTitleWrap>
        <PaymentWrap>
          <PaymentForm onSubmit={showResults} />
        </PaymentWrap>
      </CardBody>
    </Card>
  </Col>
);

export default PaymentCard;

// region STYLES

const PaymentWrap = styled.div`
  max-width: 740px;
`;

// endregion
