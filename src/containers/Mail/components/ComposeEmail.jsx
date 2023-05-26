import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import TextEditor from '@/shared/components/text-editor/TextEditor';
import {
 FormButtonToolbar, FormContainer, FormGroup, FormGroupField, 
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';
import { left } from '@/utils/directions';

const renderTextEditor = ({ input }) => (
  <TextEditor {...input} />
);

renderTextEditor.propTypes = {
  input: PropTypes.shape().isRequired,
};

const ComposeEmail = ({ onSubmit, onBack }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit }) => (
      <FormContainer onSubmit={handleSubmit}>
        <InboxComposeTitle>
          Compose new message
        </InboxComposeTitle>
        <FormGroup>
          <FormGroupField>
            <Field
              name="to"
              component="input"
              type="text"
              placeholder="To:"
            />
          </FormGroupField>
        </FormGroup>
        <FormGroup>
          <FormGroupField>
            <Field
              name="subject"
              component="input"
              type="text"
              placeholder="Subject:"
            />
          </FormGroupField>
        </FormGroup>
        <FormGroup dir="ltr">
          <Field
            name="text"
            component={renderTextEditor}
          />
        </FormGroup>
        <FormGroup>
          <InboxFilesButton
            variant="outline-secondary"
            onClick={(e) => {
              e.preventDefault();
            }}
            size="sm"
          >
            Add files
          </InboxFilesButton>
        </FormGroup>
        <FormButtonToolbar>
          <Button variant="primary" type="submit">Send</Button>
          <Button variant="secondary" type="button" onClick={onBack}>Cancel</Button>
        </FormButtonToolbar>
      </FormContainer>
    )}
  </Form>
);

ComposeEmail.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export default ComposeEmail;

// region STYLES

const InboxComposeTitle = styled.h5`
  text-transform: uppercase;
  margin-bottom: 20px;
  font-weight: 700;

  @media screen and (max-width: 1024px) {
    position: absolute;
    top: 3px;
    ${left}: 70px;
  }
`;

const InboxFilesButton = styled(Button)`
  margin: 0;
`;

// endregion
