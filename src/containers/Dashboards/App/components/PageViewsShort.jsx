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

const PageViewsShort = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} xl={3} lg={6} xs={12}>
      <Card>
        <DashboardWidgetCard>
          <div>
            <MobileAppWidgetLine>
              <MobileAppWidgetStat color="#4ce1b6">21 534</MobileAppWidgetStat>
              <MobileWidgetIconDown />
            </MobileAppWidgetLine>
            <MobileAppWidgetTitle>
              <h5>{t('app_dashboard.widget_pageviews')}</h5>
            </MobileAppWidgetTitle>
            <ProgressBar now={45} label="45%" top size="small" gradient="turquoise" />
          </div>
        </DashboardWidgetCard>
      </Card>
    </Col>
  );
};

export default PageViewsShort;
