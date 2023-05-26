import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colorHover, colorText, colorAccent } from '@/utils/palette';
import { left } from '@/utils/directions';
import { TopbarLinkIcon, TopbarLinkTitle } from './BasicTopbarComponents';

const TopbarMenuLink = ({
  title, icon, path, onClick, iconRight,
}) => (
  <TopbarLink to={path} onClick={onClick} iconRight={iconRight}>
    {iconRight
      ? (
        <>
          <TopbarLinkTitle>{title}</TopbarLinkTitle>
          <TopbarLinkIcon className={`lnr lnr-${icon}`} />
        </>
      )
      : (
        <>
          {icon && <TopbarLinkIcon className={`lnr lnr-${icon}`} />}
          <TopbarLinkTitle>{title}</TopbarLinkTitle>
        </>
)}
  </TopbarLink>
);

TopbarMenuLink.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  path: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  iconRight: PropTypes.bool,
};
TopbarMenuLink.defaultProps = {
  iconRight: false,
  icon: '',
  path: '',
};

export default TopbarMenuLink;

// region STYLES

export const TopbarLink = styled(Link).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['iconRight'].includes(prop) && defaultValidatorFn(prop),
})`
  display: flex;
  justify-content: ${props => (props.iconRight ? 'space-between' : 'left') };
  padding: 9px 0px 9px 20px;
  transition: all 0.3s;
  height: 32px;
  width: 100%;
  position: relative;
  cursor: pointer;
  color: ${colorText};

  &:before {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 2px;
    background: ${colorAccent};
    opacity: 0;
    transition: all 0.3s;
    ${left}: 0;
  }

  &:hover {
    background-color: ${colorHover};

    &:before {
      opacity: 1;
    }
  }
`;

// endregion
