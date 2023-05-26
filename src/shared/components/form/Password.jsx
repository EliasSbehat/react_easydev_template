import React, { useState } from 'react';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormFieldButton } from '@/shared/components/form/FormElements';
import { colorAdditional, colorFieldsBorder } from '@/utils/palette';
import FormField from './FormField';

const PasswordField = React.forwardRef(({
  input,
  keyIcon,
  ...props
}, ref) => {
  const [passwordShown, setPasswordShown] = useState(false);
  return (
    <>
      {keyIcon && (
        <PasswordIcon>
          <KeyVariantIcon />
        </PasswordIcon>
      )}
      <FormField
        {...props}
        {...input}
        type={passwordShown ? 'text' : 'password'}
        ref={ref}
      />
      <FormFieldButton
        active={passwordShown}
        type="button"
        onClick={() => setPasswordShown(shown => !shown)}
      >
        <EyeIcon />
      </FormFieldButton>
    </>
  );
});

PasswordField.propTypes = {
  input: PropTypes.shape().isRequired,
  keyIcon: PropTypes.bool,
};

PasswordField.defaultProps = {
  keyIcon: false,
};

export default PasswordField;

// region STYLES

export const PasswordIcon = styled.div`
  padding: 6px;
  height: 32px;
  background: ${colorFieldsBorder};
  border: 1px solid ${colorFieldsBorder};

  svg {
    fill: ${colorAdditional};
    width: 18px;
    height: 18px;
    transition: all 0.3s;
  }
`;

// endregion
