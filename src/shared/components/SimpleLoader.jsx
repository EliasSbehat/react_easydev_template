import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colorAccent } from '@/utils/palette';
import LoadingIcon from 'mdi-react/LoadingIcon';

const SimpleLoader = ({
  widthOrHeight,
}) => (
  <SimpleLoaderWrap>
    <LoadingIcon style={{ width: widthOrHeight, height: widthOrHeight }} />
  </SimpleLoaderWrap>
);

SimpleLoader.propTypes = {
  widthOrHeight: PropTypes.number,
};

SimpleLoader.defaultProps = {
  widthOrHeight: 48,
};

export default SimpleLoader;

// region STYLES

const SimpleLoaderWrap = styled.div`
  svg {
    fill: ${colorAccent};
    animation: refresh 1s infinite linear;
    z-index: 10;
    width: 48px;
    height: 48px;
  }

  @keyframes refresh {

    from {
      transform: rotate(0deg);
    }
    
    to {
      transform: rotate(360deg);
    }
  }
`;

// endregion
