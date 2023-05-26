import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { Table } from '@/shared/components/TableElements';

const TimePicker = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>TimePicker</CardTitle>
      </CardTitleWrap>
      <p>TimePicker is based on <a href="https://github.com/react-component/time-picker">rc-time-picker</a>.
        Example of using this component here:
      </p>
      <CodeHighlither>
        {'import renderTimePickerField from \'@/shared/components/form/TimePicker\';'}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name='time'
  component={renderTimePickerField}
/>`}
      </CodeHighlither>
      <p>Props of TimePicker:</p>
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
            <td>timeMode</td>
            <td>bool</td>
            <td>If <span className="red-text">true</span>: 12 hours mode. Default:
              <span className="red-text"> false</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </CardBody>
  </Card>
);

export default TimePicker;
