import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import ReactTableBase from '@/shared/components/table/ReactTableBase';
import ReactTableCustomizer from '@/shared/components/table/components/ReactTableCustomizer';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';

const ResizableReactTable = ({ reactTableData }) => {
  const [isSortable, setIsSortable] = useState(false);
  const [isResizable, setIsResizable] = useState(true);
  const [withPagination, setWithPaginationTable] = useState(true);
  const [withSearchEngine, setWithSearchEngine] = useState(true);

  const handleClickIsSortable = () => {
    setIsSortable(!isSortable);
  };

  const handleClickWithPagination = () => {
    setWithPaginationTable(!withPagination);
  };

  const handleClickIsResizable = () => {
    setIsResizable(!isResizable);
  };

  const handleClickWithSearchEngine = () => {
    setWithSearchEngine(!withSearchEngine);
  };

  const tableConfig = {
    isEditable: false,
    isResizable,
    isSortable,
    withPagination,
    withSearchEngine,
    manualPageSize: [10, 20, 30, 40],
    placeholder: 'Search by First name...',
  };

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div>
            <CardTitleWrap>
              <CardTitle>resizable react-table</CardTitle>
              <CardSubhead>
                Use table with&nbsp;
                <span className="red-text">resizable</span>
              </CardSubhead>
            </CardTitleWrap>
            <ReactTableCustomizer
              handleClickIsSortable={handleClickIsSortable}
              handleClickWithPagination={handleClickWithPagination}
              handleClickWithSearchEngine={handleClickWithSearchEngine}
              handleClickIsResizable={handleClickIsResizable}
              isResizable={isResizable}
              isSortable={isSortable}
              withPagination={withPagination}
              withSearchEngine={withSearchEngine}
            />
          </div>
          <ReactTableBase
            key={withSearchEngine ? 'searchable' : 'common'}
            columns={reactTableData.tableHeaderData}
            data={reactTableData.tableRowsData}
            tableConfig={tableConfig}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

ResizableReactTable.propTypes = {
  reactTableData: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default ResizableReactTable;
