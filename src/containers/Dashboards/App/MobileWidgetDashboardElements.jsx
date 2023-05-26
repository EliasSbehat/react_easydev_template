import styled from 'styled-components';
import { colorGray, colorLightGray } from '@/utils/palette';
import { marginRight, left } from '@/utils/directions';

import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import TrendingDownIcon from 'mdi-react/TrendingDownIcon';

export const MobileAppWidgetLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MobileAppWidgetStat = styled.p`
  direction: ltr;
  padding: 0;
  font-size: 28px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  ${marginRight}: auto;
  line-height: normal;
  color: ${props => props.color};
`;

export const MobileAppWidgetTitle = styled.div`
  text-align: ${left};
  text-transform: uppercase;
  position: relative;
  margin: 0 0 20px;

  h5 {
    font-size: 12px;
    color: ${colorGray};
    font-weight: 500;
  }
`;

export const MobileWidgetIconUp = styled(TrendingUpIcon)`
  margin: 0;
  height: 29px;
  min-width: 28px;
  fill: ${colorLightGray};
`;

export const MobileWidgetIconDown = styled(TrendingDownIcon)`
  margin: 0;
  height: 29px;
  min-width: 28px;
  fill: ${colorLightGray};
`;
