import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DocumentationMain, DocumentContainer } from '../DocumentationElements';
import Navigation from '../navigation/Navigation';
import Alerts from './components/Alerts';
import Intro from './components/Intro';
import Buttons from './components/Buttons';
import Carousel from './components/Carousel';
import Collapse from './components/Collapse';
import Modals from './components/Modals';
import Notifications from './components/Notifications';
import Panel from './components/Panel';
import ProgressBars from './components/ProgressBars';
import RangeSliders from './components/RangeSliders';
import Tabs from './components/Tabs';
import Tooltips from './components/Tooltips';
import Popovers from './components/Popovers';
import NavigationBottom from '../navigation/NavigationBottom';

const Components = () => (
  <DocumentContainer>
    <Row>
      <Col md={12}>
        <h3 className="page-title">Documentation / Components</h3>
      </Col>
    </Row>
    <DocumentationMain>
      <Col md={12} lg={3} xl={3} sm={12} xs={12}>
        <Navigation active="components" />
      </Col>
      <Col md={12} lg={9} xl={9} sm={12} xs={12}>
        <Intro />
        <Alerts />
        <Buttons />
        <Carousel />
        <Collapse />
        <Modals />
        <Notifications />
        <Panel />
        <Popovers />
        <ProgressBars />
        <RangeSliders />
        <Tabs />
        <Tooltips />
      </Col>
    </DocumentationMain>
    <NavigationBottom
      prevLink="/documentation/file_structure"
      prevTitle="File Structure"
      nextLink="/documentation/finance_dashboard"
      nextTitle="Finance dashboard"
    />
  </DocumentContainer>
);

export default Components;
