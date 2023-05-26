import styled from 'styled-components';
import { CardBody } from '@/shared/components/Card';
import {
  colorAccent,
  colorDustyWhite,
  colorGray,
  colorLightGray,
} from '@/utils/palette';
import { left } from '@/utils/directions';

export const DashboardBookingCard = styled(CardBody)`
  padding: 20px 30px 25px;

  .progress {
    margin-top: 20px;
    
    p {
      font-size: 14px;
      font-weight: 500;
    }
  }
  
  svg {
    fill: ${colorLightGray};
  }
`;

export const DashboardBookingTotalWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const DashboardBookingTitle = styled.h5`
  direction: ltr;
  font-size: 28px;
  font-weight: 500;
  line-height: normal;
  color: ${props => props.color || colorAccent};
`;

export const DashboardBookingDescription = styled.h5`
  text-align: ${left};
  opacity: 0.7;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  color: ${props => (props.theme === 'dark' ? colorDustyWhite : colorGray)};
  margin-top: 3px;
  text-transform: uppercase;
`;
