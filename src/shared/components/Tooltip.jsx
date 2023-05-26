import {
  OverlayTrigger,
  Tooltip as BootstrapTooltip,
} from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorGray } from '@/utils/palette';

const Tooltip = ({
 dir, text, children, ...other
}) => {
  const tooltip = <StyledTooltip dir={dir}>{text}</StyledTooltip>;

  return (
    <OverlayTrigger overlay={tooltip} {...other}>
      {children}
    </OverlayTrigger>
  );
};

Tooltip.propTypes = {
  dir: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tooltip;

// region STYLES

const StyledTooltip = styled(BootstrapTooltip)`
  z-index: 99;

  .tooltip-inner {
    background-color: ${colorGray};
    font-size: 12px;
    line-height: 14px;
    padding: 5px 15px;
  }

  &.bs-tooltip-end .tooltip-arrow::before,
  &.bs-tooltip-auto[x-placement^="end"] .tooltip-arrow::before {
    border-right-color: ${colorGray};
  }

  &.bs-tooltip-top .tooltip-arrow::before,
  &.bs-tooltip-auto[x-placement^="top"] .tooltip-arrow::before {
    border-top-color: ${colorGray};
  }

  &.bs-tooltip-bottom .tooltip-arrow::before,
  &.bs-tooltip-auto[x-placement^="bottom"] .tooltip-arrow::before {
    border-bottom-color: ${colorGray};
  }

  &.bs-tooltip-start .tooltip-arrow::before,
  &.bs-tooltip-auto[x-placement^="start"] .tooltip-arrow::before {
    border-left-color: ${colorGray};
  }
`;


// endregion
