import React from 'react';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Error from '@/shared/components/form/Error';

export const FormField = ({
    name,
    errors,
    control,
    component: Component,
    isAboveError,
    defaultValue,
    rules,
    ...other
  }) => (
    <FormInputWrap>
      <Controller
        name={name}
        render={({ field }) => <Component {...field} {...other} />}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
      />
      {errors?.[name] && <Error error={errors[name].message} top={isAboveError} />}
    </FormInputWrap>
);

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  errors: PropTypes.shape({}),
  control: PropTypes.shape({}).isRequired,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })]).isRequired,
  isAboveError: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.elementType]),
  rules: PropTypes.shape({}),
};

FormField.defaultProps = {
  errors: null,
  isAboveError: false,
  component: 'input',
  rules: {},
};

export default FormField;

// region STYLES

const FormInputWrap = styled.div`
  width: 100%;
`;

// endregion
