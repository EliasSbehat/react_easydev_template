import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import ReactTableBase from '@/shared/components/table/ReactTableBase';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';


const OrdersListTable = ({ orderListTableData }) => {
  const tableConfig = {
    isEditable: false,
    isSortable: true,
    isResizable: false,
    withPagination: true,
    withSearchEngine: true,
    manualPageSize: [10, 20, 30, 40],
    placeholder: 'Search...',
  };

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <CardTitleWrap>
            <CardTitle>Orders list</CardTitle>
          </CardTitleWrap>
          <ReactTableBase
            columns={orderListTableData.tableHeaderData}
            data={orderListTableData.tableRowsData}
            tableConfig={tableConfig}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

OrdersListTable.propTypes = {
  orderListTableData: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default OrdersListTable;
