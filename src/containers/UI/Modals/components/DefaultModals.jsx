import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { ButtonToolbar } from '@/shared/components/Button';
import Modal from '@/shared/components/Modal';

const DefaultModals = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xl={4} xs={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.modals.default_modals')}</CardTitle>
            <CardSubhead>Use default modal</CardSubhead>
          </CardTitleWrap>
          <ButtonToolbar>
            <Modal
              color="primary"
              title="Congratulations!"
              btn="Default"
              message="Expect warmly its tended garden him esteem had remove off. Effects dearest staying
               now sixteen nor improve."
            />
            <Modal
              color="success"
              title="Well Done!"
              btn="Success"
              message="Expect warmly its tended garden him esteem had remove off. Effects dearest staying
               now sixteen nor improve."
            />
            <Modal
              color="warning"
              title="Attention!"
              btn="Warning"
              message="Expect warmly its tended garden him esteem had remove off. Effects dearest staying
               now sixteen nor improve."
            />
            <Modal
              color="danger"
              title="Stop!"
              btn="Danger"
              message="Expect warmly its tended garden him esteem had remove off. Effects dearest staying
               now sixteen nor improve."
            />
          </ButtonToolbar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultModals;
