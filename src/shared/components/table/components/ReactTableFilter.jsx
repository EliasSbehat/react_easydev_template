import React from 'react';
import PropTypes from 'prop-types';
import { useAsyncDebounce } from 'react-table';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import { colorAdditional, colorBackground, colorText } from '@/utils/palette';

const ReactTableFilter = ({
  rows,
  setGlobalFilter, setFilterValue, placeholder, dataLength,
}) => {
  const onChange = useAsyncDebounce((item) => {
    const value = item.trim();
    setFilterValue(value);
    setGlobalFilter(value);
  }, 200);

  return (
    <SearchWrap>
      <SearchInput
        type="search"
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
      {dataLength !== rows.length && (
        <span>Found {rows.length} matches</span>
      )}
    </SearchWrap>
  );
};

const filterGreaterThan = (rows, id, filterValue) => rows.filter((row) => {
  const rowValue = row.values[id];
  return rowValue >= filterValue;
});

filterGreaterThan.autoRemove = val => typeof val !== 'number';

ReactTableFilter.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  setGlobalFilter: PropTypes.func.isRequired,
  setFilterValue: PropTypes.func,
  placeholder: PropTypes.string,
  dataLength: PropTypes.number.isRequired,
};

ReactTableFilter.defaultProps = {
  setFilterValue: () => {},
  placeholder: 'Search...',
};

export default ReactTableFilter;

// region STYLES

const SearchWrap = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 30px;
  color: ${colorAdditional};
`;

const SearchInput = styled(Form.Control)`
  max-width: 250px;
  font-size: 12px;
  margin-right: 20px;
  color: ${colorText};
  background: ${colorBackground};
`;

// endregion
