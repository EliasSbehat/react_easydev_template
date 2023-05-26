import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { Table } from '@/shared/components/TableElements';

const Select = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Select and MultiSelect</CardTitle>
      </CardTitleWrap>
      <p>Select and MultiSelect are based on <a href="https://github.com/JedWatson/react-select">react-select</a>.
        Example of using this component here:
      </p>
      <CodeHighlither>
        {'import renderSelectField from \'@/shared/components/form/Select\';'}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name="select"
  component={renderSelectField}
  options={[
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' },
  ]}
/>`}
      </CodeHighlither>
      <p>Props of Select:</p>
      <Table responsive bordered headAccent>
        <thead>
          <tr>
            <th>Property</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>options</td>
            <td>Array&lt;Object&gt;</td>
            <td>Array of options</td>
          </tr>
        </tbody>
      </Table>
    </CardBody>
  </Card>
);

export default Select;
