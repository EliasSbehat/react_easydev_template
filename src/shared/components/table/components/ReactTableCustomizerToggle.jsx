import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { marginLeft } from '@/utils/directions';
import { ToggleButtonField } from '../../form/ToggleButton';

const ReactTableCustomizerToggle = ({
  text, isChecked, handleClick, isDisabled,
}) => (
  <CustomizerToggle
    name={`${text}_toggle`}
    checked={isChecked}
    value={isChecked}
    onChange={handleClick}
    disabled={isDisabled}
  >
    <Label>{text}</Label>
  </CustomizerToggle>
);

ReactTableCustomizerToggle.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool,
};

ReactTableCustomizerToggle.defaultProps = {
  isDisabled: false,
};

export default ReactTableCustomizerToggle;

// region STYLES

const CustomizerToggle = styled(ToggleButtonField)`
  margin-left: 0 !important;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
`;

const Label = styled.span`
  ${marginLeft}: 10px;
`;

// endregion
