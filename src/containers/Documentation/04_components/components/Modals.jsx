import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { Table } from '@/shared/components/TableElements';

const Modals = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Modals</CardTitle>
      </CardTitleWrap>
      <p>Modals are based on
        <a href="https://react-bootstrap.github.io/components/modal/"> react-bootstrap</a>.
        Example of using this component here:
      </p>
      <CodeHighlither>
        {`import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'template/src/components/Modal';

const Example = () => (
  <Modal color='primary' title='Congratulations!'
         message='Expect warmly its tended garden him esteem had remove off. Effects dearest staying
       now sixteen nor improve.'>
    <Button variant='primary'>Default</Button>
  </Modal>
);

export default Example;`}
      </CodeHighlither>
      <p>Props of Modal:</p>
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
            <td>color (<span className="red-text">isRequired</span>)</td>
            <td>string</td>
            <td>You can choose one of four colors:
              <span className="red-text">{' \'info\''}</span>,
              <span className="red-text">{' \'primary\''}</span>,
              <span className="red-text">{' \'warning\''}</span> or
              <span className="red-text">{' \'danger\''}</span>
            </td>
          </tr>
          <tr>
            <td>title</td>
            <td>string</td>
            <td />
          </tr>
          <tr>
            <td>message</td>
            <td>string</td>
            <td>Content of modal</td>
          </tr>
          <tr>
            <td>colored</td>
            <td>bool</td>
            <td>Colored background of modal</td>
          </tr>
          <tr>
            <td>header</td>
            <td>bool</td>
            <td>{'Colored background of modal\'s header'}</td>
          </tr>
        </tbody>
      </Table>
    </CardBody>
  </Card>
);

export default Modals;
