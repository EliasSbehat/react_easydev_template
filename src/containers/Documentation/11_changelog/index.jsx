import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DocumentationMain, DocumentContainer } from '../DocumentationElements';
import Navigation from '../navigation/Navigation';
import ChangelogList from './components/ChangelogList';
import NavigationBottom from '../navigation/NavigationBottom';

const Changelog = () => (
  <DocumentContainer>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Changelog</h3>
      </Col>
    </Row>
    <DocumentationMain>
      <Col md={12} lg={3} xl={3} sm={12} xs={12}>
        <Navigation active="changelog" />
      </Col>
      <Col md={12} lg={9} xl={9} sm={12} xs={12}>
        <ChangelogList />
      </Col>
    </DocumentationMain>
    <NavigationBottom
      prevLink="/documentation/resources"
      prevTitle="Resources"
      nextLink="/documentation/faq"
      nextTitle="FAQ Troubleshooting"
    />
  </DocumentContainer>
);

export default Changelog;
