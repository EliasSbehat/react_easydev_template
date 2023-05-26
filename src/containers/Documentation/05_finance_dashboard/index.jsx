import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DocumentationMain, DocumentContainer } from '../DocumentationElements';
import Navigation from '../navigation/Navigation';
import NavigationBottom from '../navigation/NavigationBottom';
import CoinCapAPI from './components/CoinCapAPI';
import CoinmarketcapAPI from './components/CoinmarketcapAPI';
import Introduction from './components/Introduction';

const FinanceDashboardDoc = () => (
  <DocumentContainer>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Finance dashboard</h3>
      </Col>
    </Row>
    <DocumentationMain>
      <Col md={12} lg={3} xl={3} sm={12} xs={12}>
        <Navigation active="finance_dashboard" />
      </Col>
      <Col md={12} lg={9} xl={9} sm={12} xs={12}>
        <Introduction />
        <CoinCapAPI />
        <CoinmarketcapAPI />
      </Col>
    </DocumentationMain>
    <NavigationBottom
      prevLink="/documentation/components"
      prevTitle="Components"
      nextLink="/documentation/color_themes"
      nextTitle="Color Themes"
    />
  </DocumentContainer>
);

export default FinanceDashboardDoc;
