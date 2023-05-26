import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap';
import { deleteNewOrderTableData } from '@/redux/actions/newOrderTableActions';
import TotalProducts from './components/TotalProducts';
import TotalProfit from './components/TotalProfit';
import OrdersToday from './components/OrdersToday';
import Subscriptions from './components/Subscriptions';
import TopSellingProducts from './components/TopSellingProducts';
import BasicCard from './components/BasicCard';
import SalesStatistic from './components/SalesStatistic';
import RecentOrders from './components/RecentOrders';
import ProductSales from './components/ProductSales';
import NewOrders from './components/NewOrders';
import SalesStatisticBar from './components/SalesStatisticBar';
import MyTodos from './components/MyTodos';
import Emails from './components/Emails';
import SalesReport from './components/SalesReport';
import ShortReminders from './components/ShortReminders';
import { editTodoElement, fetchTodoListData } from '../../Todo/redux/actions';

const onDeleteRow = (dispatch, newOrder) => (index) => {
  const arrayCopy = [...newOrder];
  arrayCopy.splice(index, 1);
  dispatch(deleteNewOrderTableData(arrayCopy));
};

const ECommerceDashboard = () => {
  const { t } = useTranslation('common');

  const { newOrder, todoElements, rtl } = useSelector(state => ({
    newOrder: state.newOrder.items,
    todoElements: state.todo && state.todo.data && state.todo.data.elements
    && state.todo.data.elements.length > 0 ? [...state.todo.data.elements] : [],
    rtl: state.rtl,
  }));
  
  const dispatch = useDispatch();
  
  const editTodoElementAction = () => {
    dispatch(editTodoElement());
  };

  useEffect(() => {
    if (todoElements.length === 0) { // You can delete it if you need
      dispatch(fetchTodoListData());
    }
  }, [todoElements.length, dispatch]);

  return (
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('dashboard_commerce.page_title')}</h3>
        </Col>
      </Row>
      <Row>
        <TotalProducts />
        <TotalProfit />
        <OrdersToday />
        <Subscriptions />
      </Row>
      <Row>
        <ProductSales rtl={rtl.direction} />
        <BasicCard />
        <SalesStatistic />
        <MyTodos
          todoElements={todoElements}
          editTodoElement={editTodoElementAction}
        />
        <SalesStatisticBar />
        <SalesReport />
        <Emails />
        <ShortReminders />
        <TopSellingProducts dir={rtl.direction} />
        <NewOrders newOrder={newOrder} onDeleteRow={onDeleteRow(editTodoElementAction, newOrder)} />
        <RecentOrders />
      </Row>
    </Container>
  );
};

export default ECommerceDashboard;
