import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const Material = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Material</CardTitle>
      </CardTitleWrap>
      <p>You can combine react-final-form with material-ui. Material UI documentation can be found
        <a href="https://mui.com/"> here</a>. This is an example of using a TextField:
      </p>
      <CodeHighlither>
        {`import { MaterialTextField } from '@/shared/components/form/MaterialFormElements';

const renderTextField = ({input, label, meta: {touched, error}, children, select}) => (
  <MaterialTextField
    label={label}
    error={touched && !!error}
    value={input.value}
    type={input.type}
    select={select}
    onChange={(e) => {
      e.preventDefault();
      input.onChange(e.target.value);
    }}
  >
    {children}
  </MaterialTextField>
);`}
      </CodeHighlither>
    </CardBody>
  </Card>
);

export default Material;
