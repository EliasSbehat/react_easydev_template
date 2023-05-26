import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { Table } from '@/shared/components/TableElements';

const Alerts = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Alerts</CardTitle>
      </CardTitleWrap>
      <p>Alerts are based on
        <a href="https://react-bootstrap.github.io/components/alerts/"> react-bootstrap</a>. Example:
      </p>
      <CodeHighlither>
        {`import React from 'react';
import Alert from 'template/src/components/Alert';

const Example = () => (
  <Alert color='info'>
    <p><b>Information:</b> Learning day desirous informed expenses
      returned six the. She enabled invited exposed him another.</p>
  </Alert>
);

export default Example;`}
      </CodeHighlither>
      <p>Props of Alerts:</p>
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
            <td>color</td>
            <td>string</td>
            <td>One of the following colors:
              <span className="red-text"> {' \'info\''}</span>,
              <span className="red-text"> {' \'primary\''}</span>,
              <span className="red-text"> {' \'warning\''}</span> or
              <span className="red-text"> {' \'danger\''}</span>
            </td>
          </tr>
          <tr>
            <td>icon</td>
            <td>bool</td>
            <td>Show or not icon</td>
          </tr>
          <tr>
            <td>bordered</td>
            <td>bool</td>
            <td>Transparent background and colored borders</td>
          </tr>
          <tr>
            <td>colored</td>
            <td>bool</td>
            <td>To add lighter background for icons</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>bool</td>
            <td>Transparent background with gray borders</td>
          </tr>
        </tbody>
      </Table>
    </CardBody>
  </Card>
);

export default Alerts;
