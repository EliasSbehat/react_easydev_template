import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  colorBackground,
  colorText,
} from '@/utils/palette';
import { marginRight, marginLeft } from '@/utils/directions';
import { SelectField } from '@/shared/components/form/Select';

const SelectOption = ({
  innerProps, isDisabled, data,
}) => (!isDisabled ? (
  <SelectOptionWrap {...innerProps}>
    {data.label}
    <SelectColor color={data.color} />
  </SelectOptionWrap>
) : null);

SelectOption.propTypes = {
  isDisabled: PropTypes.bool,
  innerProps: PropTypes.shape().isRequired,
  data: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
};

SelectOption.defaultProps = {
  isDisabled: false,
};

const ColorSelect = ({ options, placeholder }) => {
  const [value, setValue] = useState('');

  const handleChange = (selectedOption) => {
    setValue(selectedOption);
  };

  return (
    <SelectField
      name="color"
      value={value}
      onChange={handleChange}
      options={options}
      clearable={false}
      className="react-select"
      classNamePrefix="react-select"
      placeholder={placeholder}
      components={{ Option: SelectOption }}
    />
  );
};

ColorSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
    color: PropTypes.string,
  })),
  placeholder: PropTypes.string,
};

ColorSelect.defaultProps = {
  options: null,
  placeholder: 'Select...',
};

export default ColorSelect;

// region STYLES

const SelectColor = styled.span`
  display: block;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-top: auto;
  margin-bottom: auto;
  ${marginRight}: 0;
  ${marginLeft}: 5px;
  background-color: ${props => props.color};
`;

const SelectOptionWrap = styled.div`
  transition: all 0.3s;
  border-radius: 0;
  display: flex;
  cursor: pointer;
  padding: 8px 10px;
  background: ${colorBackground};
  color: ${colorText};
`;

// endregion
