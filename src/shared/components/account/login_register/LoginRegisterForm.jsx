import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import AlternateEmailIcon from 'mdi-react/AlternateEmailIcon';
import { Alert } from 'react-bootstrap';
import styled from 'styled-components';
import PasswordField from '@/shared/components/form/Password';
import {
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupIcon,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { marginLeft } from '@/utils/directions';
import { AccountButton, AccountButtons, ForgotFormGroup } from '../AccountElements';

const RegisterForm = ({ onSubmit, errorMessage }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit }) => (
      <FormContainer onSubmit={handleSubmit}>
        <Alert
          variant="danger"
          show={!!errorMessage}
        >
          {errorMessage}
        </Alert>
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
              className="input-without-border-radius"
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
              required
              className="input-without-border-radius"
            />
          </FormGroupField>
        </FormGroup>
        <ForgotFormGroup>
          <FormGroupLabel>Password</FormGroupLabel>
          <FormGroupField>
            <Field
              name="password"
              component={PasswordField}
              placeholder="Password"
              className="input-without-border-radius"
              required
              keyIcon
            />
          </FormGroupField>
        </ForgotFormGroup>
        <RegisterButtons>
          <AccountButton type="submit" variant="primary">
            Sign Up
          </AccountButton>
        </RegisterButtons>
      </FormContainer>
    )}
  </Form>
);

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

RegisterForm.defaultProps = {
  errorMessage: '',
};

export default RegisterForm;

// region STYLES

const RegisterButtons = styled(AccountButtons)`
  ${marginLeft}: 0!important;
  margin-bottom: 20px;
  
  button {
    margin-bottom: 0;
  }
`;

// endregion
