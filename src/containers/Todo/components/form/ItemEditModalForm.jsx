import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import DatePicker from 'react-datepicker';
import Select from 'react-select';
import styled from 'styled-components';
import FormField from '@/shared/components/form/FormField';
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import validate from './validate';

const renderDatePicker = ({ dueDate, handleDateChange }) => (
  <DatePicker
    dateFormat="MM/dd/yyyy"
    selected={dueDate}
    onChange={handleDateChange}
    minDate={new Date()}
  />
);

renderDatePicker.propTypes = {
  handleDateChange: PropTypes.func.isRequired,
  dueDate: PropTypes.shape().isRequired,
};

const ItemEditModalForm = ({
  onSubmit, dueDate, handlePriorityChange, priority,
  handleDateChange, currentEditItem, changeShowEditModal, priorityOptions,
}) => (
  <FormWrapper>
    <Form onSubmit={onSubmit} validate={validate} initialValues={currentEditItem}>
      {({ handleSubmit }) => (
        <FormContainer onSubmit={handleSubmit}>
          <FormGroup>
            <FormGroupLabel className="typography-message">Title</FormGroupLabel>
            <FormGroupField>
              <Field
                name="title"
                type="text"
                component={FormField}
                placeholder="Title.."
              />
            </FormGroupField>
          </FormGroup>
          <FormGroup>
            <FormGroupLabel>Description</FormGroupLabel>
            <FormGroupField>
              <Field
                component="textarea"
                name="description"
                placeholder="What to do.."
              />
            </FormGroupField>
          </FormGroup>
          <FormGroup>
            <FormGroupLabel>Due Date</FormGroupLabel>
            <FormGroupField className="priority">
              <Field
                name="dueDate"
                type="text"
                dueDate={dueDate}
                handleDateChange={handleDateChange}
                component={renderDatePicker}
                required
              />
            </FormGroupField>
          </FormGroup>
          <FormGroup>
            <FormGroupLabel>Priority</FormGroupLabel>
            <Select
              className="react-select"
              classNamePrefix="react-select"
              onChange={handlePriorityChange}
              options={priorityOptions}
              value={priority}
              defaultValue={priority}
              clearable={false}
            />
          </FormGroup>
          <FormButtonToolbar>
            <Button variant="primary" type="submit">
              {!currentEditItem ? 'Add' : 'Edit'}
            </Button>
            <Button variant="secondary" type="button" onClick={changeShowEditModal}>Cancel</Button>
          </FormButtonToolbar>
        </FormContainer>
      )}
    </Form>
  </FormWrapper>
);

ItemEditModalForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  changeShowEditModal: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  handlePriorityChange: PropTypes.func.isRequired,
  currentEditItem: PropTypes.shape(),
  dueDate: PropTypes.shape().isRequired,
  priority: PropTypes.shape().isRequired,
  priorityOptions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

ItemEditModalForm.defaultProps = {
  currentEditItem: null,
};

export default ItemEditModalForm;

const FormWrapper = styled.div`
  padding: 20px;
`;
