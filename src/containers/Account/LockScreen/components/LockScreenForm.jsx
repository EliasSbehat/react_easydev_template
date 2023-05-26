import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import PasswordField from '@/shared/components/form/Password';
import {
 FormContainer, FormGroupField, FormGroupLabel, 
} from '@/shared/components/form/FormElements';
import {
  AccountButton,
  AccountForgotPassword,
  ForgotFormGroup,
} from '@/shared/components/account/AccountElements';

const AccountForm = () => (
  <Form onSubmit={() => {}}>
    {({ handleSubmit }) => (
      <FormContainer onSubmit={handleSubmit}>
        <ForgotFormGroup>
          <FormGroupLabel>Password</FormGroupLabel>
          <FormGroupField>
            <Field
              name="password"
              component={PasswordField}
              placeholder="Password"
              keyIcon
            />
            <AccountForgotPassword>
              <NavLink to="/reset_password">Forgot a password?</NavLink>
            </AccountForgotPassword>
          </FormGroupField>
        </ForgotFormGroup>
        <AccountButton as={NavLink} variant="primary" to="/online_marketing_dashboard">
          Unlock
        </AccountButton>
        <AccountButton
          as={NavLink}
          variant="outline-danger"
          to="/online_marketing_dashboard"
        >
          Logout
        </AccountButton>
      </FormContainer>
    )}
  </Form>
);

export default AccountForm;
