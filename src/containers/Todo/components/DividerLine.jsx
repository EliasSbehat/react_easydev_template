import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';

const DividerLine = ({ title }) => (
  <Col md={12}>
    <Divider>
      <Line />
      <Title>{title}</Title>
      <Line />
    </Divider>
  </Col>
);

DividerLine.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DividerLine;

// region STYLES

const Divider = styled.div`
  padding-bottom: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Line = styled.div`
  height: 1px;
  background-color: rgba(92, 104, 156, 0.6);
  opacity: 0.15;
  flex-grow: 1;
`;

const Title = styled.p`
  text-transform: uppercase;
  color: rgba(92, 104, 156, 0.6);
  margin: 0 10px;
`;

// endregion
