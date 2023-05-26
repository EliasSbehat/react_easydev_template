import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import CheckIcon from 'mdi-react/CheckIcon';
import CloseIcon from 'mdi-react/CloseIcon';
import { renderComponentField } from '@/shared/components/form/FormField';
import {
 colorAccent, colorAccentHover, colorIcon, colorText, colorWhite, 
} from '@/utils/palette';
import {
 left, paddingLeft, marginLeft, marginRight, paddingRight, 
} from '@/utils/directions';

const RadioButton = ({
  onChange,
  radioValue,
  styleType,
  disabled,
  label,
  name,
  value,
}) => {
  const handleChange = () => {
    onChange(radioValue);
  };
  
  return (
    <RadioButtonWrap
      disabled={disabled}
      styleType={styleType}
    >
      <RadioButtonInput
        name={name}
        type="radio"
        onChange={handleChange}
        checked={value === radioValue}
        disabled={disabled}
      />
      <RadioButtonCustom />
      {styleType === 'button' ? (
        <RadioButtonSvgWrap>
          <CheckIcon />
          <CloseIcon />
        </RadioButtonSvgWrap>
      ) : ''}
      <RadioButtonLabel>{label}</RadioButtonLabel>
    </RadioButtonWrap>
  );
};

RadioButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  disabled: PropTypes.bool,
  radioValue: PropTypes.string,
  styleType: PropTypes.string,
};

RadioButton.defaultProps = {
  label: '',
  disabled: false,
  radioValue: '',
  styleType: '', // 'colored' | 'button' | 'colored-click'
};

export default renderComponentField(RadioButton);

// region STYLES

const RadioButtonCustom = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: relative;
  transition: all 0.3s;
  border: 1px solid ${colorIcon};
  display: inline-block;
  vertical-align: middle;
`;

const RadioButtonInput = styled.input`
  display: none;

  &:checked + ${RadioButtonCustom} {
    border-color: ${colorAccent};

    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 6px;
      height: 6px;
      top: calc(50% - 3px);
      background: ${colorAccent};
      border-radius: 50%;
      ${left}: calc(50% - 3px);
    }
  }
`;

const RadioButtonLabel = styled.span`
  line-height: 18px;
  transition: all 0.3s;
  margin-top: 5px;
  display: inline-block;
  vertical-align: middle;
  ${paddingLeft}: 9px;
  color: ${colorText};
`;

const RadioButtonSvgWrap = styled.span`
  
`;

const RadioButtonWrap = styled.label`
  display: inline-block;
  cursor: pointer;
  flex-direction: inherit;
  padding: 0;
  ${paddingRight}: 20px;
  
  ${props => props.disabled && `
    pointer-events: none;
    cursor: default;
    opacity: 0.4;
  `}
  
  &:hover {

    ${RadioButtonCustom} {
      border-color: ${colorAccent};
    }

    ${RadioButtonLabel} {
      color: ${colorAccent};
    }
  }
  
  ${props => props.styleType === 'colored' && `
    flex-direction: inherit;
    padding: 0;

    ${RadioButtonCustom} {
      border: 2px solid ${colorAccent};
    }
  `}

  ${props => props.styleType === 'colored-click' && `
    flex-direction: inherit;
    padding: 0;

    ${RadioButtonInput}:checked + ${RadioButtonCustom} {
      background: ${colorAccent};

      &::before {
        background: ${colorWhite};
      }
    }

    ${props.disabled && `

      ${RadioButtonInput}:checked + ${RadioButtonCustom} {
        background: transparent;

        &::before {
          background: ${colorAccent};
        }
      }
    `}
  `}

  ${props => props.styleType === 'button' && `
    background: ${colorAccent};
    min-width: 150px;
    color: ${colorWhite};
    height: 24px;
    border-radius: 4px;
    transition: all 0.3s;
    display: flex;
    flex-direction: inherit;
    padding: 0 10px;
    width: 100%;
    justify-content: center;
    align-items: center;

    ${RadioButtonCustom} {
      display: none;
    }

    ${RadioButtonSvgWrap} {
      height: 16px;
      line-height: 1;
      ${marginRight(props)}: 4px;

      svg {
        fill: ${colorWhite};
        width: 14px;
        height: 14px;
      }

      svg:first-of-type {
        display: none;
      }
    }

    ${RadioButtonInput}:checked ~ ${RadioButtonSvgWrap} {

      svg:first-of-type {
        display: block;
      }

      svg:last-of-type {
        display: none;
      }
    }

    ${RadioButtonLabel} {
      margin-top: auto;
      margin-bottom: auto;
      padding: 0;
      color: ${colorWhite};
      ${marginLeft(props)}: 0;
    }

    &:hover {
      background: ${colorAccentHover};

      ${RadioButtonLabel} {
        color: ${colorWhite};
      }
    }
  `};

  @media screen and (max-width: 370px) {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 575px) {
    display: inline-block;
  }

  @media screen and (max-width: 515px) {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    display: inline-block;
  }

  @media screen and (max-width: 356px) {
    display: flex;
    align-items: center;
  }
`;

// endregion
