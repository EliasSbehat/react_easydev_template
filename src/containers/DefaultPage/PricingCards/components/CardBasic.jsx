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

const paperPlane = `${process.env.PUBLIC_URL}/img/pricing_cards/004-paper-plane.svg`;

const CardBasic = () => (
  <Col md={6} xl={3} sm={12}>
    <Card>
      <PricingCard color="primary">
        <PricingCardBody>
          <PricingCardImage src={paperPlane} alt="" />
          <PricingCardPlan>Basic</PricingCardPlan>
          <hr />
          <PricingCardPrice>$0<span>/mo</span></PricingCardPrice>
          <PricingCardFeature>2 Users</PricingCardFeature>
          <PricingCardFeature>500 Gb storage</PricingCardFeature>
          <PricingCardFeature inactive>Monthly update</PricingCardFeature>
          <PricingCardFeature inactive>Free support</PricingCardFeature>
          <PricingCardButton variant="primary">Sign Up</PricingCardButton>
        </PricingCardBody>
      </PricingCard>
    </Card>
  </Col>
);

export default CardBasic;
