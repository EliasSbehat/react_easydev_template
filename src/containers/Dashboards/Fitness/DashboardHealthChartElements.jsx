import styled from 'styled-components';
import { CardBody } from '@/shared/components/Card';
import { colorAdditional, colorFitness } from '@/utils/palette';

export const DashboardHealthChartCard = styled(CardBody)`
  
  * {
    text-align: center;
  }
`;

export const DashboardHealthChartWrap = styled.div`
  position: relative;
`;

export const DashboardHealthChartInfo = styled.div`
  position: absolute;
  width: 100%;
  top: calc(50% - 55px);
  animation: label 1.5s ease-in;

  p {
    margin: 0;
  }
`;

export const DashboardHealthChartNumber = styled.p`
  font-size: 56px;
  line-height: 60px;
  color: ${colorFitness};
`;

export const DashboardHealthChartUnits = styled.p`
  color: ${colorAdditional};
  margin-top: 5px;
`;

export const DashboardHealthGoal = styled.p`
  font-size: 12px;
  color: ${colorAdditional};
  margin-top: 10px;
`;
