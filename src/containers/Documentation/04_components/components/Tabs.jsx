/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const Tabs = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Tabs</CardTitle>
      </CardTitleWrap>
      <p>Tabs are based on <a href="https://react-bootstrap.github.io/components/tabs/">react-bootstrap</a>. Example of
        using this component here:
      </p>
      <CodeHighlither>
        {`import React, { useState } from 'react';
import {
  Nav, Tab,
} from 'react-bootstrap';
import { NavItem, NavLink, TabsWrap, Tabs } from '@/shared/components/Tabs';

const TabsExample = () => (
  <Tabs>
    <Tab.Container defaultActiveKey="1">
      <TabsWrap>
        <Nav className="nav-tabs">
          <NavItem>
            <NavLink eventKey="1">
              Sales
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="2">
              Statistic
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink eventKey="3">
              Offers
            </NavLink>
          </NavItem>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="1">
            <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
              use tolerably dependent listening men. No peculiar in handsome together unlocked do by. Article
              concern joy anxious did picture sir her. Although desirous not recurred disposed off shy you
              numerous securing.
            </p>
          </Tab.Pane>
          <Tab.Pane eventKey="2">
            <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
              use tolerably dependent listening men. No peculiar in handsome together unlocked do by.
            </p>
          </Tab.Pane>
          <Tab.Pane eventKey="3">
            <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
              use tolerably dependent listening men. No peculiar in handsome together unlocked do by.
            </p>
          </Tab.Pane>
        </Tab.Content>
      </TabsWrap>
    </Tab.Container>
  </Tabs>
);

export default TabsExample;`}
      </CodeHighlither>
      {/* <p>To change tabs style you need to add className to <b>tabs' wrapper</b>:</p> */}
      {/* <ol> */}
      {/*  <li><span className="red-text">'tabs--bordered-top'</span> to add accent border on top of active tab</li> */}
      {/* eslint-disable-next-line max-len */}
      {/*  <li><span className="red-text">'tabs--bordered-bottom'</span> to add accent border on bottom of active tab */}
      {/*  </li> */}
      {/* eslint-disable-next-line max-len */}
      {/*  <li><span className="red-text">'tabs--justify'</span> to justify tabs within container (can be combined with */}
      {/*    classes above) */}
      {/*  </li> */}
      {/*  <li><span className="red-text">'tabs--vertical'</span> to place tabs to the left from a tab panels</li> */}
      {/* eslint-disable-next-line max-len */}
      {/*  <li><span className="red-text">'tabs--vertical tabs--vertical-colored'</span> to place tabs to the left from */}
      {/*    a tab panels and fill background of active tab */}
      {/*  </li> */}
      {/* </ol> */}
    </CardBody>
  </Card>
);

export default Tabs;
