import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { Table } from '@/shared/components/TableElements';

const RadioButtons = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Radiobutton</CardTitle>
      </CardTitleWrap>
      <p>Checkbox is placed in <b>template/src/shared/components/form/RadioButton.js</b>. Example of
        using this component here:
      </p>
      <CodeHighlither>
        {'import renderRadioButtonField from \'@/shared/components/form/RadioButton\';'}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name='radiobutton'
  component={renderCheckBoxField}
  label='Radio button'
  radioValue='1'
/>`}
      </CodeHighlither>
      <p>Props of RadioButton:</p>
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
            <td>radioValue</td>
            <td>string</td>
            <td>Value of radiobutton</td>
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
        </tbody>
      </Table>
    </CardBody>
  </Card>
);

export default RadioButtons;
