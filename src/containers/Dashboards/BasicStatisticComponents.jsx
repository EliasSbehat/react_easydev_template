import styled from 'styled-components';
import { PieChart } from 'recharts';
import { colorDustyWhite, colorAdditional } from '@/utils/palette';
import { marginLeft, marginRight, left } from '@/utils/directions';

export const DashboardStatWrap = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 10px;
  align-items: center;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1200px) and (max-width: 1439px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }
`;

export const DashboardStatChartWrap = styled.div`
  position: relative;
  text-align: center;

  @media screen and (min-width: 1200px) and (max-width: 1439px) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 1200px) and (max-width: 1539px) {
    svg, div {
      width: 80px !important;
      height: 80px !important;
    }
  }
`;

export const DashboardStatLabel = styled.p`
  position: absolute;
  font-size: 18px;
  line-height: 20px;
  top: calc(50% - 10px);
  width: 100%;
  margin: 0;
  animation: label 1.5s ease-in;
  color: ${colorDustyWhite};

  @keyframes label {
    from {
      opacity: 0
    }
    to {
      opacity: 1
    }
  }
`;

export const DashboardStatInfo = styled.div`
  ${marginRight}: 0;
  ${marginLeft}: 30px;
  text-align: ${left};
  margin-top: auto;
  margin-bottom: auto;

  p {
    color: ${colorAdditional};
  }
  
  @media screen and (min-width: 1200px) and (max-width: 1439px) {
    margin: 0;
  }
`;

export const DashboardStatNumber = styled.h4`
  margin-top: 10px;
`;

export const DashboardWeeklyStatWrap = styled.div`

  hr {
    margin-bottom: 20px;
  }
`;

export const DashboardWeeklyStatChart = styled.div`
  display: flex;
  margin: 0 0 31px 0;
  flex-wrap: wrap;
  justify-content: space-around;

  .recharts-surface {
    width: 100%;
    height: 100%;

  }
`;

export const DashboardWeeklyStatChartItem = styled.div`
  width: 110px;
  margin-bottom: 15px;

  @media screen and (max-width: 370px) {
    ${marginLeft}: 10px;
  }

  @media screen and (min-width: 1200px) {
    ${marginLeft}: 10px;
  }

  @media screen and (min-width: 1400px) {
    ${marginLeft}: 0;
  }
`;

export const DashboardWeeklyStatChartPie = styled.div`
  display: block;
  position: relative;
  text-align: center;
  height: 110px;

  .recharts-responsive-container {
    width: 100% !important;
  }
`;

export const DashboardWeeklyStatPieChart = styled(PieChart)`
  width: 100% !important;
  height: 100% !important;
`;

export const DashboardWeeklyStatLabel = styled.p`
  position: absolute;
  top: calc(50% - 10px);
  width: 100%;
  margin: 0;
  animation: label 1.5s ease-in;
  font-size: 24px;
  line-height: 24px;
`;

export const DashboardWeeklyStatInfo = styled.div`
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.38;
  text-align: center;
  
  p {
    color: ${colorAdditional};
  }
`;

export const DashboardSocialStatItem = styled.div`
  text-align: ${left};
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin-top: 24px;
  
  &:first-child {
    margin-top: 0;
  }
`;

export const DashboardSocialStatTitle = styled.div`
  width: 40%;
  font-size: 13px;
  line-height: 1.38;
  color: ${colorAdditional};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform: translateY(4px);
`;

export const DashboardSocialStatProgress = styled.div`
  width: ${props => (props.wide ? 80 : 60)}%;
  padding-left: 20px;
`;
