import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import PasswordField from '@/shared/components/form/Password';
import {
  FormGroup,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import { WizardButtonToolbar, WizardFormContainer, WizardTitle } from '@/shared/components/form/WizardFormElements';

const WizardFormOne = ({ onSubmit, initialValues }) => (
  <Form onSubmit={onSubmit} initialValues={initialValues}>
    {({ handleSubmit }) => (
      <WizardFormContainer horizontal onSubmit={handleSubmit}>
        <WizardTitle>Fill your personal data</WizardTitle>
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
        <WizardButtonToolbar>
          <Button variant="primary" type="button" disabled className="previous">Back</Button>
          <Button variant="primary" type="submit" className="next">Next</Button>
        </WizardButtonToolbar>
      </WizardFormContainer>
    )}
  </Form>
);

WizardFormOne.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({}).isRequired,
};

export default WizardFormOne;
