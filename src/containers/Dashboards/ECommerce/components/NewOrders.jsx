import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DotsHorizontalIcon from 'mdi-react/DotsHorizontalIcon';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import { NewOrderTableProps } from '@/shared/prop-types/TablesProps';
import Panel from '@/shared/components/Panel';
import { Table } from '@/shared/components/TableElements';
import {
 marginLeft, marginRight,
} from '@/utils/directions';
import {
 colorYellow, colorRed, colorAccent, colorAdditional, 
} from '@/utils/palette';
import {
 DropdownMenu, Dropdown, DropdownItem, DropdownToggle, 
} from '@/shared/components/Dropdown';

const DropDownMore = ({ index, handleDeleteRow }) => (
  <MoreDropdown>
    <MoreDropdownToggle>
      <DotsHorizontalIcon />
    </MoreDropdownToggle>
    <DropdownMenu>
      <DropdownItem as={Link} to={`/e_commerce_dashboard/edit/${index}`}>Edit</DropdownItem>
      <DropdownItem onClick={handleDeleteRow}>Delete</DropdownItem>
    </DropdownMenu>
  </MoreDropdown>
);

DropDownMore.propTypes = {
  index: PropTypes.number.isRequired,
  handleDeleteRow: PropTypes.func.isRequired,
};

const NewOrderAmount = ({ quantity }) => (
  <DashboardOrdersAmount amount={quantity}>
    <div />
    {quantity > 20 && <div />}
    {quantity > 50 && <div />}
    {quantity > 100 && <div />}
    {quantity > 150 && <div />}
    <span>{quantity}</span>
  </DashboardOrdersAmount>
);

NewOrderAmount.propTypes = {
  quantity: PropTypes.number,
};

NewOrderAmount.defaultProps = {
  quantity: 0,
};

const NewOrders = ({ newOrder, onDeleteRow }) => {
  const { t } = useTranslation('common');

  return (
    <Panel
      xl={6}
      lg={12}
      md={12}
      title={t('dashboard_commerce.new_orders')}
      subhead="Top sales of the last week"
    >
      <DashboardOrdersTable responsive striped>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Sold</th>
            <th>Total</th>
            <th aria-label="dashboard__table" />
          </tr>
        </thead>
        <tbody>
          {newOrder.map((order, index) => (
            <tr key={order.id}>
              <td>
                <DashboardOrdersTitle>
                  <DashboardOrdersImageWrap>
                    <DashboardOrdersImage img={order.img} />
                  </DashboardOrdersImageWrap>
                  {order.title}
                </DashboardOrdersTitle>
              </td>
              <td>
                <NewOrderAmount quantity={order.quantity} />
              </td>
              <td>{order.sold}</td>
              <DashboardOrdersTotalCell dir="ltr">{order.total}</DashboardOrdersTotalCell>
              <td>
                <DropDownMore index={index} handleDeleteRow={e => onDeleteRow(index, e)} />
              </td>
            </tr>
          ))}
        </tbody>
      </DashboardOrdersTable>
      <DashboardOrdersLink to="/e-commerce/catalog">
        All products <ChevronDownIcon />
      </DashboardOrdersLink>
    </Panel>
  );
};

NewOrders.propTypes = {
  newOrder: NewOrderTableProps.isRequired,
  onDeleteRow: PropTypes.func.isRequired,
};

export default NewOrders;

// region

const DashboardOrdersTable = styled(Table)`
  overflow: hidden;
  min-width: 410px;

  tbody td {
    padding: 8px 10px;
    vertical-align: middle;
  }
`;

const DashboardOrdersTitle = styled.div`
  position: relative;
  display: flex;
  line-height: 15px;
  align-items: center;
`;

const DashboardOrdersImageWrap = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  flex-shrink: 0;
`;

const DashboardOrdersTotalCell = styled.td`
  white-space: nowrap;
`;

const DashboardOrdersImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${props => props.img});
`;

const DashboardOrdersLink = styled(Link)`
  font-size: 12px;
  margin-top: 20px;
  display: block;

  svg {
    height: 12px;
    width: 12px;
  }
`;

const getAmountColor = (amount) => {
  switch (true) {
    case amount <= 20:
      return colorRed;
    case amount <= 100:
      return colorYellow;
      
    default:
      return colorAccent;
  }
};

const DashboardOrdersAmount = styled.div`
  display: flex;

  div {
    width: 3px;
    height: 14px;
    display: inline-block;
    background-color: ${props => getAmountColor(props.amount)};
    border-radius: 3px;
    ${marginRight}: 3px;
    ${marginLeft}: 0;
    margin-top: auto;
    margin-bottom: auto;
  }

  span {
    color: ${colorAdditional};
    ${marginRight}: 0;
    ${marginLeft}: 5px;
    margin-top: auto;
    margin-bottom: auto;
  }

`;

const MoreDropdown = styled(Dropdown)`
  display: flex;

  & > div {
    min-width: 90px;
    width: 100%;
  }

  button {
    font-size: 13px;
  }
`;

const MoreDropdownToggle = styled(DropdownToggle)`
  margin: 0;
  padding: 0 5px;
  border: none;
  background-color: transparent;
  ${marginLeft}: auto;

  &:before {
    display: none;
  }

  svg {
    margin: 0;
    height: 20px;
    width: 20px;
    fill: ${colorAdditional};
    transition: all 0.3s;
  }

  &:hover, &:not([disabled]):not(.disabled):active, &:focus {
    background: transparent;

    svg {
      fill: ${colorAccent};
    }
  }
`;

// endregion
