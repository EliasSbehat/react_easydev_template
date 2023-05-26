import React from 'react';
import { Col } from 'react-bootstrap';
import { Form } from 'react-final-form';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { FormContainer } from '@/shared/components/form/FormElements';
import SelectColorGroup from './SelectColorGroup';
import CheckBoxGroup from './CheckboxGroup';
import RadioButtonsGroup from './RadioButtonsGroup';

const ButtonTypeControls = ({ onSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('forms.check_form_controls.button_type_controls')}</CardTitle>
            <CardSubhead>Checkboxes and radio buttons. Use prop
              <span className="red-text"> styleType</span> with <span className="red-text">button</span> value
            </CardSubhead>
          </CardTitleWrap>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
              <FormContainer preview onSubmit={handleSubmit}>
                <SelectColorGroup name="type" />
                <CheckBoxGroup name="type" styleType="button" />
                <RadioButtonsGroup name="type" styleType="button" />
              </FormContainer>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

ButtonTypeControls.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ButtonTypeControls;
