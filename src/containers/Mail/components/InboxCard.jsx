import React from 'react';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody,
} from '@/shared/components/Card';
import Inbox from './Inbox';
import emails from './email-list';

const InboxCard = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <Inbox emails={emails} />
      </CardBody>
    </Card>
  </Col>
);

export default InboxCard;
