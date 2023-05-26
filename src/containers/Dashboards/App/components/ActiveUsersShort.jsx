import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import ProgressBar from '@/shared/components/ProgressBar';
import { Card } from '@/shared/components/Card';
import {
  MobileAppWidgetLine,
  MobileAppWidgetStat,
  MobileAppWidgetTitle,
  MobileWidgetIconUp,
} from '../MobileWidgetDashboardElements';
import {
  DashboardWidgetCard,
} from '../../BasicDashboardComponents';

const ActiveUsersShort = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} xl={3} lg={6} xs={12}>
      <Card>
        <DashboardWidgetCard>
          <div>
            <MobileAppWidgetLine className=" mobile-app-widget__top-line--lime">
              <MobileAppWidgetStat color="#b8e986">1 472</MobileAppWidgetStat>
              <MobileWidgetIconUp />
            </MobileAppWidgetLine>
            <MobileAppWidgetTitle>
              <h5>{t('app_dashboard.widget_active_users')}</h5>
            </MobileAppWidgetTitle>
            <ProgressBar now={32} label="32%" top gradient="lime" size="small" />
          </div>
        </DashboardWidgetCard>
      </Card>
    </Col>
  );
};

export default ActiveUsersShort;
