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

const balloon = `${process.env.PUBLIC_URL}/img/pricing_cards/002-hot-air-balloon.svg`;

const CardSpecial = () => (
  <Col md={6} xl={3} sm={12}>
    <Card>
      <PricingCard color="info">
        <PricingCardBody>
          <PricingCardImage src={balloon} alt="" />
          <PricingCardPlan>Special</PricingCardPlan>
          <hr />
          <PricingCardPrice>$5<span>/mo</span></PricingCardPrice>
          <PricingCardFeature>4 Users</PricingCardFeature>
          <PricingCardFeature>1 Tb storage</PricingCardFeature>
          <PricingCardFeature>Monthly update</PricingCardFeature>
          <PricingCardFeature inactive>Free support</PricingCardFeature>
          <PricingCardButton variant="primary">Sign Up</PricingCardButton>
        </PricingCardBody>
      </PricingCard>
    </Card>
  </Col>
);

export default CardSpecial;
