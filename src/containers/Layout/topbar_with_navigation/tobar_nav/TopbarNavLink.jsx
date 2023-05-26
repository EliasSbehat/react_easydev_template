import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import styled from 'styled-components';
import { colorRed, colorAccent } from '@/utils/palette';
import { marginLeft, left } from '@/utils/directions';
import { TopbarLinkTitle, TopbarLinkIcon } from '../../components/topbar/BasicTopbarComponents';


const TopbarNavLink = ({
  title, icon, newLink, route,
}) => (
  <TopbarLink to={route}>
    {icon ? <TopbarLinkIcon className={`lnr lnr-${icon}`} /> : ''}
    <TopbarLinkTitle>
      {title}
      {newLink ? <TopbarLinkBadge><span>New</span></TopbarLinkBadge> : ''}
    </TopbarLinkTitle>
  </TopbarLink>
);

TopbarNavLink.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  newLink: PropTypes.bool,
  route: PropTypes.string.isRequired,
};

TopbarNavLink.defaultProps = {
  icon: '',
  newLink: false,
};

export default TopbarNavLink;

// region STYLES

const TopbarLink = styled(NavLink)`
  display: flex;
  padding: 8px 48px 8px 20px;
  transition: all .3s;
  height: 32px;
  width: 100%;
  position: relative;
  cursor: pointer;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 2px;
    background: ${colorAccent};
    opacity: 0;
    transition: all .3s;
    left: 0;
  }
  
  &.active,
  &:hover {
    
    &:before {
      opacity: 1;
    }
  }
`;

const TopbarLinkBadge = styled(Badge)`
  position: relative;
  width: 26px;
  height: 14px;
  background-color: ${colorRed} !important;
  font-size: 8px;
  font-weight: 400;
  padding: 2px;
  line-height: 9px;
  text-transform: uppercase;
  border-radius: 7px;
  ${marginLeft}: 5px;

  span {
    position: absolute;
    top: 3px;
    width: 26px;
    text-align: center;
    ${left}: 0;
  }
`;

// endregion
