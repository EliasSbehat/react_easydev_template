import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import AlternateEmailIcon from 'mdi-react/AlternateEmailIcon';
import {
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupIcon,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { AccountButton } from '../AccountElements';

const ResetPasswordForm = ({
  onSubmit, fieldUser,
}) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit }) => (
      <FormContainer onSubmit={handleSubmit}>
        <FormGroup>
          <div>
            <FormGroupLabel>{fieldUser}</FormGroupLabel>
          </div>
          <FormGroupField>
            <FormGroupIcon>
              <AlternateEmailIcon />
            </FormGroupIcon>
            <Field
              name="email"
              id="email"
              component="input"
              type="email"
              placeholder="example@mail.com"
              className="input-without-border-radius"
            />
          </FormGroupField>
        </FormGroup>
        <AccountButton variant="primary">
          Reset Password
        </AccountButton>
      </FormContainer>
    )}
  </Form>
);

ResetPasswordForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  fieldUser: PropTypes.shape(),
};

ResetPasswordForm.defaultProps = {
  fieldUser: null,
};

export default ResetPasswordForm;
