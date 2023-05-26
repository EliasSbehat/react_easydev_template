import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorBackground } from '@/utils/palette';


const Loading = ({ loading }) => (
  <Load loading={loading} className={loading ? '' : 'loaded'}>
    <LoadIconWrap>
      <LoadIcon>
        <path fill="#4ce1b6" d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
      </LoadIcon>
    </LoadIconWrap>
  </Load>
);

Loading.propTypes = {
  loading: PropTypes.bool,
};

Loading.defaultProps = {
  loading: false,
};

export default Loading;

// region STYLES

const Load = styled('div').withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['loading'].includes(prop) && defaultValidatorFn(prop),
})`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  position: fixed;
  background: ${colorBackground};
  z-index: 1000;
  ${props => !props.loading && 'animation: ease loaded 0.5s'};

  & + div {
    height: 100vh;
    overflow: hidden;
  }

  @keyframes loaded {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const LoadIconWrap = styled.div`
  margin: auto;
`;

const LoadIcon = styled.svg`
  animation: linear load 2s infinite;
  margin: auto;
  width: 32px;
  height: 32px;

  @keyframes load {
    from {
      transform: rotate(0deg) scale(2);
    }
    to {
      transform: rotate(360deg) scale(2);
    }
  }
`;

//
