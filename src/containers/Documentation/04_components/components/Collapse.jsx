import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { Table } from '@/shared/components/TableElements';

const Collapse = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Collapse</CardTitle>
      </CardTitleWrap>
      <p>Collapse is based on
        <a href="https://react-bootstrap.github.io/utilities/transitions/"> react-bootstrap</a>. Example of using
        this component here:
      </p>
      <CodeHighlither>
        {`import React from 'react';
import Collapse from 'template/src/components/Collapse';

const Example = () => (
  <Collapse title='What is the most featured item?' className='boxed'>
    <p>No comfort written conduct at prevent manners on.</p>
  </Collapse>
);
export default Example;`}
      </CodeHighlither>
      <p>Props of Collapse:</p>
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
            <td>title</td>
            <td>string</td>
            <td />
          </tr>
          <tr>
            <td>className</td>
            <td>string</td>
            <td>You can change basic style:
              <span className="red-text"> {'\'boxed\''}</span>,
              <span className="red-text"> {'\'boxed colored\''}</span>,
              <span className="red-text"> {'\'faq\''}</span> and yours
            </td>
          </tr>
        </tbody>
      </Table>
    </CardBody>
  </Card>
);

export default Collapse;
