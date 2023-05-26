import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ReactTableDnDBody from './ReactTableDnDBody';

const ReactTableDefaultBody = ({ page, getTableBodyProps, prepareRow }) => (
  <tbody {...getTableBodyProps()}>
    {page.map((row) => {
      prepareRow(row);
      return (
        <tr {...row.getRowProps()}>
          {row.cells.map(cell => (
            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
          ))}
        </tr>
      );
    })}
  </tbody>
);

ReactTableDefaultBody.propTypes = {
  page: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getTableBodyProps: PropTypes.func.isRequired,
  prepareRow: PropTypes.func.isRequired,
};

const ReactTableBody = ({
  page, getTableBodyProps, prepareRow, withDragAndDrop, updateDraggableData,
}) => {
  const theme = useSelector(state => state.theme);

  return (
      withDragAndDrop
        ? (
          <ReactTableDnDBody
            page={page}
            getTableBodyProps={getTableBodyProps}
            prepareRow={prepareRow}
            updateDraggableData={updateDraggableData}
            theme={theme}
          />
        ) : (
          <ReactTableDefaultBody
            page={page}
            getTableBodyProps={getTableBodyProps}
            prepareRow={prepareRow}
          />
        )
  );
};

ReactTableBody.propTypes = {
  page: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  getTableBodyProps: PropTypes.func.isRequired,
  prepareRow: PropTypes.func.isRequired,
  updateDraggableData: PropTypes.func.isRequired,
  withDragAndDrop: PropTypes.bool.isRequired,
};

export default ReactTableBody;
