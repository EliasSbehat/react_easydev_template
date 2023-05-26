import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DocumentationMain, DocumentContainer } from '../DocumentationElements';
import Navigation from '../navigation/Navigation';
import IntroductionFeatures from './components/IntroductionFeatures';
import NavigationBottom from '../navigation/NavigationBottom';

const Introduction = () => (
  <DocumentContainer>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Introduction</h3>
      </Col>
    </Row>
    <DocumentationMain>
      <Col md={12} lg={3} xl={3} sm={12} xs={12}>
        <Navigation active="introduction" />
      </Col>
      <Col md={12} lg={9} xl={9} sm={12} xs={12}>
        <IntroductionFeatures />
      </Col>
    </DocumentationMain>
    <NavigationBottom nextLink="/documentation/installation" nextTitle="Installation" />
  </DocumentContainer>
);

export default Introduction;
