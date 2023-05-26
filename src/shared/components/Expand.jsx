import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SimpleLoader from '@/shared/components/SimpleLoader';
import { Button } from '@/shared/components/Button';

const Expand = ({ title, ...other }) => {
  const [load, setLoad] = useState(false);

  const onLoad = () => {
    setLoad(true);
  };
  const request = () => {
    // your async logic here
    setTimeout(() => setLoad(false), 5000);
  };
  useEffect(() => {
    if (load) {
      request();
    }
  }, [load]);

  return (
    <ExpandButton
      onClick={onLoad}
      load={load}
      {...other}
    >
      <SimpleLoader widthOrHeight={load ? 14 : 0} /><span>{title}</span>
    </ExpandButton>
  );
};

Expand.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
};

Expand.defaultProps = {
  title: '',
  variant: 'secondary',
};

export default Expand;

// region STYLES

const ExpandButton = styled(Button).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['load'].includes(prop) && defaultValidatorFn(prop),
})`
  svg {
    transition: all 0.3s;
    animation: rotating 2s linear infinite;
  }

  span {
    transition: all 0.3s;

    ${props => props.load && `
      margin-left: 10px;
    `}
  }
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

`;

// endregion
