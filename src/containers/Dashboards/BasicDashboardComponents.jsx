import styled from 'styled-components';
import { PieChart, ResponsiveContainer } from 'recharts';
import { CardBody } from '@/shared/components/Card';
import {
 marginRight, paddingLeft, paddingRight, left, mirrorY, right,
} from '@/utils/directions';
import { colorText, colorAccent } from '@/utils/palette';

import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import TrendingDownIcon from 'mdi-react/TrendingDownIcon';

export const DashboardWidgetCard = styled(CardBody)`
  padding: 25px 20px;

  .progress-bar {
    border-radius: 5px;
    background-color: unset;

    p {
      font-size: 14px;
      font-weight: 500;
      ${right}: -7px;
    }
  }
`;

export const DashboardWidgetTotalWrap = styled.div`
  display: flex;
  margin-top: -15px;
`;

export const DashboardWidgetTotalAreaWrap = styled(DashboardWidgetTotalWrap)`
  margin-top: -55px;
`;

export const DashboardWidgetTotal = styled.p`
  font-size: 18px;
  height: 24px;
  ${marginRight}: auto;
  ${paddingRight}: 10px;
  margin-top: auto;
  line-height: 24px;
`;

export const DashboardWidgetChartContainer = styled.div`
  flex: 1;
  width: 0;
  min-width: 0;

  @media (min-width: 1200px) {
    min-width: 0;
    max-width: 180px;
  }
`;

export const DashboardWidgetTrendingIconUp = styled(TrendingUpIcon)`
  fill: ${colorAccent};
  height: 24px;
  width: 24px;
  ${marginRight}: 3px;
  transform: ${mirrorY};
  min-width: 24px;
  margin-top: auto;
`;

export const DashboardWidgetTrendingIconDown = styled(TrendingDownIcon)`
  fill: ${({ color }) => (color || colorAccent)};
  height: 24px;
  width: 24px;
  ${marginRight}: 3px;
  transform: ${mirrorY};
  min-width: 24px;
  margin-top: auto;
`;

export const DashboardAreaChartContainer = styled(ResponsiveContainer)`
  font-size: 11px;

  .recharts-legend-wrapper {
    bottom: 0 !important;
  }
`;

export const DashboardPieChartContainer = styled(ResponsiveContainer)`
  text-align: ${left};
  height: 280px !important;

  .recharts-surface {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    
    .recharts-legend-wrapper {
      position: relative!important;
    }
  }
`;

export const DashboardPieChart = styled(PieChart)`
  ${paddingLeft}: 0;
  height: 200px !important;
`;

export const DashboardChartLegend = styled.ul`
  padding: 0;
  list-style: none;

  span {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    display: inline-block;
    ${marginRight}: 10px;
    // didn't rtl
    margin-right: 10px;
  }

  li {
    margin-top: 5px;
    color: ${colorText};
  }
`;
