import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ReactTableBase from '@/shared/components/table/ReactTableBase';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { ButtonToolbar, Button } from '@/shared/components/Button';
import { right } from '@/utils/directions';

const ProductsListTable = ({ productListTableData }) => {
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
            <CardTitle>Products List</CardTitle>
            <ProductListToolbar>
              <ProductListAddButton variant="primary" as={Link} to="/e-commerce/product_edit">
                Add new product
              </ProductListAddButton>
            </ProductListToolbar>
          </CardTitleWrap>
          <ReactTableBase
            columns={productListTableData.tableHeaderData}
            data={productListTableData.tableRowsData}
            tableConfig={tableConfig}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

ProductsListTable.propTypes = {
  productListTableData: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default ProductsListTable;

// region STYLES

const ProductListToolbar = styled(ButtonToolbar)`
  position: absolute;
  top: 0;
  ${right}: 0;
  margin: 0;

  @media screen and (max-width: 992px) {
    position: relative;
    margin-top: 10px;
  }
`;

const ProductListAddButton = styled(Button)`
  padding: 4px 25px;
  text-transform: none;
`;

// endregion
