import React from 'react';
import {
  Col, Row,
} from 'react-bootstrap';
import { Card } from '@/shared/components/Card';
import { DocumentationChangelog, DocumentationMain, DocumentContainer } from '../DocumentationElements';
import Navigation from '../navigation/Navigation';
import NavigationBottom from '../navigation/NavigationBottom';

const Changelog = () => (
  <DocumentContainer>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / FAQ Troubleshooting </h3>
      </Col>
    </Row>
    <DocumentationMain>
      <Col md={12} lg={3} xl={3} sm={12} xs={12}>
        <Navigation active="faq" />
      </Col>
      <Col md={12} lg={9} xl={9} sm={12} xs={12}>
        <Card height="auto">
          <DocumentationChangelog>
            <p>Please be careful when you follow the instruction.</p>
            <br />
            <p>
              The most of errors can appear during the installation of a libraries,
              launching a development version or creating a production version.
            </p>
            <br />
            <p>
              If you have an error like &quot;Error: Cannot find module &apos;module_name&apos;&quot; you need to
              check the stage with the installation of a libraries. This error means that the module is not installed.
            </p>
          </DocumentationChangelog>
        </Card>
      </Col>
    </DocumentationMain>
    <NavigationBottom prevLink="/documentation/changelog" prevTitle="Changelog" />
  </DocumentContainer>
);

export default Changelog;
