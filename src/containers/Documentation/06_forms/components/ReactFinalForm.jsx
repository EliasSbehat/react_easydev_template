import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const ReactFinalForm = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>React Final Form</CardTitle>
      </CardTitleWrap>
      <p>This template contains examples of <a href="https://final-form.org/react">react final form</a> in
        <b> template/src/containers/Form/</b>.
      </p>
      <p>The code of a basic form is below:</p>
      <CodeHighlither>
        {`import React from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'react-final-form';
import {
  FormButtonToolbar,
  FormContainer,
  FormGroup,
  FormGroupField,
  FormGroupLabel,
} from '@/shared/components/form/FormElements';
import { Button } from '@/shared/components/Button';

const Example = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    {({ handleSubmit, form }) => (
      <FormContainer onSubmit={handleSubmit}>
        <FormGroup>
          <FormGroupLabel>Input Label</FormGroupLabel>
          <FormGroupField>
            <Field
              name="input"
              component="input"
              type="text"
              placeholder="..."
            />
          </FormGroupField>
        </FormGroup>
        <FormButtonToolbar>
          <Button variant="primary" type="submit">Submit</Button>
          <Button variant="secondary" type="button" onClick={form.reset}>
            Cancel
          </Button>
        </FormButtonToolbar>
      </FormContainer>
    )}
  </Form>
);

Example.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Example;`}
      </CodeHighlither>
      <p>You can add custom inputs with the following code:</p>
      <CodeHighlither>
        {`const renderField = ({ input, label, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)`}
      </CodeHighlither>
      <p>And then use your custom input inside Field:</p>
      <CodeHighlither>
        {`<Field
  name='input'
  type='text'
  component={renderField}
  label='Input Label'
/>`}
      </CodeHighlither>
      <p>All documentation about react-final-form you can read <a href="https://final-form.org/react">here</a>.</p>
    </CardBody>
  </Card>
);

export default ReactFinalForm;
