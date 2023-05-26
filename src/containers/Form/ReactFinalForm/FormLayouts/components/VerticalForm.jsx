import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import { Col } from 'react-bootstrap';
import renderCheckBoxField from '@/shared/components/form/CheckBox';
import PasswordField from '@/shared/components/form/Password';
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

const VerticalForm = ({ onSubmit }) => {
  const { t } = useTranslation('common');
  return (
    <Col xs={12} md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('forms.form_layouts.vertical_form')}</CardTitle>
            <CardSubhead>Labels are above fields</CardSubhead>
          </CardTitleWrap>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, form }) => (
              <FormContainer onSubmit={handleSubmit}>
                <FormGroup>
                  <FormGroupLabel>Username</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="username"
                      component="input"
                      type="text"
                      placeholder="Name"
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>E-mail</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="email"
                      component="input"
                      type="email"
                      placeholder="example@mail.com"
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupLabel>Url</FormGroupLabel>
                  <FormGroupField>
                    <Field
                      name="url"
                      component="input"
                      type="url"
                      placeholder="https://themeforest.net"
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
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupField>
                    <Field
                      name="remember_me_vertical"
                      component={renderCheckBoxField}
                      label="Remember me"
                      type="checkbox"
                    />
                  </FormGroupField>
                </FormGroup>
                <FormButtonToolbar>
                  <Button variant="primary" type="submit">Submit</Button>
                  <Button variant="secondary" type="button" onClick={form.reset}>
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
