import React, { useState } from 'react';
import { Collapse as BootstrapCollapse } from 'react-bootstrap';
import PropTypes from 'prop-types';
import MinusIcon from 'mdi-react/MinusIcon';
import PlusIcon from 'mdi-react/PlusIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import styled from 'styled-components';
import {
  colorAdditional,
  colorBackgroundBody,
  colorDustyWhite,
  colorGray,
  colorHover,
  colorText,
} from '@/utils/palette';
import {
  right,
  left,
  paddingRight,
  paddingLeft,
} from '@/utils/directions';

const Collapse = ({ className, title, children }) => {
  const [collapse, setCollapse] = useState(false);
  const [view, setView] = useState({ styleClass: 'closed', icon: <PlusIcon /> });

  const onEntering = () => {
    setView({ styleClass: 'opening', icon: <MinusIcon /> });
  };

  const onEntered = () => {
    setView({ styleClass: 'opened', icon: <MinusIcon /> });
  };

  const onExiting = () => {
    setView({ styleClass: 'closing', icon: <PlusIcon /> });
  };

  const onExited = () => {
    setView({ styleClass: 'closed', icon: <PlusIcon /> });
  };

  const toggle = () => {
    setCollapse(prevState => !prevState);
  };

  return (
    <CollapseWrapper className={`${view.styleClass} ${className}`} dir="ltr">
      <CollapseToggle onClick={toggle} type="button">
        {view.icon}
        <span>{title}<ChevronDownIcon /></span>
      </CollapseToggle>
      <BootstrapCollapse
        in={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        <CollapseContent>
          {children}
        </CollapseContent>
      </BootstrapCollapse>
    </CollapseWrapper>
  );
};

Collapse.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Collapse.defaultProps = {
  title: '',
  className: '',
};

export default Collapse;

// region STYLES

const CollapseToggle = styled.button`
  ${paddingLeft}: 20px;
  ${paddingRight}: 15px;
  padding-bottom: 10px;
  padding-top: 6px;
  cursor: pointer;
  position: relative;
  background: transparent;
  display: block;
  width: 100%;
  border: none;
  text-align: ${left};
  color: ${colorText};

  span {
    font-weight: 700;
    margin-top: 0;
    transition: all 0.3s;
    position: relative;
    display: flex;

    svg {
      ${right}: -10px;
      ${left}: auto;
      display: none;
    }
  }

  svg {
    position: absolute;
    ${left}: 0;
    width: 14px;
    height: 14px;
    top: 8px;
    transition: all 0.3s;
    fill: ${colorText};
  }
`;

const CollapseContent = styled.div`
  ${paddingLeft}: 20px;
  ${paddingRight}: 15px;
  padding-bottom: 14px;
`;

const CollapseWrapper = styled.div`
  text-align: ${left};
  
  &.opened, &.opening {

    ${CollapseToggle} {

      span {
        color: ${colorAdditional};
      }

      svg {
        fill: ${colorAdditional};
      }
    }
  }

  &.boxed {
    border: solid 1px ${colorDustyWhite};
    margin-top: -1px;

    ${CollapseToggle} {
      background-color: ${colorBackgroundBody};
      border-bottom: solid 1px ${colorDustyWhite};
      padding: 8px 15px;

      span {
        color: ${colorGray};
      }

      svg {
        display: none;
      }
    }

    ${CollapseContent} {
      ${paddingRight}: 20px;
      ${paddingLeft}: 15px;
      padding-top: 16px;
      padding-bottom: 20px;
    }

    &.closed {

      ${CollapseToggle} {
        border-bottom: none;
      }
    }
  }

  &.with-shadow {
    margin-bottom: 10px;
    box-shadow: none;

    ${CollapseContent} {
      ${paddingRight}: 20px;
      ${paddingLeft}: 25px;
      padding-top: 15px;
      padding-bottom: 0;
      color: ${colorText};
    }

    ${CollapseToggle} {
      padding-top: 15px;
      padding-bottom: 15px;
      ${paddingLeft}: 20px;
      ${paddingRight}: 25px;
      box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.05);
      transition: background-color 0.3s;
      color: ${colorText};

      &:hover {
        background-color: ${colorHover};
      }

      svg {
        display: none;
      }

      span {

        svg {
          display: block;
          top: calc(50% - 7px);
          transition: all 0.3s;
          fill: ${colorText};
        }
      }
    }

    &.opened ${CollapseToggle},
    &.opening ${CollapseToggle} {

      span {
        color: inherit;
      }

      svg {
        transform: rotate(180deg);
      }
    }
  }

  &.closing {

    ${CollapseContent} {
      padding-top: 0;
      padding-bottom: 0;
      transition: all 0.3s;
    }
  }
`;

// endregion
