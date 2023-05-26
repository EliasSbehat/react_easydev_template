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

const rocket = `${process.env.PUBLIC_URL}/img/pricing_cards/001-rocket.svg`;

const CardPremium = () => (
  <Col md={6} xl={3} sm={12}>
    <Card>
      <PricingCard color="danger">
        <PricingCardBody>
          <PricingCardImage src={rocket} alt="" />
          <PricingCardPlan>Premium</PricingCardPlan>
          <hr />
          <PricingCardPrice>$15<span>/mo</span></PricingCardPrice>
          <PricingCardFeature>Unlimited Users</PricingCardFeature>
          <PricingCardFeature>100 Tb storage</PricingCardFeature>
          <PricingCardFeature>Monthly update</PricingCardFeature>
          <PricingCardFeature>Free support</PricingCardFeature>
          <PricingCardButton variant="primary">Sign Up</PricingCardButton>
        </PricingCardBody>
      </PricingCard>
    </Card>
  </Col>
);

export default CardPremium;
