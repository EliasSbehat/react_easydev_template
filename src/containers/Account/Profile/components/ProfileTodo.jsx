import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
 colorAccent, colorBorder, colorRed, colorText, colorWhite, 
} from '@/utils/palette';
import {
 paddingLeft, paddingRight, marginRight, marginLeft, left, 
} from '@/utils/directions';
import { CheckBoxField } from '@/shared/components/form/CheckBox';

const ProfileToDo = ({
  id, label, onChange, checked, disabled,
}) => (
  <ProfileTask disabled={disabled}>
    <CheckBoxField
      checked={checked}
      name={id}
      onChange={onChange}
      label={label}
      disabled={disabled}
    />
  </ProfileTask>
);

ProfileToDo.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

ProfileToDo.defaultProps = {
  label: '',
  onChange: () => {},
  checked: false,
  disabled: false,
};

export default ProfileToDo;

// region STYLES

const ProfileTask = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 0 20px;
  padding: 10px 0 10px 0;
  ${paddingRight}: 0;
  ${paddingLeft}: 0;
  text-align: ${left};
  border-bottom: 1px solid ${colorBorder};
  color: ${colorText};

  &:last-of-type {
    border-bottom: none;
  }

  ${props => props.disabled && `
    cursor: default;
    label {
      opacity: 0.7;
    }
  `}

  label {
    margin-right: 35px;
    margin-bottom: 0;
  }

  .badge {
    text-transform: uppercase;
    font-size: 9px;
    padding: 6px 10px;
    display: inline-table;
    height: 20px;
    color: ${colorWhite};
    ${marginLeft}: auto;
    ${marginRight}: 5px;

    &.badge-info {
      background-color: ${colorAccent};
    }

    &.badge-error {
      background-color: ${colorRed};
    }
  }
`;

// endregion
