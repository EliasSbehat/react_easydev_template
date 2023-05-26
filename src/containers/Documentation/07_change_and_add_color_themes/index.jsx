import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DocumentationMain, DocumentContainer } from '../DocumentationElements';
import Navigation from '../navigation/Navigation';
import ChangeColorThemes from './components/ChangeColorThemes';
import AddColorThemes from './components/AddColorThemes';
import NavigationBottom from '../navigation/NavigationBottom';

const ColorThemes = () => (
  <DocumentContainer>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Color Themes</h3>
      </Col>
    </Row>
    <DocumentationMain>
      <Col md={12} lg={3} xl={3} sm={12} xs={12}>
        <Navigation active="color_themes" />
      </Col>
      <Col md={12} lg={9} xl={9} sm={12} xs={12}>
        <ChangeColorThemes />
        <AddColorThemes />
      </Col>
    </DocumentationMain>
    <NavigationBottom
      prevLink="/documentation/form"
      prevTitle="Form"
      nextLink="/documentation/navigation_item"
      nextTitle="Navigation Item"
    />
  </DocumentContainer>
);

export default ColorThemes;
