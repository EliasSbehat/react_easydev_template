import React from 'react';
import { Col } from 'react-bootstrap';
import Calendar from '@/shared/components/Calendar';
import { Card, CardBody } from '@/shared/components/Card';
import events from '../../../DefaultPage/Calendar/components/events';

const ProfileCalendar = () => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <CardBody>
        <Calendar events={events} small />
      </CardBody>
    </Card>
  </Col>
);

export default ProfileCalendar;


