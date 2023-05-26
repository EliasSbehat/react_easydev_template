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

const SessionShort = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} xl={3} lg={6} xs={12}>
      <Card>
        <DashboardWidgetCard>
          <div>
            <MobileAppWidgetLine>
              <MobileAppWidgetStat color="#ff4861">17 148</MobileAppWidgetStat>
              <MobileWidgetIconDown />
            </MobileAppWidgetLine>
            <MobileAppWidgetTitle>
              <h5>{t('app_dashboard.widget_sessions')}</h5>
            </MobileAppWidgetTitle>
            <ProgressBar now={87} label="87%" top size="small" gradient="pink" />
          </div>
        </DashboardWidgetCard>
      </Card>
    </Col>
  );
};

export default SessionShort;
