import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { Table } from '@/shared/components/TableElements';

const Panel = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Panel</CardTitle>
      </CardTitleWrap>
      <CodeHighlither>
        {`import React from 'react';
import Panel from '@/shared/components/Panel';

const Example = () => (
  <Panel xs={12} md={12} lg={6} title='Default panel'>
    <p>Folly words widow one downs few age every seven. Discovered had get considered
      projection who favourable. Necessary up knowledge it tolerably.</p>
  </Panel>
);

export default Example;`}
      </CodeHighlither>
      <p>Props of Panel:</p>
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
            <td>You can choose one of four colors:
              <span className="red-text"> {'\'info\''}</span>,
              <span className="red-text"> {'\'primary\''}</span>,
              <span className="red-text"> {'\'warning\''}</span> or
              <span className="red-text"> {'\'danger\''}</span>
            </td>
          </tr>
          <tr>
            <td>divider</td>
            <td>bool</td>
            <td>Add header divider</td>
          </tr>
          <tr>
            <td>title</td>
            <td>string</td>
            <td />
          </tr>
          <tr>
            <td>subhead</td>
            <td>string</td>
            <td>Add subhead</td>
          </tr>
          <tr>
            <td>label</td>
            <td>string</td>
            <td>Add label to the right from title</td>
          </tr>
          <tr>
            <td>icon</td>
            <td>string</td>
            <td>Add icon from <a href="https://linearicons.com/free">Linearicons</a> to the left from title:
              e.g. <span className="red-text">{'\'magic-wand\''}</span>
            </td>
          </tr>
          <tr>
            <td>isLoading</td>
            <td>bool</td>
            <td>Use to show loader.</td>
          </tr>
        </tbody>
      </Table>
    </CardBody>
  </Card>
);

export default Panel;
