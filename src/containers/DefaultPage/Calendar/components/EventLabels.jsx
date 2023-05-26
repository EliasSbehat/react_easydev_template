import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Button, ButtonToolbar, ButtonGroup } from '@/shared/components/Button';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { colorAccent, colorBlue, colorRed } from '@/utils/palette';
import { marginRight } from '@/utils/directions';

const EventLabels = () => (
  <Col md={12} lg={12} xl={3}>
    <Card height="auto">
      <CardBody>
        <CardTitleWrap>
          <CardTitle>event labels</CardTitle>
        </CardTitleWrap>
        <CalendarLabelWrap>
          <CalendarLabel color="red" /> High Priority events
        </CalendarLabelWrap>
        <CalendarLabelWrap>
          <CalendarLabel color="green" /> Family events
        </CalendarLabelWrap>
        <CalendarLabelWrap>
          <CalendarLabel color="blue" /> Non-priority events
        </CalendarLabelWrap>
        <ButtonToolbar>
          <ButtonGroup justified>
            <Button variant="primary" href="#">Create new event</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </CardBody>
    </Card>
  </Col>
);

export default EventLabels;

// region STYLES

const getColor = (color) => {
  switch (color) {
    case 'red':
      return colorRed;
    case 'green': 
      return colorAccent;
    case 'blue':
      return colorBlue;
    default:
      return colorAccent;
  }
}; 

const CalendarLabel = styled.span`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  display: inline-block;
  ${marginRight}: 5px;
  background-color: ${props => getColor(props.color)};
`;

const CalendarLabelWrap = styled.p`
  margin-top: 10px;
`;

// endregion
