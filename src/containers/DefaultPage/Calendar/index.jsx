import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';
import BigCalendar from './components/BigCalendar';
import EventLabels from './components/EventLabels';

const Calendar = () => {
  const rtl = useSelector(state => state.rtl);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Calendar</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <BigCalendar dir={rtl.direction} />
        <EventLabels />
      </Row>
    </Container>
  );
};

export default Calendar;
