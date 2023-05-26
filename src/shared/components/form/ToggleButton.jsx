import React from 'react';
import PropTypes from 'prop-types';
import { renderComponentField } from '@/shared/components/form/FormField';
import styled from 'styled-components';
import {
 colorAccent, colorBorder, colorText, colorWhite, 
} from '@/utils/palette';
import { left } from '@/utils/directions';

export const ToggleButtonField = React.forwardRef(({
  onChange, name, disabled, value, className, children,
}, ref) => (
  <ToggleWrap className={className}>
    <input
      type="checkbox"
      name={name}
      onChange={onChange}
      checked={value}
      disabled={disabled}
      ref={ref}
    />
    <ToggleLabel
      type="button"
      onClick={() => onChange(!value)}
    >
      Toggle
    </ToggleLabel>
    {children}
  </ToggleWrap>
));

ToggleButtonField.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  children: PropTypes.node,
};

ToggleButtonField.defaultProps = {
  disabled: false,
  className: '',
  children: null,
};

export default renderComponentField(ToggleButtonField);

// region STYLES

const ToggleLabel = styled.button`
  cursor: pointer;
  text-indent: -9999px;
  width: 40px;
  height: 20px;
  display: block;
  border-radius: 23px;
  position: relative;
  margin-bottom: 0;
  border: none;
  background-color: ${colorBorder};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    ${left}: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: 0.3s;
    box-shadow: 0 5px 10px rgba(153, 153, 153, 0.4);
    background-color: ${colorWhite};
  }
`;

const ToggleWrap = styled.div`
  justify-content: flex-start;
  display: inline-flex;
  width: 100%;
  padding: 4px 0;
  margin-bottom: 0;
  cursor: pointer;
  color: ${colorText};

  input {
    height: 0;
    width: 0;
    visibility: hidden;
    
    &:checked ~ ${ToggleLabel} {

      &:after {
        background: ${colorAccent};
        // doesn't do RTL, it break toggles
        left: 100%;
        transform: translateX(-100%);
      }
    }
  }
`;

// endregion
