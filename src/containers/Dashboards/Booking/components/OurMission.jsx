import React from 'react';
import styled from 'styled-components';
import TargetIcon from 'mdi-react/TargetIcon';
import { colorGreen, colorWhite } from '@/utils/palette';
import { left, right } from '@/utils/directions';

const OurMission = () => (
  <div>
    <DashboardBookingMission>
      <TargetIcon />
      <DashboardBookingMissionTitle>Our mission</DashboardBookingMissionTitle>
      <DashboardBookingMissionDescription>
        We are inspired by the customer’s happiness and their ability to travel!
      </DashboardBookingMissionDescription>
    </DashboardBookingMission>
  </div>
);

export default OurMission;

// region STYLES

const DashboardBookingMission = styled.div`
  text-align: ${left};
  height: 108px;
  background: ${colorGreen};
  border-radius: 5px;
  padding: 15px 13px;
  position: relative;
  overflow: hidden;

  svg {
    position: absolute;
    height: 80px;
    width: 80px;
    top: calc(50% - 40px);
    opacity: 0.3;
    ${right}: -23px;
    color: ${colorWhite};
  }
`;

const DashboardBookingMissionDescription = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.25;
  color: ${colorWhite};
  max-width: 100%;

  @media screen and (min-width: 376px) and (max-width: 991px) {
    max-width: calc(100% - 60px);
  }

  @media screen and (min-width: 1200px) and (max-width: 1550px) {
    font-size: 14px;
  }

  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;

const DashboardBookingMissionTitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: ${colorWhite};
  margin-top: 0;
  margin-bottom: 4px;
  line-height: 1.25;
  
  @media screen and (min-width: 1200px) and (max-width: 1399px) {
    font-size: 20px;
  }
`;

// endregion
