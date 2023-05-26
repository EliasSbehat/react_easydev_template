import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import ProgressBar from '@/shared/components/ProgressBar';
import { Card } from '@/shared/components/Card';
import {
  MobileAppWidgetLine,
  MobileAppWidgetStat,
  MobileAppWidgetTitle,
  MobileWidgetIconDown,
} from '../MobileWidgetDashboardElements';
import {
  DashboardWidgetCard,
} from '../../BasicDashboardComponents';

const NewUsersShort = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} xl={3} lg={6} xs={12}>
      <Card>
        <DashboardWidgetCard>
          <div>
            <MobileAppWidgetLine>
              <MobileAppWidgetStat color="#48b5ff">568</MobileAppWidgetStat>
              <MobileWidgetIconDown />
            </MobileAppWidgetLine>
            <MobileAppWidgetTitle>
              <h5>{t('app_dashboard.widget_new_users')}</h5>
            </MobileAppWidgetTitle>
            <ProgressBar now={79} label="79%" size="small" top gradient="blue" />
          </div>
        </DashboardWidgetCard>
      </Card>
    </Col>
  );
};

export default NewUsersShort;
