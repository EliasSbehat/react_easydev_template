import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DocumentationMain, DocumentContainer } from '../DocumentationElements';
import Navigation from '../navigation/Navigation';
import NavigationBottom from '../navigation/NavigationBottom';
import FireBase from './components/Firebase';
import Auth0 from './components/Auth0';
import AuthGoogleAndFb from './components/AuthGoogleAndFb';
import WalletConnect from './components/WalletConnect';

const NavigationItem = () => (
  <DocumentContainer>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Authentication</h3>
      </Col>
    </Row>
    <DocumentationMain>
      <Col md={12} lg={3} xl={3} sm={12} xs={12}>
        <Navigation active="authentication" />
      </Col>
      <Col md={12} lg={9} xl={9} sm={12} xs={12}>
        <Auth0 />
        <AuthGoogleAndFb />
        <FireBase />
        <WalletConnect />
      </Col>
    </DocumentationMain>
    <NavigationBottom
      prevLink="/documentation/navigation_item"
      prevTitle="Navigation Item"
      nextLink="/documentation/resources"
      nextTitle="Resources"
    />
  </DocumentContainer>
);

export default NavigationItem;
