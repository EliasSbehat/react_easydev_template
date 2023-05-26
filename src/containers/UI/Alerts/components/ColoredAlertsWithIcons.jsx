import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { Col } from 'react-bootstrap';
import Alert from '@/shared/components/Alert';

const ColoredAlertsWithIcons = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.alerts.colored_alerts_with_icons')}</CardTitle>
            <CardSubhead>
              Use basic alert with a prop <span className="red-text">colored</span>
            </CardSubhead>
          </CardTitleWrap>
          <Alert color="info" colored icon>
            <p><b>Information:</b> Learning day desirous informed expenses material
              returned six the.
              She enabled invited exposed him another.
            </p>
          </Alert>
          <Alert color="success" colored icon>
            <p><b>Congratulations!</b> Learning day desirous informed expenses
              material returned six the. She enabled invited exposed him another.
            </p>
          </Alert>
          <Alert color="warning" colored icon>
            <p><b>Attention!</b> Learning day desirous informed
              expenses material returned six the. She enabled invited exposed him another.
            </p>
          </Alert>
          <Alert color="danger" colored icon>
            <p><b>Warning!</b> Learning day desirous informed expenses
              material returned six the. She enabled invited exposed him another.
            </p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColoredAlertsWithIcons;
