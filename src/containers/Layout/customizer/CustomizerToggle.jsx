import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorText } from '@/utils/palette';
import { marginRight, marginLeft } from '@/utils/directions';
import { ToggleButtonField } from '@/shared/components/form/ToggleButton';

const CustomizerToggle = ({
 onChange, checked, name, id, title,
}) => (
  <Toggle
    name={name}
    id={id}
    value={checked}
    onChange={onChange}
  >
    <span>{title}</span>
  </Toggle>
);

CustomizerToggle.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default CustomizerToggle;

// region STYLES

const Toggle = styled(ToggleButtonField)`
  width: 100%;
  
  span {
    ${marginLeft}: 10px;
    ${marginRight}: 0 !important;
    color: ${colorText};
  }
`;

// endregion
