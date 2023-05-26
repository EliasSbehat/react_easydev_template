import React from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { NavItem, NavLink, TabsWrap } from '@/shared/components/Tabs';

const Tabs = () => (
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
        <NavItem>
          <NavLink eventKey="4">
            Refounds
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
        <Tab.Pane eventKey="4">
          <p>Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
            use tolerably dependent listening men. No peculiar in handsome together unlocked do by. Article
            concern joy anxious did picture sir her.
          </p>
        </Tab.Pane>
      </Tab.Content>
    </TabsWrap>
  </Tab.Container>
);

export default Tabs;
