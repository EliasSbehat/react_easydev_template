import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Field, Form } from 'react-final-form';
import { Col } from 'react-bootstrap';
import renderTimePickerField from '@/shared/components/form/date-pickers/TimePicker';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { FormContainer, FormGroup, FormGroupLabel } from '@/shared/components/form/FormElements';

const TimePickers = ({ onSubmit }) => {
  const { t } = useTranslation('common');

  const themeName = useSelector(state => state.theme.className);

  return (
    <Col xs={12} md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('forms.from_picker.time_picker')}</CardTitle>
          </CardTitleWrap>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit }) => (
              <FormContainer onSubmit={handleSubmit} autoComplete="off">
                <FormGroup>
                  <FormGroupLabel>Default Time Picker</FormGroupLabel>
                  <Field
                    name="time"
                    component={renderTimePickerField}
                    theme={themeName}
                  />
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Twelve hours mode</FormGroupLabel>
                  <Field
                    name="time_twelve"
                    component={renderTimePickerField}
                    timeMode
                    theme={themeName}
                  />
                </FormGroup>
              </FormContainer>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

TimePickers.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TimePickers;
