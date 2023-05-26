import styled from 'styled-components';
import { CardBody } from '@/shared/components/Card';
import { Button } from '@/shared/components/Button';
import {
  colorAccent,
  colorBlue,
  colorFieldsBorder,
  colorRed,
  colorYellow,
} from '@/utils/palette';

const getColor = (color) => {
  switch (color) {
    case 'primary':
      return colorBlue;
    case 'info':
      return colorAccent;
    case 'warning':
      return colorYellow;
    case 'danger':
      return colorRed;
      
    default: 
      return colorAccent;
  }
};

export const PricingCard = styled(CardBody)`
  text-align: center;
  border-top: 5px solid ${props => getColor(props.color)};

  hr {
    margin: 0;
    border-top-color: ${colorFieldsBorder};
  }
`;

export const PricingCardBody = styled.div`
  padding: 45px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PricingCardImage = styled.img`
  height: 70px;
  margin-bottom: 20px;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 20px;
  font-weight: 300;
`;

export const PricingCardPrice = styled.p`
  margin-top: 20px;
  font-weight: 300;
  font-size: 48px;
  line-height: 48px;

  span {
    font-size: 18px;
  }
`;

export const PricingCardFeature = styled.p`
  margin-top: 10px;
  max-width: 160px;
  width: 100%;
`;

export const PricingCardButton = styled(Button)`
  margin-top: 25px;
  min-width: 160px;
`;
