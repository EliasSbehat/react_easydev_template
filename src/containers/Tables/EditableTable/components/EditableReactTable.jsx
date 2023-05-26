import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import ReactTableBase from '@/shared/components/table/ReactTableBase';
import ReactTableCustomizer from '@/shared/components/table/components/ReactTableCustomizer';
import {
  Card, CardBody, CardTitleWrap, CardTitle, CardSubhead,
} from '@/shared/components/Card';

const EditableReactTable = ({ reactTableData }) => {
  const [rows, setData] = useState(reactTableData.tableRowsData);
  const [withPagination, setWithPaginationTable] = useState(true);
  const [isSortable, setIsSortable] = useState(false);
  const [withSearchEngine, setWithSearchEngine] = useState(false);

  const updateEditableData = (rowIndex, columnId, value) => {
    setData(old => old.map((item, index) => {
      if (index === rowIndex) {
        return {
          ...old[rowIndex],
          [columnId]: value,
        };
      }
      return item;
    }));
  };

  const handleClickIsSortable = () => {
    setIsSortable(!isSortable);
  };

  const handleClickWithPagination = () => {
    setWithPaginationTable(!withPagination);
  };

  const handleClickWithSearchEngine = () => {
    setWithSearchEngine(!withSearchEngine);
  };

  const tableConfig = {
    isEditable: true,
    isSortable,
    isResizable: false,
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
              <CardTitle>editable react-table</CardTitle>
              <CardSubhead>
                Use table with&nbsp;
                <span className="red-text">editable</span>
              </CardSubhead>
            </CardTitleWrap>
            <ReactTableCustomizer
              handleClickIsSortable={handleClickIsSortable}
              handleClickWithPagination={handleClickWithPagination}
              handleClickWithSearchEngine={handleClickWithSearchEngine}
              isSortable={isSortable}
              withPagination={withPagination}
              withSearchEngine={withSearchEngine}
            />
          </div>
          <ReactTableBase
            key={withSearchEngine ? 'searchable' : 'common'}
            columns={reactTableData.tableHeaderData}
            data={rows}
            updateEditableData={updateEditableData}
            tableConfig={tableConfig}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

EditableReactTable.propTypes = {
  reactTableData: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default EditableReactTable;
