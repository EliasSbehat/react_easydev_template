import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Card } from '@/shared/components/Card';
import { colorAdditional, colorBorder, colorText } from '@/utils/palette';
import { right } from '@/utils/directions';
import { editTodoElement, fetchTodoListData } from '../../../Todo/redux/actions';
import ProfileToDo from './ProfileTodo';
import { ProfileCard } from '../ProfileBasicComponents';

const editTodoElementData = ({ todoElements, editTodoElementAction }) => (e) => {
  const todoId = e.target.id;
  const elementData = todoElements.find(item => item.data.id === todoId).data;
  elementData.isCompleted = !elementData.isCompleted;
  editTodoElementAction(elementData);
};

const ProfileTasks = () => {
  const [noArchivedTodoElements, setNoArchivedTodoElements] = useState(null);
  const [archivedTodoElements, setArchivedTodoElements] = useState(null);
  const [prevTodoElements, setPrevTodoElements] = useState(null);

  const todoElements = useSelector(state => (state.todo && state.todo.data && state.todo.data.elements
    && state.todo.data.elements.length > 0 ? [...state.todo.data.elements] : []));
  
  const dispatch = useDispatch();

  const editTodoElementAction = (elementData) => {
    dispatch(editTodoElement(elementData));
  };

  useEffect(() => {
    if (JSON.stringify(todoElements) !== JSON.stringify(prevTodoElements)) {
      if (todoElements.length === 0 && prevTodoElements === null) { // You can delete it if you need
        dispatch(fetchTodoListData());
      }
      const filteredData = [...todoElements];
      setNoArchivedTodoElements(filteredData.filter(item => !item.data.isArchived));
      setArchivedTodoElements(filteredData.filter(item => item.data.isArchived));
      setPrevTodoElements([...todoElements]);
    }
  }, [todoElements, prevTodoElements, dispatch]);

  return (
    <Col md={12} lg={12} xl={12}>
      <Card>
        <ProfileCard>
          <ProfileTasksTitle>
            Current tasks <span>{todoElements.length}</span>
          </ProfileTasksTitle>
          <ProfileTasksWrap>
            {noArchivedTodoElements && noArchivedTodoElements.map(element => (
              <ProfileToDo
                key={element.data.id}
                id={element.data.id}
                label={element.data.title}
                checked={element.data.isCompleted}
                onChange={editTodoElementData({ todoElements, editTodoElementAction })}
              />
            ))}
            {archivedTodoElements && archivedTodoElements.map(element => (
              <ProfileToDo
                key={element.data.id}
                id={element.data.id}
                label={element.data.title}
                checked={element.data.isCompleted}
                disabled
              />
            ))}
            <ProfileTasksLink to="/todo">See all tasks</ProfileTasksLink>
          </ProfileTasksWrap>
        </ProfileCard>
      </Card>
    </Col>
  );
};

export default ProfileTasks;

// region STYLES

const ProfileTasksTitle = styled.p`
  padding: 20px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 14px;
  margin: 0;
  border-bottom: 1px solid ${colorBorder};
  color: ${colorText};

  span {
    color: ${colorAdditional};
    font-size: 13px;
  }
`;

const ProfileTasksWrap = styled.div`
  position: relative;
  padding-bottom: 40px;
`;

const ProfileTasksLink = styled(Link)`
  position: absolute;
  bottom: 20px;
  ${right}: 20px;
`;

// endregion
