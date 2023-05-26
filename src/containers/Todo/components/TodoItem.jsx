import React from 'react';
import PropTypes from 'prop-types';
import DeleteForeverIcon from 'mdi-react/DeleteForeverIcon';
import PencilOutlineIcon from 'mdi-react/PencilOutlineIcon';
import PackageVariant from 'mdi-react/PackageVariantIcon';
import PackageVariantClosed from 'mdi-react/PackageVariantClosedIcon';
import {
  Card, CardBody,
} from '@/shared/components/Card';
import styled from 'styled-components';
import {
  colorAccent, colorAdditional, colorHover, colorRed, colorRedHover, colorText, colorYellow,
} from '@/utils/palette';
import {
  marginLeft, marginRight,
} from '@/utils/directions';
import { CheckBoxField } from '@/shared/components/form/CheckBox';
import todoCard from '../types';

const TodoItem = ({
  todoItemData, changeShowEditModal, editTodoElement, deleteTodoElement, isCompleted,
}) => {
  const editItem = (items) => {
    changeShowEditModal(items);
  };

  const editTodoElementData = (items) => {
    if (!todoItemData.isArchived) {
      const todoItemDataCopy = { ...items };
      todoItemDataCopy.isCompleted = !todoItemData.data.isCompleted;
      editTodoElement(todoItemDataCopy);
    }
  };

  const archivedItem = (items) => {
    const todoItemDataCopy = { ...items };
    todoItemDataCopy.isArchived = !todoItemDataCopy.isArchived;
    editTodoElement(todoItemDataCopy);
  };

  const deleteItem = () => {
    if (todoItemData.data.isArchived) {
      deleteTodoElement(todoItemData.data.id);
    }
  };

  return (
    <Card>
      <TodoItemContent>
        <CheckBoxField
          disabled={todoItemData.data.isArchived}
          checked={todoItemData.data.isCompleted}
          name={todoItemData.data.title}
          onChange={(e) => {
            e.preventDefault();
            editTodoElementData(todoItemData.data);
          }}
          styleType="colored-click"
        />
        <TodoInfo>
          <TodoContent isCompleted={isCompleted}>
            <h3>{todoItemData.data.title}</h3>
            <TodoDescription>{todoItemData.data.description}</TodoDescription>
          </TodoContent>
          <TodoAdditionalWrapper>
            <TodoAdditional>
              <TodoDueDate>Due date: {todoItemData.data.date}</TodoDueDate>
              <TodoPriority>
                <span>Priority:</span>
                <TodoPriorityIndicator priority={todoItemData.data.priority} />
              </TodoPriority>
            </TodoAdditional>
            <TodoBtnWrapper>
              {!todoItemData.data.isArchived ? (
                <div>
                  <TodoDeleteButton
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      editItem(todoItemData);
                    }}
                  >
                    <PencilOutlineIcon />
                  </TodoDeleteButton>
                  <TodoDeleteButton
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      archivedItem(todoItemData.data);
                    }}
                  >
                    <PackageVariantClosed />
                  </TodoDeleteButton>
                </div>
              ) : (
                <div>
                  <TodoDeleteButton
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      archivedItem(todoItemData.data);
                    }}
                  >
                    <PackageVariant />
                  </TodoDeleteButton>
                  <TodoDeleteButtonDelete
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteItem(todoItemData);
                    }}
                  >
                    <DeleteForeverIcon />
                  </TodoDeleteButtonDelete>
                </div>
              )}
            </TodoBtnWrapper>
          </TodoAdditionalWrapper>
        </TodoInfo>
      </TodoItemContent>
    </Card>
  );
};

TodoItem.propTypes = {
  todoItemData: todoCard.isRequired,
  changeShowEditModal: PropTypes.func.isRequired,
  editTodoElement: PropTypes.func.isRequired,
  deleteTodoElement: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
};

export default TodoItem;

// region STYLES

const TodoItemContent = styled(CardBody)`
  display: flex;
`;


const TodoInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-flow: column;

  @media screen and (min-width: 1280px){
    flex-flow: row;
  }
`;

const TodoContent = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  width: 100%;
  word-break: break-all;

  @media screen and (min-width: 1280px) {
    max-width: 500px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 850px;
  }

  h3 {
    width: 100%;
    max-width: 100%;
    font-size: 16px;
    line-height: 18px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  ${props => props.isCompleted && `

    h3 {
      text-decoration: line-through;
    }

    h3, & {
      color: ${colorAdditional};
    }
  `}
`;

const TodoAdditionalWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-self: baseline;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 400px) {
    flex-flow: row;
  }

  @media screen and (min-width: 576px) {
    flex-flow: column;
  }

  @media screen and (min-width: 768px) {
    flex-flow: row;
  }

  @media screen and (min-width: 1280px) {
    flex-flow: column;
    align-items: flex-end;
    width: initial;
  }
`;

const TodoAdditional = styled.div`
  display: flex;
  margin: 0 0 10px 0;
  white-space: nowrap;
  ${marginLeft}: 0;
`;

const TodoDescription = styled.p`
  width: 100%;
  word-break: break-all;
  color: ${colorText};
`;

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'low':
      return colorAccent;
    case 'medium':
      return colorYellow;
    case 'high':
      return colorRed;
      
    default:
      return colorAccent;
  }
};

const TodoPriorityIndicator = styled.span`
  background-color: ${props => getPriorityColor(props.priority)};
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  vertical-align: middle;
  align-self: center;
  flex-shrink: 0;
`;

const TodoDueDate = styled.p`
  background-color: ${colorHover};
  ${marginRight}: 15px;
  margin-top: 0;
  padding: 0 5px;
`;

const TodoPriority = styled.div`
  display: flex;
  align-self: baseline;
  ${marginRight}: 0;
  padding: 0 5px;
  color: ${colorText};
  background-color: ${colorHover};
  
  span:not(:last-child) {
    margin-right: 10px;
  }
`;

const TodoBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  min-width: 68px;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const TodoDeleteButton = styled.button`
  border: none;
  position: relative;
  color: ${colorAdditional};
  cursor: pointer;
  align-self: flex-end;
  background-color: ${colorHover};

  svg {
    height: 16px;
    width: 16px;
    fill: ${colorAdditional};
  }

  &:hover {
    color: ${colorAccent};

    svg {
      fill: ${colorAccent};
    }
  }
`;

const TodoDeleteButtonDelete = styled(TodoDeleteButton)`

  &:hover {
    color: ${colorRedHover};

    svg {
      fill: ${colorRedHover};
    }
  }
`;

// endregion
