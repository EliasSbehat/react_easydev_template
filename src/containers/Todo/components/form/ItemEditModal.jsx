import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ItemEditModalForm from './ItemEditModalForm';

const priorityOptions = [
  { value: 'high', label: 'high' },
  { value: 'medium', label: 'medium' },
  { value: 'low', label: 'low' },
];

const ItemEditModal = ({
  todoElements,
  currentEditItem,
  changeShowEditModal,
  editTodoElementAction,
  addTodoElementAction,
  showEditModal,
}) => {
  const [priority, setPriority] = useState({ value: 'low', label: 'low' });
  const [dueDate, setDueDate] = useState(new Date());

  useEffect(() => {
    if (currentEditItem) {
      setPriority({ value: currentEditItem.priority, label: currentEditItem.priority });
      setDueDate(new Date(currentEditItem.date));
    } else {
      setPriority({ value: 'low', label: 'low' });
      setDueDate(new Date());
    }
  }, [currentEditItem, todoElements]);

  const handleDateChange = (date) => {
    setDueDate(date);
  };

  const handlePriorityChange = (option) => {
    setPriority(option);
  };

  const handleSubmit = (formData) => {
    let tempDueData = new Date();
    if (dueDate) {
      tempDueData = dueDate;
    }
    const updatedTodoData = {
      ...currentEditItem,
      title: formData.title,
      description: formData.description,
      priority: priority.value,
      date: new Intl.DateTimeFormat('en-US').format(tempDueData),
    };
    if (!currentEditItem) {
      updatedTodoData.id = -(Date.now()); // new elements will have id < 0
      updatedTodoData.isCompleted = false;
      updatedTodoData.isArchived = false;
    }
    if (updatedTodoData.title !== '') {
      if (!currentEditItem) {
        addTodoElementAction(updatedTodoData);
      } else {
        editTodoElementAction(updatedTodoData);
      }
      changeShowEditModal();
    }
  };

  return (
    <Modal
      show={showEditModal}
      onHide={changeShowEditModal}
    >
      <ItemEditModalForm
        initialValues={currentEditItem}
        onSubmit={handleSubmit}
        changeShowEditModal={changeShowEditModal}
        handleDateChange={handleDateChange}
        handlePriorityChange={handlePriorityChange}
        currentEditItem={currentEditItem}
        dueDate={dueDate}
        priority={priority}
        priorityOptions={priorityOptions}
      />
    </Modal>
  );
};

ItemEditModal.propTypes = {
  todoElements: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  currentEditItem: PropTypes.shape(),
  changeShowEditModal: PropTypes.func.isRequired,
  editTodoElementAction: PropTypes.func.isRequired,
  addTodoElementAction: PropTypes.func.isRequired,
  showEditModal: PropTypes.bool.isRequired,
};

ItemEditModal.defaultProps = {
  currentEditItem: null,
};

export default ItemEditModal;
