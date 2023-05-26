import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-bootstrap';
import styled from 'styled-components';
import {
 colorHover, colorBackground, colorRed, colorGray, 
} from '@/utils/palette';
import { left, paddingLeft, marginLeft } from '@/utils/directions';
import { SidebarNavLink, SidebarLinkTitle, SidebarLinkIcon } from './SidebarLink';

const SidebarCategory = ({
  title, icon, isNew, children, collapse,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SidebarCategoryWrap collapse={collapse}>
      <SidebarCategoryButton
        as="button"
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
      >
        {icon ? <SidebarLinkIcon className={`lnr lnr-${icon}`} /> : ''}
        <SidebarLinkTitle>
          {title}
          {isNew && <SidebarCategoryNew />}
        </SidebarLinkTitle>
        {!collapse && (
          <SidebarCategoryChevron
            className="lnr lnr-chevron-right"
            open={isOpen}
          />
        )}
      </SidebarCategoryButton>
      <Collapse in={collapse || isOpen}>
        <SidebarSubmenuWrap>
          <SidebarSubmenu>
            {children}
          </SidebarSubmenu>
        </SidebarSubmenuWrap>
      </Collapse>
    </SidebarCategoryWrap>
  );
};

SidebarCategory.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  collapse: PropTypes.bool.isRequired,
  isNew: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

SidebarCategory.defaultProps = {
  icon: '',
  isNew: false,
};

export default SidebarCategory;

// region STYLES

const SidebarCategoryButton = styled(SidebarNavLink)`
  width: 100%;
`;

export const SidebarCategoryChevron = styled.span`
  ${marginLeft}: auto;
  ${props => props.open && `
    transform: rotate(90deg);
  `};
  font-size: 10px;
  line-height: 14px;
  color: ${colorGray};
`;

const SidebarSubmenuWrap = styled.div`
  
  @media screen and (min-width: 576px) {
    ${props => props.collapse && `
      position: absolute;
      width: 0;
      transition: 0.3s;
      display: none;
      ${left}: 55px;

      & & {
        position: relative;
        ${left}: 0;

        a {
          ${paddingLeft}: 30px;
        }
      }
    `}
  }
`;

const SidebarSubmenu = styled.ul`
  transition: height 0.5s 0s, padding 0.5s 0s, opacity 0.4s 0.1s;
  padding: 15px 0;
  background-color: ${colorHover};
  list-style: none;
  margin-top: -1px;

  & & {
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 0;

    a,
    button {
      ${paddingLeft}: 53px;
    }
  }

  a,
  button {
    ${paddingLeft}: 43px;

    &:hover {
      background-color: ${colorBackground};
    }
  }
  
  @media screen and (min-width: 576px) {
    ${props => props.collapse && `
        padding: 0 0 15px 0;
        transition: 0s;
    `}
  }
`;

const SidebarCategoryWrap = styled.li`
  
  ${props => props.collapse && `
  
    &:hover {
      
      ${SidebarCategoryButton} {
        background: ${colorHover(props)};
        
        &:before {
          opacity: 1;
        }
      }
    }
  `};
  
  @media screen and (min-width: 576px) {
    
    ${props => props.collapse && `
      & > div {
        position: absolute;
        width: 0;
        transition: .3s;
        display: none;
        left: 55px;
        
        a,
        button {
          width: 100%;
          ${paddingLeft(props)}: 15px;
        }
      }
      
      & & > div {
        position: relative;
        display: block;
        min-width: 185px;
        left: 0;
        
        a,
        button {
          ${paddingLeft(props)}: 30px;
        }
      }
    
      &:hover > div,
      &:hover & > div {
        display: inherit!important;
        width: 220px;
      }
    `}
  }
`;

const SidebarCategoryNew = styled.span`
  height: 6px;
  width: 6px;
  border-radius: 50%;
  top: -3px;
  display: block;
  background: ${colorRed};
  ${marginLeft}: 5px;
`;

// endregion
