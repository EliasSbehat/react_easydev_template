import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert as AlertBootstrap } from 'react-bootstrap';
import styled from 'styled-components';
import InformationOutlineIcon from 'mdi-react/InformationOutlineIcon';
import ThumbUpOutlineIcon from 'mdi-react/ThumbUpOutlineIcon';
import CommentAlertOutlineIcon from 'mdi-react/CommentAlertOutlineIcon';
import CloseCircleOutlineIcon from 'mdi-react/CloseCircleOutlineIcon';
import { Button } from '@/shared/components/Button';
import {
  colorFieldsBorder,
  colorAdditional,
  colorBlue,
  colorAccent,
  colorYellow,
  colorRed,
  colorWhite,
  colorLightBlue,
  colorLightAccent,
  colorLightYellow,
  colorLightRed,
  colorText,
} from '@/utils/palette';
import {
  right,
  left,
  paddingRight,
  paddingLeft,
  borderRight,
} from '@/utils/directions';

const Alert = ({
  color, icon, children, bordered, colored, neutral, closable,
}) => {
  const [visible, setVisible] = useState(true);

  const onShow = () => {
    setVisible(true);
  };

  const onDismiss = () => {
    setVisible(false);
  };

  let Icon;

  switch (color) {
    case 'info':
      Icon = <InformationOutlineIcon />;
      break;
    case 'success':
      Icon = <ThumbUpOutlineIcon />;
      break;
    case 'warning':
      Icon = <CommentAlertOutlineIcon />;
      break;
    case 'danger':
      Icon = <CloseCircleOutlineIcon />;
      break;
    default:
      Icon = <InformationOutlineIcon />;
      break;
  }

  if (visible) {
    return (
      <StyledAlert
        variant={color}
        bordered={bordered}
        colored={colored}
        neutral={neutral}
      >
        {icon && <AlertIcon>{Icon}</AlertIcon>}
        {closable
          && (
          <AlertCloseButton type="button" onClick={onDismiss}>
            <span className="lnr lnr-cross" />
          </AlertCloseButton>
        )}
        <AlertContent>{children}</AlertContent>
      </StyledAlert>
    );
  }

  return <Button variant="secondary" onClick={onShow}>Show Alert</Button>;
};

Alert.propTypes = {
  color: PropTypes.string, // 'info', 'success', 'warning', 'danger'
  icon: PropTypes.bool,
  bordered: PropTypes.bool,
  colored: PropTypes.bool,
  neutral: PropTypes.bool,
  closable: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Alert.defaultProps = {
  color: 'info',
  icon: false,
  bordered: false,
  colored: false,
  neutral: false,
  closable: false,
};

export default Alert;

// region STYLES

const AlertCloseButton = styled.button`
  color: ${colorWhite};
  opacity: 1;
  font-weight: 100;
  ${right}: 20px;
  font-size: 14px;
  line-height: 14px;
  position: absolute;
  top: calc(50% - 7px);
  text-shadow: none;
  background-color: transparent;
  border: 0;
  padding: 0;

  &:focus, &:active, &:active:focus {
    outline: none;
  }
`;

const AlertIcon = styled.div`
  padding: 18px;
  display: flex;

  svg {
    fill: ${colorWhite};
    margin: auto 0;
  }
`;

const AlertContent = styled.div`
  text-align: ${left};
  ${paddingRight}: 40px;
  ${paddingLeft}: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const getMainColor = (color) => {
  switch (color) {
    case 'info': 
      return colorBlue;
    case 'success': 
      return colorAccent;
    case 'warning': 
      return colorYellow;
    case 'danger': 
      return colorRed;
    default:
      return colorBlue;
  }
};

const getLightColor = (color) => {
  switch (color) {
    case 'info': 
      return colorLightBlue;
    case 'success': 
      return colorLightAccent;
    case 'warning': 
      return colorLightYellow;
    case 'danger': 
      return colorLightRed;
    default:
      return colorLightBlue;
  }
};

const StyledAlert = styled(AlertBootstrap).withConfig({
  shouldForwardProp: prop => !['bordered', 'neutral', 'colored'].includes(prop),
})`
  border-radius: 0;
  position: relative;
  margin-bottom: 10px;
  padding: 0;
  display: flex;
  background-color: ${props => (props.bordered || props.neutral
    ? 'transparent' : getMainColor(props.variant))};
  border-color: ${props => (props.neutral
    ? colorFieldsBorder : getMainColor(props.variant))};

  &.fade {
    opacity: 1;
  }

  &:last-child {
    margin-bottom: 0;
  }

  p {
    color: ${props => (props.bordered || props.neutral ? colorText : colorWhite)};
    margin-top: 0;
  }

  ${props => props.colored && `
    ${AlertIcon} {
      background-color: ${getLightColor(props.variant)};
    }
  `}
  
  ${props => props.bordered && `
    ${AlertCloseButton} {
      color: ${colorAdditional};
    }

    ${AlertIcon} {
      background-color: ${getMainColor(props.variant)};
    }
  `}

  ${props => props.neutral && `
    ${AlertCloseButton} {
      color: ${colorAdditional};
    }

    svg {
      fill: ${getMainColor(props.variant)};
    }

    ${AlertIcon} {
      ${borderRight}: 1px solid #f2f4f7;
    }
  `}
`;

// endregion
