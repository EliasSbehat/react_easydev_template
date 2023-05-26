import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import { Col } from 'react-bootstrap';
import renderRadioButtonField from '@/shared/components/form/RadioButton';
import renderSelectField from '@/shared/components/form/Select';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupLabel,
  FormHalfContainer,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';

const VerticalFormHalf = ({ onSubmit }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('forms.form_layouts.vertical_form')}</CardTitle>
          </CardTitleWrap>
          <Form onSubmit={onSubmit} initialValues={{ gender: 'male' }}>
            {({ handleSubmit, form }) => (
              <FormContainer onSubmit={handleSubmit}>
                <FormHalfContainer>
                  <FormGroup>
                    <FormGroupLabel>First Name</FormGroupLabel>
                    <FormGroupField>
                      <Field
                        name="first_name"
                        component="input"
                        type="text"
                        placeholder="Name"
                      />
                    </FormGroupField>
                  </FormGroup>
                  <FormGroup>
                    <FormGroupLabel>Last Name</FormGroupLabel>
                    <FormGroupField>
                      <Field
                        name="last_name"
                        component="input"
                        type="text"
                        placeholder="Last Name"
                      />
                    </FormGroupField>
                  </FormGroup>
                  <FormGroup>
                    <FormGroupLabel>Date of Birth</FormGroupLabel>
                    <FormGroupField>
                      <Field
                        name="birth"
                        component="input"
                        type="text"
                        placeholder="dd/mm/yyyy"
                      />
                    </FormGroupField>
                  </FormGroup>
                  <FormGroup>
                    <FormGroupLabel>Gender</FormGroupLabel>
                    <FormGroupField>
                      <Field
                        name="gender"
                        component={renderRadioButtonField}
                        label="Male"
                        radioValue="male"
                      />
                      <Field
                        name="gender"
                        component={renderRadioButtonField}
                        label="Female"
                        radioValue="female"
                      />
                    </FormGroupField>
                  </FormGroup>
                </FormHalfContainer>
                <FormHalfContainer>
                  <FormGroup>
                    <FormGroupLabel>Select your country </FormGroupLabel>
                    <FormGroupField>
                      <Field
                        name="select"
                        component={renderSelectField}
                        type="text"
                        options={[
                          { value: 'one', label: 'One' },
                          { value: 'two', label: 'Two' },
                        ]}
                      />
                    </FormGroupField>
                  </FormGroup>
                  <FormGroup>
                    <FormGroupLabel>City</FormGroupLabel>
                    <FormGroupField>
                      <Field
                        name="city"
                        component="input"
                        type="text"
                        placeholder="Your city name"
                      />
                    </FormGroupField>
                  </FormGroup>
                  <FormGroup>
                    <FormGroupLabel>ZIP Code</FormGroupLabel>
                    <FormGroupField>
                      <Field
                        name="zip"
                        component="input"
                        type="text"
                        placeholder="Enter your ZIP code"
                      />
                    </FormGroupField>
                  </FormGroup>
                  <FormButtonToolbar>
                    <Button variant="primary" type="submit">Submit</Button>
                    <Button variant="secondary" type="button" onClick={form.reset}>
                      Cancel
                    </Button>
                  </FormButtonToolbar>
                </FormHalfContainer>
              </FormContainer>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

VerticalFormHalf.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default VerticalFormHalf;
