import React from 'react';
import PropTypes from 'prop-types';
import PlusIcon from 'mdi-react/PlusIcon';
import styled from 'styled-components';
import { colorBlue } from '@/utils/palette';
import { paddingLeft, paddingRight, left } from '@/utils/directions';
import { lighten } from 'polished';
import { Button } from '@/shared/components/Button';

const todoSidebarImg = `${process.env.PUBLIC_URL}/img/sidebar_img.svg`;

const TodoSidebar = ({ changeShowEditModal, filterByPriority }) => {
  const addNewTask = () => {
    changeShowEditModal();
  };

  const handlePriorityChange = (e) => {
    filterByPriority(e.target.value);
  };

  return (
    <div>
      <TodoSidebarWrap>
        <TodoSidebarImage src={todoSidebarImg} alt="sidebar-img" />
        <TodoAddNewButton 
          variant="secondary"
          onClick={addNewTask}
        >
          <PlusIcon /> New task
        </TodoAddNewButton>
        <TodoPriorityFilter>
          <p className="title">Priority</p>
          <TodoPriorityFilterList>
            <li>
              <TodoFilterRadio
                type="radio"
                id="priority-all"
                name="priority-filter"
                value=""
                onClick={handlePriorityChange}
                defaultChecked
              />
              <label htmlFor="priority-all">All</label>
            </li>
            <li>
              <TodoFilterRadio
                type="radio"
                id="priority-low"
                name="priority-filter"
                value="low"
                onClick={handlePriorityChange}
              />
              <label htmlFor="priority-low">Low</label>
            </li>
            <li>
              <TodoFilterRadio
                type="radio"
                id="priority-medium"
                name="priority-filter"
                value="medium"
                onClick={handlePriorityChange}
              />
              <label htmlFor="priority-medium">Medium</label>
            </li>
            <li>
              <TodoFilterRadio
                type="radio"
                id="priority-high"
                name="priority-filter"
                value="high"
                onClick={handlePriorityChange}
              />
              <label htmlFor="priority-high">High</label>
            </li>
          </TodoPriorityFilterList>
        </TodoPriorityFilter>
      </TodoSidebarWrap>
    </div>
  );
};

TodoSidebar.propTypes = {
  changeShowEditModal: PropTypes.func.isRequired,
  filterByPriority: PropTypes.func.isRequired,
};

export default TodoSidebar;

// region STYLES

const TodoSidebarWrap = styled.div`
  background-color: ${colorBlue};
  min-height: 710px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  text-align: center;
`;

const TodoSidebarImage = styled.img`
  width: 130px;
  margin-bottom: 20px;
`;

const TodoPriorityFilter = styled.div`
  align-self: flex-start;
  margin-bottom: 20px;
  text-align: ${left};

  .title {
    font-size: 12px;
    margin-bottom: 15px;
    color: white;
    opacity: 0.6;
  }
`;

const TodoPriorityFilterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li:not(:last-child) {
    margin-bottom: 10px;
  }

  label {
    margin: 0;
    color: white;
    font-size: 12px;
  }
`;

const TodoAddNewButton = styled(Button)`
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  min-width: 130px;
  background-color: ${colorBlue};
  margin: 0 0 20px 0;
  border: 2px solid white;
  border-radius: 100px;

  &:before {
    background-color: ${lighten(0.1, colorBlue)};
  }

  &:hover {
    color: white;
    
    svg {
      fill: white;
    }
  }

  svg {
    height: 16px;
    width: 16px;
    margin: 0;
    fill: white;
  }
`;

const TodoFilterRadio = styled.input`
  display: none;

   & + label {
    position: relative;
    padding-top: 0;
    padding-bottom: 0;
    cursor: pointer;
    ${paddingRight}: 0;
    ${paddingLeft}: 25px;
  }

   & + label:before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    border: 1px solid #fafbfe;
    border-radius: 50%;
    ${left}: 0;
  }

   & + label:after {
    content: "";
    position: absolute;
    top: 3px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: #fafbfe;
    opacity: 0;
    transition: .2s;
    ${left}: 3px;
  }

   &:checked + label:after {
    opacity: 1;
  }
`;

// endregion
