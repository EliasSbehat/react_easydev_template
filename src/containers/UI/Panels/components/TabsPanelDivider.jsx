import React from 'react';
import { useTranslation } from 'react-i18next';
import { Nav, Tab } from 'react-bootstrap';
import Panel from '@/shared/components/Panel';
import {
 TabsWrap, NavLink, NavItem, BorderedBottomTabs,
} from '@/shared/components/Tabs';

const TabsPanelDivider = () => {
  const { t } = useTranslation('common');

  return (
    <Panel xs={12} md={12} lg={6} divider title={t('ui_elements.panels.tabs_panel_divider')}>
      <BorderedBottomTabs>
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
            <Tab.Content className="typography-message">
              <Tab.Pane eventKey="1">
                <p>
                  Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
                  use tolerably dependent listening men.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="2">
                <p>
                  Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
                  use tolerably dependent listening men. No peculiar in handsome together unlocked do by.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="3">
                <p>
                  Direction has strangers now believing. Respect enjoyed gay far exposed parlors towards. Enjoyment
                  use tolerably dependent listening men. No peculiar in handsome together unlocked do by.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="4">
                <p>
                  Enjoyment use tolerably dependent listening men. No peculiar in handsome together unlocked do by.
                  Article concern joy anxious did picture sir her.
                </p>
              </Tab.Pane>
            </Tab.Content>
          </TabsWrap>
        </Tab.Container>
      </BorderedBottomTabs>
    </Panel>
  );
};

export default TabsPanelDivider;
