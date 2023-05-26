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

const ColoredControlsOnClick = ({ onSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('forms.check_form_controls.colored_controls_on_click')}</CardTitle>
            <CardSubhead>Checkboxes and radio buttons. Use prop
              <span className="red-text"> styleType</span> with <span className="red-text">colored-click</span> value
            </CardSubhead>
          </CardTitleWrap>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
              <FormContainer preview onSubmit={handleSubmit}>
                <SelectColorGroup name="on_click" />
                <CheckBoxGroup name="on_click" styleType="colored-click" />
                <RadioButtonsGroup name="on_click" styleType="colored-click" />
              </FormContainer>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

ColoredControlsOnClick.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ColoredControlsOnClick;
