import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterListIcon from 'mdi-react/FilterListIcon';
import { Menu, MenuItem, TableButton } from '@/shared/components/MaterialTableElements';

const MatTableFilterButton = ({ onRequestSort }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSort = property => (event) => {
    onRequestSort(event, property);
    handleClose();
  };

  return (
    <div>
      <TableButton
        aria-owns={anchorEl ? 'simple-menu' : null}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <FilterListIcon />
      </TableButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleSort('name')}>Name</MenuItem>
        <MenuItem onClick={handleSort('calories')}>
          Calories
        </MenuItem>
        <MenuItem onClick={handleSort('fat')}>Fat</MenuItem>
        <MenuItem onClick={handleSort('carbs')}>Carbs</MenuItem>
        <MenuItem onClick={handleSort('protein')}>Protein</MenuItem>
      </Menu>
    </div>
  );
};

MatTableFilterButton.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
};

export default MatTableFilterButton;
