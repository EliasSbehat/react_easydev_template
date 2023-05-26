import React, {
  useState,
  useEffect,
  useMemo,
  Fragment,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'react-bootstrap';
import {
  fetchTodoListData,
  editTodoElement,
  deleteTodoElement, addTodoElement,
} from './redux/actions';
import ItemEditModal from './components/form/ItemEditModal';
import TodoListWrapper from './components/TodoList';
import TodoSidebar from './components/TodoSidebar';
import DividerLine from './components/DividerLine';

const Todo = () => {
  const { t } = useTranslation('common');
  const [currentEditItem, setCurrentEditItem] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [filterByPriority, setFilterByPriority] = useState('');
  const [prevTodoElements, setPrevTodoElements] = useState(null);

  const {
    theme, rtl, todoElements, isFetching,
  } = useSelector(state => ({
    todoElements: state.todo && state.todo.data && state.todo.data.elements
      && state.todo.data.elements.length > 0 ? [...state.todo.data.elements] : [],
    isFetching: state.todo && state.todo.isFetching,
    theme: state.theme,
    rtl: state.rtl && state.rtl.direction,
  }));
  
  const dispatch = useDispatch();

  const editTodoElementAction = (data) => {
    dispatch(editTodoElement(data));
  };
  
  const addTodoElementAction = (data) => {
    dispatch(addTodoElement(data));
  };
  
  const deleteTodoElementAction = (id) => {
    dispatch(deleteTodoElement(id));
  };

  useEffect(() => {
    if (JSON.stringify(todoElements) !== JSON.stringify(prevTodoElements)) {
      if (todoElements.length === 0 && prevTodoElements === null) { // You can delete it if you need
        dispatch(fetchTodoListData());
      }
      setPrevTodoElements([...todoElements]);
    }
  }, [prevTodoElements, todoElements, filterByPriority, dispatch]);

  const changeShowEditModal = (data) => {
    setShowEditModal(!showEditModal);
    setCurrentEditItem(data);
  };

  const filteringByPriority = (priority) => {
    setFilterByPriority(priority);
  };

  const incompleteTodoElements = useMemo(() => {
    const todos = todoElements.filter(item => !item.data.isArchived && !item.data.isCompleted);
    if (filterByPriority !== '') {
      return todos.filter(item => item.data.priority === filterByPriority);
    }
    return todos;
  }, [todoElements, filterByPriority]);

  const completedTodoElements = useMemo(() => {
    const todos = todoElements.filter(item => !item.data.isArchived && item.data.isCompleted);
    if (filterByPriority !== '') {
      return todos.filter(item => item.data.priority === filterByPriority);
    }
    return todos;
  }, [todoElements, filterByPriority]);

  const archivedTodoElements = useMemo(() => todoElements.filter(item => item.data.isArchived), [todoElements]);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('todo_application.page_title')}</h3>
        </Col>
      </Row>
      <Row>
        <Col md={9} xl={10}>
          <Fragment>
            <DividerLine title="Active" />
            <TodoListWrapper
              todoElements={incompleteTodoElements}
              changeShowEditModal={changeShowEditModal}
              editTodoElementAction={editTodoElementAction}
              isFetching={isFetching}
            />
            <DividerLine title="Done" />
            <TodoListWrapper
              todoElements={completedTodoElements}
              changeShowEditModal={changeShowEditModal}
              editTodoElementAction={editTodoElementAction}
              isFetching={isFetching}
            />
            <div>
              <DividerLine title="Archived" />
              <TodoListWrapper
                isArchived
                todoElements={archivedTodoElements}
                editTodoElementAction={editTodoElementAction}
                deleteTodoElementAction={deleteTodoElementAction}
                isFetching={isFetching}
              />
            </div>
          </Fragment>
        </Col>
        <Col md={3} xl={2}>
          <TodoSidebar
            changeShowEditModal={changeShowEditModal}
            filterByPriority={filteringByPriority}
          />
        </Col>
        <ItemEditModal
          theme={theme}
          rtl={rtl}
          showEditModal={showEditModal}
          currentEditItem={currentEditItem && currentEditItem.data}
          changeShowEditModal={changeShowEditModal}
          todoElements={todoElements}
          addTodoElementAction={addTodoElementAction}
          editTodoElementAction={editTodoElementAction}
        />
      </Row>
    </Container>
  );
};

export default Todo;
