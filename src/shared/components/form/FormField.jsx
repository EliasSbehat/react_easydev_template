import React from 'react';
import PropTypes from 'prop-types';
import Error from '@/shared/components/form/Error';
import MaskedInput from 'react-text-mask';
import styled from 'styled-components';

const FormField = ({
  input, meta: { touched, error }, component: Component, isAboveError, wrapperClassName, ...props
}) => (
  <FormInputWrap className={wrapperClassName}>
    <Component {...props} {...input} />
    {touched && error && <Error error={error} top={isAboveError} />}
  </FormInputWrap>
);

FormField.propTypes = {
  input: PropTypes.shape(),
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  component: PropTypes.elementType,
  isAboveError: PropTypes.bool,
  wrapperClassName: PropTypes.string,
};

FormField.defaultProps = {
  input: null,
  meta: {
    touched: false,
    error: '',
  },
  component: 'input',
  isAboveError: false,
  wrapperClassName: '',
};

export const renderComponentField = component => props => (<FormField component={component} {...props} />);

export const renderMaskedField = renderComponentField(MaskedInput);

export default FormField;

// region STYLES

const FormInputWrap = styled.div`
  width: 100%;
`;

// endregion
