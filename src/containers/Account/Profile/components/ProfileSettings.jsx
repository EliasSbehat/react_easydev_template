import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form';
import { FormButtonToolbar } from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import {
  MaterialFormContainer,
  MaterialTextField,
  MaterialFormLabel,
} from '@/shared/components/form/MaterialFormElements';

const renderTextField = ({
  input, label, meta: { touched, error },
}) => (
  <MaterialTextField
    label={label}
    error={touched && error}
    value={input.value}
    onChange={(e) => {
      e.preventDefault();
      input.onChange(e.target.value);
    }}
  />
);

renderTextField.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

renderTextField.defaultProps = {
  meta: null,
  label: '',
};

const ProfileSettings = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, form }) => (
      <MaterialFormContainer onSubmit={handleSubmit}>
        <div>
          <MaterialFormLabel>Full Name</MaterialFormLabel>
          <Field
            name="username"
            component={renderTextField}
            placeholder="Name"
          />
        </div>
        <div>
          <MaterialFormLabel>Email</MaterialFormLabel>
          <Field
            name="email"
            component={renderTextField}
            placeholder="example@mail.com"
            type="email"
          />
        </div>
        <div>
          <MaterialFormLabel>URL</MaterialFormLabel>
          <Field
            name="url"
            component={renderTextField}
            placeholder="https://themeforest.net"
            type="url"
          />
        </div>
        <div>
          <MaterialFormLabel>Password</MaterialFormLabel>
          <Field
            name="password"
            component={renderTextField}
            type="password"
          />
        </div>
        <div>
          <MaterialFormLabel>Text Area</MaterialFormLabel>
          <Field
            name="textarea"
            component={renderTextField}
            placeholder="Type message here"
            multiline
            rowsMax="4"
          />
        </div>
        <FormButtonToolbar>
          <Button variant="primary" type="submit">Update profile</Button>
          <Button variant="secondary" type="button" onClick={form.reset}>
            Cancel
          </Button>
        </FormButtonToolbar>
      </MaterialFormContainer>
    )}
  </Form>
);

ProfileSettings.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ProfileSettings;
