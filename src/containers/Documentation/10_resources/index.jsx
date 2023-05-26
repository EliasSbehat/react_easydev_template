import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DocumentationMain, DocumentContainer } from '../DocumentationElements';
import Navigation from '../navigation/Navigation';
import ResourcesLinks from './components/ResourcesLinks';
import NavigationBottom from '../navigation/NavigationBottom';

const Resources = () => (
  <DocumentContainer>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Resources</h3>
      </Col>
    </Row>
    <DocumentationMain>
      <Col md={12} lg={3} xl={3} sm={12} xs={12}>
        <Navigation active="resources" />
      </Col>
      <Col md={12} lg={9} xl={9} sm={12} xs={12}>
        <ResourcesLinks />
      </Col>
    </DocumentationMain>
    <NavigationBottom
      prevLink="/documentation/authentication"
      prevTitle="Authentication"
      nextLink="/documentation/changelog"
      nextTitle="Changelog"
    />
  </DocumentContainer>
);

export default Resources;
