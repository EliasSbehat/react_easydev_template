import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { Table } from '@/shared/components/TableElements';

const CheckBoxes = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Checkbox</CardTitle>
      </CardTitleWrap>
      <p>Checkbox is placed in <b>template/src/shared/components/form/CheckBox.js</b>. Example of
        using this component here:
      </p>
      <CodeHighlither>
        {'import renderCheckBoxField from \'@/shared/components/form/CheckBox\';'}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name="checkbox"
  component={renderCheckBoxField}
  label="Checkbox 1"
  type="checkbox"
/>`}
      </CodeHighlither>
      <p>Props of CheckBox:</p>
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
            <td>label</td>
            <td>string</td>
            <td>Text right from checkbox</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>bool</td>
            <td>Disable input</td>
          </tr>
          <tr>
            <td>className</td>
            <td>string</td>
            <td>
              <span className="red-text"> {'\'colored\''}</span>,
              <span className="red-text"> {'\'button\''}</span>,
              <span className="red-text"> {'\'colored-click\''}</span> or nothing
            </td>
          </tr>
          <tr>
            <td>color</td>
            <td>string</td>
            <td>Background color of checkbox (using for <span className="red-text">{'\'colored\''}</span> class)</td>
          </tr>
        </tbody>
      </Table>
    </CardBody>
  </Card>
);

export default CheckBoxes;
