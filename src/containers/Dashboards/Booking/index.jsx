import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap';
import TotalProfitEarned from './components/TotalProfitEarned';
import TotalCustomers from './components/TotalCustomers';
import TotalBookings from './components/TotalBookings';
import BookingCancels from './components/BookingCancels';
import Reservations from './components/Reservations';
import WeeklyStat from './components/WeeklyStat';
import Occupancy from './components/Occupancy';

const BookingDashboard = () => {
  const { t } = useTranslation('common');

  const rtl = useSelector(state => state.rtl);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('booking_dashboard.page_title')}</h3>
        </Col>
      </Row>
      <Row>
        <TotalProfitEarned />
        <TotalBookings />
        <TotalCustomers />
        <BookingCancels />
      </Row>
      <Row>
        <Reservations dir={rtl.direction} />
        <WeeklyStat />
        <Occupancy dir={rtl.direction} />
      </Row>
    </Container>
  );
};

export default BookingDashboard;
