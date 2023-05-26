import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import {
 colorWhite, landingGradientBtn,
} from '@/utils/palette';

export const LandingContainer = styled(Container)`
  transition: 0.3s;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 576px) {
    max-width: 540px !important;
  }

  @media (min-width: 768px) {
    max-width: 720px !important;
  }

  @media (min-width: 992px) {
    max-width: 960px !important;
  }

  @media (min-width: 1200px) {
    max-width: 1140px !important;
  }
`;

export const LandingButton = styled.a`
  padding: 12px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${colorWhite};
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  border: solid 1px ${colorWhite};
  border-radius: 100px;
  height: 46px;
  transition: 0.3s;
  white-space: nowrap;

  &:hover {
    color: ${colorWhite};
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const LandingButtonGradient = styled(LandingButton)`
  background: ${landingGradientBtn};
  color: ${colorWhite};
  border: none;
`;

export const LandingSection = styled.section`
  margin-bottom: 96px;
  position: relative;
 
  @media screen and (min-width: 576px) {
    margin-bottom: 176px;
  }
 
  @media screen and (min-width: 992px) {
    margin-bottom: 232px;
  }
`;
