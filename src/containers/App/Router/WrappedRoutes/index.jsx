import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { colorBackgroundBody } from '@/utils/palette';
import { paddingLeft } from '@/utils/directions';
import Layout from '../../../Layout/index';
import Commerce from './Commerce';
import OnLineMarketingDashboard from '../../../Dashboards/OnLineMarketing/index';
import AppDashboard from '../../../Dashboards/App/index';
import BookingDashboard from '../../../Dashboards/Booking/index';
import FitnessDashboard from '../../../Dashboards/Fitness/index';
import UI from './UI';
import Mail from '../../../Mail/index';
import Chat from '../../../Chat/index';
import Todo from '../../../Todo/index';
import Forms from './Forms';
import Tables from './Tables';
import Charts from './Charts';
import Maps from './Maps';
import Account from './Account';
import ECommerce from './ECommerce';
import DefaultPages from './DefaultPages';
import Documentation from './Documentation';
import ConnectWallet from '../../../Dashboards/ConnectWallet';
import FinanceDashboard from '../../../Dashboards/Finance';

export default () => (
  <div>
    <Layout />
    <ContainerWrap>
      <Route path="/e_commerce_dashboard" component={Commerce} />
      <Route path="/online_marketing_dashboard" component={OnLineMarketingDashboard} />
      <Route path="/connect_wallet" component={ConnectWallet} />
      <Route exact path="/app_dashboard" component={AppDashboard} />
      <Route path="/booking_dashboard" component={BookingDashboard} />
      <Route exact path="/finance_dashboard" component={FinanceDashboard} />
      <Route path="/fitness_dashboard" component={FitnessDashboard} />
      <Route path="/ui" component={UI} />
      <Route path="/mail" component={Mail} />
      <Route path="/chat" component={Chat} />
      <Route path="/todo" component={Todo} />
      <Route path="/forms" component={Forms} />
      <Route path="/tables" component={Tables} />
      <Route path="/charts" component={Charts} />
      <Route path="/maps" component={Maps} />
      <Route path="/account" component={Account} />
      <Route path="/e-commerce" component={ECommerce} />
      <Route path="/default_pages" component={DefaultPages} />
      <Route path="/documentation" component={Documentation} />
    </ContainerWrap>
  </div>
);

// region STYLES

const ContainerWrap = styled.div`
  padding-top: 90px;
  min-height: 100vh;
  transition: padding-left 0.3s;

  ${paddingLeft}: 0;

  background: ${colorBackgroundBody};

  @media screen and (min-width: 576px) {
    ${paddingLeft}: 250px;
  }

  @media screen and (max-width: 576px) {
    padding-top: 150px;
  }
`;

// endregion
