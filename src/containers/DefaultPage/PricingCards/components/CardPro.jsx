import React from 'react';
import { Col } from 'react-bootstrap';
import { Card } from '@/shared/components/Card';
import {
  PricingCard,
  PricingCardBody,
  PricingCardButton,
  PricingCardFeature,
  PricingCardImage,
  PricingCardPlan,
  PricingCardPrice,
} from './BasicElements';

const airplane = `${process.env.PUBLIC_URL}/img/pricing_cards/003-airplane.svg`;

const CardPro = () => (
  <Col md={6} xl={3} sm={12}>
    <Card>
      <PricingCard color="warning">
        <PricingCardBody>
          <PricingCardImage src={airplane} alt="" />
          <PricingCardPlan>Pro</PricingCardPlan>
          <hr />
          <PricingCardPrice>$10<span>/mo</span></PricingCardPrice>
          <PricingCardFeature>6 Users</PricingCardFeature>
          <PricingCardFeature>1 Tb storage</PricingCardFeature>
          <PricingCardFeature>Monthly update</PricingCardFeature>
          <PricingCardFeature inactive>Free support</PricingCardFeature>
          <PricingCardButton variant="primary">Sign Up</PricingCardButton>
        </PricingCardBody>
      </PricingCard>
    </Card>
  </Col>
);

export default CardPro;
