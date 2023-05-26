import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import { Col } from 'react-bootstrap';
import renderSelectField from '@/shared/components/form/Select';
import PasswordField from '@/shared/components/form/Password';
import FormField from '@/shared/components/form/FormField';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import validate from './validate';

const VerticalForm = ({ onSubmit }) => {
  const { t } = useTranslation('common');
  return (
    <Col md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('forms.from_validation.vertical_form_validate_two')}</CardTitle>
            <CardSubhead>
              Errors are above fields, use prop <span className="red-text">top</span>
            </CardSubhead>
          </CardTitleWrap>
          <Form onSubmit={onSubmit} validate={validate}>
            {({
              handleSubmit,
              form: { reset },
            }) => (
              <FormContainer onSubmit={handleSubmit}>
                <FormGroup>
                  <FormGroupLabel>Username</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="username"
                      component={FormField}
                      type="text"
                      placeholder="Name"
                      isAboveError
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>E-mail</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="email"
                      component={FormField}
                      type="email"
                      placeholder="example@mail.com"
                      isAboveError
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Url</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="url"
                      component={FormField}
                      type="url"
                      placeholder="https://themeforest.net"
                      isAboveError
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Password</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="password"
                      component={PasswordField}
                      placeholder="Password"
                      isAboveError
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Select Option</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="select"
                      component={renderSelectField}
                      type="text"
                      options={[
                        { value: 'one', label: 'One' },
                        { value: 'two', label: 'Two' },
                      ]}
                      isAboveError
                    />
                  </FormGroupField>
                </FormGroup>
                <FormButtonToolbar>
                  <Button variant="primary" type="submit">Validate</Button>
                  <Button variant="secondary" type="button" onClick={reset}>
                    Cancel
                  </Button>
                </FormButtonToolbar>
              </FormContainer>
            )}
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

VerticalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default VerticalForm;
