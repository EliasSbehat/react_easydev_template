import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import { NavLink } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import PasswordField from '@/shared/components/form/Password';
import {
  FormGroup,
  FormGroupField,
  FormGroupIcon,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import renderCheckBoxField from '../../form/CheckBox';
import {
 AccountButton, AccountButtons, AccountForgotPassword, LoginForm, 
} from '../AccountElements';

const LogInFormPhoto = ({
  onSubmit, errorMessage, fieldUser, typeFieldUser, form,
}) => {
  const errorMsg = useSelector(state => state.user.error);
  
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <LoginForm onSubmit={handleSubmit}>
          <Alert variant="danger" show={!!errorMessage || !!errorMsg}>
            {errorMessage}
            {errorMsg}
          </Alert>
          <FormGroup>
            <FormGroupLabel>{fieldUser}</FormGroupLabel>
            <FormGroupField>
              <FormGroupIcon>
                <AccountOutlineIcon />
              </FormGroupIcon>
              <Field
                name="username"
                component="input"
                type={typeFieldUser}
                placeholder={fieldUser}
                className="input-without-border-radius"
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
                className="input-without-border-radius"
                keyIcon
              />
              <AccountForgotPassword>
                <NavLink to="/reset_password_photo">Forgot a password?</NavLink>
              </AccountForgotPassword>
            </FormGroupField>
          </FormGroup>
          <FormGroup>
            <FormGroupField>
              <Field
                name="remember_me"
                component={renderCheckBoxField}
                label="Remember me"
                type="checkbox"
              />
            </FormGroupField>
          </FormGroup>
          <AccountButtons>
            {form === 'modal_login' ? (
              <AccountButton submit="true" variant="primary">Sign In</AccountButton>
            ) : (
              <AccountButton
                as={NavLink}
                variant="primary"
                to="/online_marketing_dashboard"
              >
                Sign In
              </AccountButton>
            )}
            <AccountButton
              as={NavLink}
              variant="outline-primary"
              to="/register_photo"
            >
              Create Account
            </AccountButton>
          </AccountButtons>
        </LoginForm>
      )}
    </Form>
  );
};

LogInFormPhoto.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  fieldUser: PropTypes.string,
  typeFieldUser: PropTypes.string,
  form: PropTypes.string.isRequired,
};

LogInFormPhoto.defaultProps = {
  errorMessage: '',
  fieldUser: 'Username',
  typeFieldUser: 'text',
};

export default LogInFormPhoto;
