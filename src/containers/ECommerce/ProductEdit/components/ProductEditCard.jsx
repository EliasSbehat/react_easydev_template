import React from 'react';
import { Col } from 'react-bootstrap';
import showResults from '@/utils/showResults';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import ProductEditForm from './ProductEditForm';

const PaymentCard = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <CardTitleWrap>
          <CardTitle>Main Information</CardTitle>
        </CardTitleWrap>
        <ProductEditForm onSubmit={showResults} />
      </CardBody>
    </Card>
  </Col>
);

export default PaymentCard;
