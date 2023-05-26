import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Form } from 'react-final-form';
import { Col } from 'react-bootstrap';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import { FormContainer } from '@/shared/components/form/FormElements';
import SelectColorGroup from './SelectColorGroup';
import CheckBoxGroup from './CheckboxGroup';
import RadioButtonsGroup from './RadioButtonsGroup';

const DefaultControls = ({ onSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('forms.check_form_controls.default_controls')}</CardTitle>
            <CardSubhead>Checkboxes and radio buttons</CardSubhead>
          </CardTitleWrap>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
              <FormContainer preview onSubmit={handleSubmit}>
                <SelectColorGroup />
                <CheckBoxGroup />
                <RadioButtonsGroup />
              </FormContainer>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

DefaultControls.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DefaultControls;
