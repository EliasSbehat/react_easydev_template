import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from 'mdi-react/DeleteIcon';
import {
 Toolbar, TableButton, TableToolbarSelected, TableToolbarWrap, 
} from '@/shared/components/MaterialTableElements';
import MatTableFilterButton from './MatTableFilterButton';

const MatTableToolbar = ({ numSelected, handleDeleteSelected, onRequestSort }) => (
  <TableToolbarWrap>
    <Toolbar className="material-table__toolbar">
      <div>
        {numSelected > 0 && (
          <TableToolbarSelected>
            {numSelected} <span>selected</span>
          </TableToolbarSelected>
        )}
      </div>
      <div>
        {numSelected > 0 ? (
          <TableButton
            onClick={handleDeleteSelected}
          >
            <DeleteIcon />
          </TableButton>
        ) : (
          <MatTableFilterButton onRequestSort={onRequestSort} />
        )}
      </div>
    </Toolbar>
  </TableToolbarWrap>
);

MatTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  handleDeleteSelected: PropTypes.func.isRequired,
  onRequestSort: PropTypes.func.isRequired,
};

export default MatTableToolbar;
