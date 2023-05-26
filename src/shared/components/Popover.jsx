import {
  OverlayTrigger,
  Popover as BootstrapPopover,
} from 'react-bootstrap';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorBackground, colorText } from '@/utils/palette';
import { paddingLeft, paddingRight } from '@/utils/directions';


const Popover = ({
 dir, header, body, children, ...other
}) => {
  const popover = (
    <StyledPopover dir={dir}>
      <PopoverHeader>{header}</PopoverHeader>
      <PopoverBody>{body}</PopoverBody>
    </StyledPopover>
  );
  
  return (
    <OverlayTrigger overlay={popover} {...other}>
      {children}
    </OverlayTrigger>
  );
};

Popover.propTypes = {
  dir: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Popover;

// region STYLES

const StyledPopover = styled(BootstrapPopover)`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.07);
  border: solid 1px #e8ebef;
  border-radius: 4px;
  width: 220px;
  z-index: 99;
  background-color: ${colorBackground};
`;

const PopoverHeader = styled(BootstrapPopover.Header)`
  border: none;
  font-weight: 700;
  font-size: 11px;
  padding: 5px 10px;
  line-height: normal;
  background-color: ${colorBackground};
  color: ${colorText};
`;

const PopoverBody = styled(BootstrapPopover.Body)`
  font-size: 10px;
  ${paddingRight}: 15px;
  ${paddingLeft}: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${colorText};
`;

// endregion
