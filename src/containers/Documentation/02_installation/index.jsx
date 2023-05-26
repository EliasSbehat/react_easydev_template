import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DocumentationMain, DocumentContainer } from '../DocumentationElements';
import Navigation from '../navigation/Navigation';
import InstallationSteps from './components/InstallationSteps';
import NavigationBottom from '../navigation/NavigationBottom';

const Installation = () => (
  <DocumentContainer>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Installation</h3>
      </Col>
    </Row>
    <DocumentationMain>
      <Col md={12} lg={3} xl={3} sm={12} xs={12}>
        <Navigation active="installation" />
      </Col>
      <Col md={12} lg={9} xl={9} sm={12} xs={12}>
        <InstallationSteps />
      </Col>
    </DocumentationMain>
    <NavigationBottom
      prevLink="/documentation/introduction"
      prevTitle="Introduction"
      nextLink="/documentation/file_structure"
      nextTitle="File Structure"
    />
  </DocumentContainer>
);

export default Installation;
