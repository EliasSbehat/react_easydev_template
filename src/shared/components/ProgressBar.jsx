import React from 'react';
import { ProgressBar as BootstrapProgressBar } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  colorAccent, 
  colorBlue, 
  colorDustyWhite,
  colorGreen, 
  colorRed, 
  colorText,
  colorViolet,
  colorYellow,
} from '@/utils/palette';
import {
  paddingRight,
  right,
} from '@/utils/directions';

const ProgressBar = ({
  size, 
  color, 
  rounded,
  gradient,
  label,
  top,
  ...other
}) => {
  const renderLabel = () => {
    if (!label) return '';

    return (
      <ProgressBarLabel
        top={top}
        color={color}
        gradient={gradient}
      >
        {label}
      </ProgressBarLabel>
    );
  };

  return (
    <ProgressBarWrap
      size={size}
      color={color}
      rounded={rounded}
      gradient={gradient}
    >
      <BootstrapProgressBar label={renderLabel()} {...other} />
    </ProgressBarWrap>
  );
};

ProgressBar.propTypes = {
  size: PropTypes.string, // 'default', 'small', 'middle', 'big'
  color: PropTypes.string,
  gradient: PropTypes.string,
  rounded: PropTypes.bool,
  top: PropTypes.bool,
  label: PropTypes.string,
};

ProgressBar.defaultProps = {
  size: 'default',
  color: '',
  gradient: '',
  rounded: false,
  label: '',
  top: false,
};

export default ProgressBar;

// region STYLES

const getColor = (color) => {
  switch (color) {
    case 'yellow':
      return colorYellow;
    case 'violet': 
      return colorViolet;
    case 'pink': 
      return colorRed;
    case 'blue':
      return colorBlue;
    case 'green':
      return colorGreen;
    case 'lime':
      return colorGreen;
      
    default: 
      return colorAccent;
  }
};

const getSize = (size) => {
  switch (size) {
    case 'small':
      return '8px';
    case 'middle':
      return '12px';
    case 'big':
      return '16px';
      
    default: 
      return '4px';
  }
};

const getGradient = (gradient) => {
  switch (gradient) {
    case 'pink': 
      return '#ff7e9a, #ff4861';
    case 'lime':
      return '#d8efc1, #b8e986)';
    case 'blue':
      return '#7edbff, #48b5ff';
    case 'turquoise':
      return ' #a6efda, #4ce1b6';
    default: 
      return '';
  }
};


const ProgressBarLabel = styled.p`
  ${props => props.top && `
    position: absolute;
    ${right(props)}: 0;
    color: ${getColor(props.gradient || props.color)};
    font-size: 10px;
    bottom: 16px;
    margin: 0;
  `}
`;

const ProgressBarWrap = styled.div`
  margin-bottom: 20px;
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }

  .progress {
    height: fit-content;
    border-radius: 10px;
    box-shadow: none;
    background-color: ${colorDustyWhite};
    margin-bottom: 0;
  }

  .progress-bar {
    background-color: ${props => (props.gradient ? 'unset' : getColor(props.color))};
    ${props => props.gradient && `background-image: linear-gradient(to left, ${getGradient(props.gradient)});`};
    color: ${colorText};
    box-shadow: none;
    height: ${props => getSize(props.size)};
    text-align: ${right};
    ${paddingRight}: 10px;
    font-size: 9px;
    line-height: 13px;
    border-radius: ${props => (props.rounded ? '5px' : 0)};
  }
`;

// endregion
