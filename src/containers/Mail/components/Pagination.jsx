import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import ChevronLeftIcon from 'mdi-react/ChevronLeftIcon';
import { PaginationWrap } from '@/shared/components/table/components/ReactTablePagination';

const EmailsPagination = ({ initialPage }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const setPage = (page) => {
    if (page < 1) {
      return;
    }
    setCurrentPage(page);
  };

  return (
    <PaginationWrap>
      <Pagination>
        <Pagination.Prev
          disabled={currentPage === 1}
          className="pagination__item--arrow"
          onClick={() => setPage(currentPage - 1)}
        >
          <ChevronLeftIcon />
        </Pagination.Prev>
        <Pagination.Next
          disabled={currentPage === 5}
          className="pagination__item--arrow"
          onClick={() => setPage(currentPage + 1)}
        >
          <ChevronRightIcon />
        </Pagination.Next>
      </Pagination>
    </PaginationWrap>
  );
};

EmailsPagination.propTypes = {
  initialPage: PropTypes.number.isRequired,
};

export default EmailsPagination;
