import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, Form } from 'react-final-form';
import { Col } from 'react-bootstrap';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import AlternateEmailIcon from 'mdi-react/AlternateEmailIcon';
import WebIcon from 'mdi-react/WebIcon';
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
  FormGroupIcon,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';

const HorizontalFormWithIcons = ({ onSubmit }) => {
  const { t } = useTranslation('common');
  return (
    <Col xs={12} md={12} lg={12} xl={6}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>{t('forms.form_layouts.horizontal_form_with_icons')}</CardTitle>
            <CardSubhead>Labels are left from fields and icons</CardSubhead>
          </CardTitleWrap>
          <Form onSubmit={onSubmit}>
            {({ handleSubmit, form }) => (
              <FormContainer horizontal onSubmit={handleSubmit}>
                <FormGroup>
                  <FormGroupLabel>Username</FormGroupLabel>
                  <FormGroupField>
                    <FormGroupIcon>
                      <AccountOutlineIcon />
                    </FormGroupIcon>
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
                    <FormGroupIcon>
                      <AlternateEmailIcon />
                    </FormGroupIcon>
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
                    <FormGroupIcon>
                      <WebIcon />
                    </FormGroupIcon>
                    <Field
                      name="url"
                      component="input"
                      type="text"
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
                      keyIcon
                    />
                  </FormGroupField>
                </FormGroup>
                <FormGroup>
                  <FormGroupField>
                    <Field
                      name="remember_me_horizontal_icons"
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

HorizontalFormWithIcons.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default HorizontalFormWithIcons;
