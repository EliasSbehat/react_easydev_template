import React from 'react';
import { Col } from 'react-bootstrap';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import ProgressBar from '@/shared/components/ProgressBar';
import { Card } from '@/shared/components/Card';
import { colorGreen } from '@/utils/palette';
import {
  DashboardBookingCard,
  DashboardBookingDescription,
  DashboardBookingTitle,
  DashboardBookingTotalWrap,
} from '../BookingCardDashboardElements';

const TotalBookings = () => (
  <Col md={12} xl={3} lg={6} xs={12}>
    <Card>
      <DashboardBookingCard>
        <DashboardBookingTotalWrap>
          <DashboardBookingTitle color={colorGreen}>
            1 472
          </DashboardBookingTitle>
          <TrendingUpIcon />
        </DashboardBookingTotalWrap>
        <DashboardBookingDescription>Total bookings</DashboardBookingDescription>
        <ProgressBar now={32} label="32%" rounded size="small" gradient="lime" top />
      </DashboardBookingCard>
    </Card>
  </Col>
);

export default TotalBookings;
