import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';
import {
 colorBackground, colorBlue, colorBorder, colorText, colorWhite, 
} from '@/utils/palette';
import { borderRight, marginLeft } from '@/utils/directions';

const NavigationBottom = ({
  prevLink, prevTitle, nextLink, nextTitle,
}) => {
  const rtl = useSelector(state => state.rtl);

  return (
    <DocumentationBottomNav>
      <DocumentationBottomNavLeft>
        {prevLink ? (
          <Link to={prevLink}>
            {rtl.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}<p>{prevTitle}</p>
          </Link>
        ) : ''}
      </DocumentationBottomNavLeft>
      <DocumentationBottomNavRight>
        {nextLink ? (
          <Link to={nextLink}>
            <p>{nextTitle}</p>
            {rtl.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </Link>
        ) : ''}
      </DocumentationBottomNavRight>
    </DocumentationBottomNav>
  );
};

NavigationBottom.propTypes = {
  prevLink: PropTypes.string,
  prevTitle: PropTypes.string,
  nextLink: PropTypes.string,
  nextTitle: PropTypes.string,
};

NavigationBottom.defaultProps = {
  prevLink: '',
  prevTitle: '',
  nextLink: '',
  nextTitle: '',
};

export default NavigationBottom;

// region STYLES

const DocumentationBottomNav = styled.div`
  width: calc(100% - 30px);
  display: flex;
  position: absolute;
  bottom: 15px;
  background-color: ${colorBackground};
  
  @media screen and (max-width: 480px) {
    position: relative;
    width: 100%;
    bottom: 0;
  }

  @media screen and (max-width: 350px) {
    font-size: 10px;

    a {
      padding: 20px 0;
    }
  }
`;

const DocumentationBottomNavHalf = styled.div`
  width: 50%;

  p {
    font-weight: 500;
    padding: 0 5px;
    line-height: 20px;
    color: ${colorText};
  }

  svg {
    height: 20px;
    width: 20px;
    fill: ${colorText};
  }

  p, svg {
    transition: 0.3s;
    margin: auto 0;
  }

  a {
    padding: 20px 15px;
    display: flex;
    text-transform: uppercase;

    &:hover {
      background-color: ${colorBlue};

      p {
        color: ${colorWhite};
      }

      svg {
        fill: ${colorWhite};
      }
    }
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const DocumentationBottomNavLeft = styled(DocumentationBottomNavHalf)`
  ${borderRight}: 1px solid ${colorBorder};
`;

const DocumentationBottomNavRight = styled(DocumentationBottomNavHalf)`

  p {
    ${marginLeft}: auto;
  }
`;

// endregion
