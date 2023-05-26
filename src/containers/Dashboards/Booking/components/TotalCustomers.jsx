import React from 'react';
import { Col } from 'react-bootstrap';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import ProgressBar from '@/shared/components/ProgressBar';
import { Card } from '@/shared/components/Card';
import { colorBlue } from '@/utils/palette';
import {
  DashboardBookingCard,
  DashboardBookingDescription,
  DashboardBookingTitle,
  DashboardBookingTotalWrap,
} from '../BookingCardDashboardElements';

const TotalCustomers = () => (
  <Col md={12} xl={3} lg={6} xs={12}>
    <Card>
      <DashboardBookingCard>
        <DashboardBookingTotalWrap>
          <DashboardBookingTitle color={colorBlue}>
            3 235
          </DashboardBookingTitle>
          <TrendingUpIcon />
        </DashboardBookingTotalWrap>
        <DashboardBookingDescription>Total customers</DashboardBookingDescription>
        <ProgressBar now={79} label="79%" rounded size="small" gradient="blue" top />
      </DashboardBookingCard>
    </Card>
  </Col>
);

export default TotalCustomers;
