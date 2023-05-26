import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DocumentationMain, DocumentContainer } from '../DocumentationElements';
import Navigation from '../navigation/Navigation';
import Structure from './components/Structure';
import NavigationBottom from '../navigation/NavigationBottom';

const FileStructure = () => (
  <DocumentContainer>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / File Structure</h3>
      </Col>
    </Row>
    <DocumentationMain>
      <Col md={12} lg={3} xl={3} sm={12} xs={12}>
        <Navigation active="file_structure" />
      </Col>
      <Col md={12} lg={9} xl={9} sm={12} xs={12}>
        <Structure />
      </Col>
    </DocumentationMain>
    <NavigationBottom
      prevLink="/documentation/installation"
      prevTitle="Installation"
      nextLink="/documentation/components"
      nextTitle="Components"
    />
  </DocumentContainer>
);

export default FileStructure;
