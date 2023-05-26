import React from 'react';
import PropTypes from 'prop-types';
import Highlighter from 'react-highlight-words';
import styled from 'styled-components';
import { colorAccent } from '@/utils/palette';

const ReactTableCell = ({ value: initialValue, state, column }) => (
  column.disableGlobalFilter ? (
    initialValue
    ) : (
      <StyledHighlighter
        searchWords={[state.globalFilter]}
        autoEscape
        textToHighlight={`${initialValue}`}
      />
    )
);

ReactTableCell.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
  state: PropTypes.shape({
    globalFilter: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  }).isRequired,
  column: PropTypes.shape().isRequired,
};

export default ReactTableCell;

// region STYLES

const StyledHighlighter = styled(Highlighter)`
  
  mark {
    background-color: ${colorAccent};
    padding: 0;
  }
`;

// endregion
