import React from 'react';
import {
  Col,
  Nav,
  Tab,
} from 'react-bootstrap';
import showResults from '@/utils/showResults';
import ProfileTimeLine from '@/shared/components/ProfileTimeLine';
import {
 TabsWrap, NavLink, NavItem, BorderedBottomTabs, 
} from '@/shared/components/Tabs';
import { Card } from '@/shared/components/Card';
import ProfileActivities from './ProfileActivities';
import ProfileSettings from './ProfileSettings';
import { ProfileCard } from '../ProfileBasicComponents';

const ProfileTabs = () => {
  const initialValues = {
    username: 'Larry Boom',
    email: 'boom@mail.com',
  };

  return (
    <Col md={12} lg={12} xl={8}>
      <Card>
        <BorderedBottomTabs as={ProfileCard}>
          <Tab.Container defaultActiveKey="1">
            <TabsWrap>
              <Nav className="nav-tabs">
                <NavItem>
                  <NavLink eventKey="1">
                    Activity
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="2">
                    TimeLine
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink eventKey="3">
                    Settings
                  </NavLink>
                </NavItem>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="1">
                  <ProfileActivities />
                </Tab.Pane>
                <Tab.Pane eventKey="2">
                  <ProfileTimeLine />
                </Tab.Pane>
                <Tab.Pane eventKey="3">
                  <ProfileSettings onSubmit={showResults} initialValues={initialValues} />
                </Tab.Pane>
              </Tab.Content>
            </TabsWrap>
          </Tab.Container>
        </BorderedBottomTabs>
      </Card>
    </Col>
  );
};

export default ProfileTabs;
