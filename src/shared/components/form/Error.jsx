import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorDarkRed, colorVeryLightRed } from '@/utils/palette';
import { right } from '@/utils/directions';

const Error = ({ error, top }) => (<ErrorText top={top}>{error}</ErrorText>);

Error.propTypes = {
  error: PropTypes.string.isRequired,
  top: PropTypes.bool,
};

Error.defaultProps = {
  top: false,
};

export default Error;

// region STYLES

const ErrorText = styled.span`
  font-size: 10px;
  line-height: 13px;
  color: ${colorDarkRed};
  margin-bottom: -5px;
  display: block;
  margin-top: 10px;
  
  ${props => props.top && `
    position: absolute;
    margin: 0;
    ${right(props)}: 0;
    top: 0;
    padding: 5px 10px;
    background: ${colorVeryLightRed};
    border-radius: 3px;

    &:after {
      content: '';
      position: absolute;
      ${right(props)}: 10px;
      bottom: -8px;
      border: 4px solid transparent;
      border-top: 4px solid ${colorVeryLightRed};
    }
  `}
`;

// endregion
