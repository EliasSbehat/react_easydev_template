import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
 colorBackground, colorHover, colorIcon, colorRed, 
} from '@/utils/palette';
import {
  marginLeft, right,
} from '@/utils/directions';
import { TopbarLink } from '../../components/topbar/TopbarMenuLink';
import { TopbarLinkIcon, TopbarLinkTitle } from '../../components/topbar/BasicTopbarComponents';

const TopbarNavCategory = ({
  title, icon, isNew, children,
}) => (
  <TopbarCategoryWrap>
    <TopbarLink as="div">
      {icon ? <TopbarLinkIcon className={`lnr lnr-${icon}`} /> : ''}
      <TopbarLinkTitle>
        {title}
        {isNew && <TopbarCategoryNew />}
        <TopbarCategoryIcon className="lnr lnr-chevron-right" />
      </TopbarLinkTitle>
    </TopbarLink>
    <TopbarSubmenu>
      {children}
    </TopbarSubmenu>
  </TopbarCategoryWrap>
);

TopbarNavCategory.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  isNew: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

TopbarNavCategory.defaultProps = {
  isNew: false,
  icon: '',
};

export default TopbarNavCategory;

// region STYLES

const TopbarSubmenu = styled.div`
  position: absolute;
  top: 0;
  transform: translateX(100%);
  transition: 0.3s;
  opacity: 0;
  width: 0;
  height: 0;
  right: 0;
  background-color: ${colorHover};

  ${TopbarLink}:hover {
    background-color: ${colorBackground};
  }
`;

const TopbarCategoryWrap = styled.div`
  position: relative;

  &:hover {

    & > ${TopbarSubmenu} {
      opacity: 1;
      width: auto;
      height: auto;
    }
  }
`;

const TopbarCategoryNew = styled.span`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  top: -3px;
  display: block;
  background: ${colorRed};
  ${marginLeft}: 5px;
`;

const TopbarCategoryIcon = styled.span`
  position: absolute;
  font-size: 10px;
  line-height: 14px;
  ${right}: 20px;
  color: ${colorIcon};
`;

// endregion
