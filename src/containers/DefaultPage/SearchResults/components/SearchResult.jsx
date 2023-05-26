import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
 colorAccent, colorAccentHover, colorAdditional, colorBlue, 
} from '@/utils/palette';
import { left } from '@/utils/directions';

const SearchResult = ({ title, link, preview }) => (
  <SearchResultWrap>
    <SearchResultTitle>{title}</SearchResultTitle>
    <SearchResultLink><a href={link}>{link}</a></SearchResultLink>
    <SearchResultPreview>{preview}</SearchResultPreview>
  </SearchResultWrap>
);

SearchResult.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  preview: PropTypes.string,
};

SearchResult.defaultProps = {
  title: '',
  link: '',
  preview: '',
};

export default SearchResult;

// region STYLES

const SearchResultWrap = styled.div`
  text-align: ${left};
  padding: 10px 0;
  border-bottom: solid 1px #e7e7e7;

  &:last-child {
    margin-bottom: 25px;
  }

  &:first-child {
    margin-top: 10px;
  }
`;

const SearchResultTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${colorBlue};
`;

const SearchResultLink = styled.p`
  margin: 0;

  a {
    color: ${colorAccent};

    &:hover {
      color: ${colorAccentHover};
    }
  }
`;

const SearchResultPreview = styled.p`
  max-width: 980px;
  margin-top: 5px;
  color: ${colorAdditional};
`;

// endregion
