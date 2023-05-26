import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { Col } from 'react-bootstrap';
import Alert from '@/shared/components/Alert';

const BasicAlerts = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.alerts.basic_alerts')}</CardTitle>
            <CardSubhead className="subhead">Basic configuration of alert</CardSubhead>
          </CardTitleWrap>
          <Alert color="info" closable>
            <p><b>Information:</b> Learning day desirous informed expenses material
              returned six the.
              She enabled invited exposed him another.
            </p>
          </Alert>
          <Alert color="success" closable>
            <p><b>Congratulations!</b> Learning day desirous informed expenses
              material returned six the. She enabled invited exposed him another.
            </p>
          </Alert>
          <Alert color="warning" closable>
            <p><b>Attention!</b> Learning day desirous informed
              expenses material returned six the. She enabled invited exposed him another.
            </p>
          </Alert>
          <Alert color="danger" closable>
            <p><b>Warning!</b> Learning day desirous informed expenses
              material returned six the. She enabled invited exposed him another.
            </p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicAlerts;
