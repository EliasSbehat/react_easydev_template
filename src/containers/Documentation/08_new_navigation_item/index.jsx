import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DocumentationMain, DocumentContainer } from '../DocumentationElements';
import Navigation from '../navigation/Navigation';
import AddNewNavItem from './components/AddNewNavItem';
import NavigationBottom from '../navigation/NavigationBottom';

const NavigationItem = () => (
  <DocumentContainer>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Navigation Item</h3>
      </Col>
    </Row>
    <DocumentationMain>
      <Col md={12} lg={3} xl={3} sm={12} xs={12}>
        <Navigation active="navigation_item" />
      </Col>
      <Col md={12} lg={9} xl={9} sm={12} xs={12}>
        <AddNewNavItem />
      </Col>
    </DocumentationMain>
    <NavigationBottom
      prevLink="/documentation/color_themes"
      prevTitle="Color Themes"
      nextLink="/documentation/authentication"
      nextTitle="Authentication"
    />
  </DocumentContainer>
);

export default NavigationItem;
