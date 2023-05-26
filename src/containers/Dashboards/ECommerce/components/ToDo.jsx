import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CheckBoxField } from '@/shared/components/form/CheckBox';
import { colorText } from '@/utils/palette';

const ToDo = ({
  id, label, onChange, checked, disabled,
}) => (
  <TodoWrap>
    <CheckBoxField
      checked={checked}
      name={`${id}`}
      onChange={onChange}
      label={label}
      disabled={disabled}
    />
  </TodoWrap>
);

ToDo.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};

ToDo.defaultProps = {
  label: '',
  onChange: () => {},
  checked: false,
  disabled: false,
};

export default ToDo;

// region STYLES

const TodoWrap = styled.div`
  margin-bottom: 15px;
  
  input:checked ~ span {
    text-decoration: line-through;
    opacity: 0.7;
  }
  
  label[disabled] {
    opacity: 0.7;
    
    span {
      color: ${colorText};
    }
  }
`;

// endregion
