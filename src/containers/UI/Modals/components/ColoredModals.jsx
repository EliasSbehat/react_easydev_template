import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { ButtonToolbar } from '@/shared/components/Button';
import Modal from '@/shared/components/Modal';

const ColoredModals = () => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6} xl={4} xs={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('ui_elements.modals.colored_modals')}</CardTitle>
            <CardSubhead>
              Use default modal with property <span className="red-text">colored</span>
            </CardSubhead>
          </CardTitleWrap>
          <ButtonToolbar>
            <Modal
              color="primary"
              title="Congratulations!"
              colored
              btn="Default"
              message="Expect warmly its tended garden him esteem had remove off. Effects dearest staying
               now sixteen nor improve."
            />
            <Modal
              color="success"
              title="Well Done!"
              colored
              btn="Success"
              message="Expect warmly its tended garden him esteem had remove off. Effects dearest staying
               now sixteen nor improve."
            />
            <Modal
              color="warning"
              title="Attention!"
              colored
              btn="Warning"
              message="Expect warmly its tended garden him esteem had remove off. Effects dearest staying
               now sixteen nor improve."
            />
            <Modal
              color="danger"
              title="Stop!"
              colored
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

export default ColoredModals;
