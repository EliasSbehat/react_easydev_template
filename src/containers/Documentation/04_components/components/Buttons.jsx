import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { Table } from '@/shared/components/TableElements';

const Buttons = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Buttons</CardTitle>
      </CardTitleWrap>
      <p>Buttons are based on
        <a href="https://react-bootstrap.github.io/components/buttons/"> react-bootstrap</a>. Example of
        using this component here:
      </p>
      <CodeHighlither>
        {`import React from 'react';
import { Button, ButtonToolbar } from '@/shared/components/Button';

const Example = () => (
  <ButtonToolbar>
    <Button variant="outline-secondary">Minimal</Button>
    <Button disabled>Disabled</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="success">Success</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="danger"><CloseCircleOutlineIcon /><span>Warning</span></Button>
    <Button variant="primary"><SettingsIcon /><span>Settings</span></Button>
  </ButtonToolbar>
);

export default Example;`}
      </CodeHighlither>
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
            <td>variant</td>
            <td>string</td>
            <td>You can choose one of variants:
              <span className="red-text"> {'\'primary\''}</span>,
              <span className="red-text"> {'\'secondary\''}</span>,
              <span className="red-text"> {'\'success\''}</span>,
              <span className="red-text"> {'\'danger\''}</span>,
              <span className="red-text"> {'\'warning\''}</span>,
              <span className="red-text"> {'\'outline-primary\''}</span>,
              <span className="red-text"> {'\'outline-secondary\''}</span>,
              <span className="red-text"> {'\'outline-success\''}</span>,
              <span className="red-text"> {'\'outline-danger\''}</span>,
              <span className="red-text"> {'\'outline-warning\''}</span>,
            </td>
          </tr>
          <tr>
            <td>size</td>
            <td>string</td>
            <td>
              <span className="red-text"> {'\'sm\''}</span> for small buttons and
              <span className="red-text"> {'\'lg\' '}</span>
              for large
            </td>
          </tr>
          <tr>
            <td>rounded</td>
            <td>boolean</td>
            <td>
              to make rounded buttons, conflicts with <span className="red-text">squared</span>
            </td>
          </tr>
          <tr>
            <td>squared</td>
            <td>boolean</td>
            <td>
              to make buttons without border radius, conflicts with <span className="red-text">rounded</span>
            </td>
          </tr>
        </tbody>
      </Table>

      <CardTitleWrap>
        <CardTitle>Expand</CardTitle>
      </CardTitleWrap>
      <p> Expand is based on Button above, but with loading effect. You have to write your own loading logic to use
        it. The component is located in <b>template/src/components/Expand.js</b>
      </p>
    </CardBody>
  </Card>
);

export default Buttons;
