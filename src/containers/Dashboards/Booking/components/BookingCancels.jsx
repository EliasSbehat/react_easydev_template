import React from 'react';
import { Col } from 'react-bootstrap';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import ProgressBar from '@/shared/components/ProgressBar';
import { Card } from '@/shared/components/Card';
import {
  DashboardBookingCard,
  DashboardBookingDescription,
  DashboardBookingTitle,
  DashboardBookingTotalWrap,
} from '../BookingCardDashboardElements';

const BookingCancels = () => (
  <Col md={12} xl={3} lg={6} xs={12}>
    <Card>
      <DashboardBookingCard>
        <DashboardBookingTotalWrap>
          <DashboardBookingTitle>34</DashboardBookingTitle>
          <TrendingUpIcon />
        </DashboardBookingTotalWrap>
        <DashboardBookingDescription>Booking cancels</DashboardBookingDescription>
        <ProgressBar now={45} label="45%" rounded size="small" gradient="turquoise" top />
      </DashboardBookingCard>
    </Card>
  </Col>
);

export default BookingCancels;
