import React from 'react';
import { Container, Row } from 'react-bootstrap';
import EmailConfirmationCard from './components/EmailConfirmationCard';

const EmailConfirmation = () => (
  <Container>
    <Row>
      <EmailConfirmationCard />
    </Row>
  </Container>
);

export default EmailConfirmation;
