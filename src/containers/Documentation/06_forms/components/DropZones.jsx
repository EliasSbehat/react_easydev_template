import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { Table } from '@/shared/components/TableElements';

const DropZones = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>DropZones</CardTitle>
      </CardTitleWrap>
      <p>DropZones are based on <a href="https://github.com/react-dropzone/react-dropzone/">react-dropzone</a>.
        There are two types of this component in the template. The first is dropzone with multiple files upload:
      </p>
      <CodeHighlither>
        {'import renderDropZoneMultipleField from \'@/shared/components/form/dropzones/DropZoneMultiple\';'}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name='files'
  component={renderDropZoneMultipleField}
/>`}
      </CodeHighlither>
      <p>And with upload of one file:</p>
      <CodeHighlither>
        {'import renderDropZoneField from \'@/shared/components/form/dropzones/DropZone\';'}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name='files'
  component={renderDropZoneField}
/>`}
      </CodeHighlither>
      <p>Props of DropZone:</p>
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
            <td>customHeight</td>
            <td>bool</td>
            <td>If <span className="red-text">true</span>: DropZone will change height after upload</td>
          </tr>
        </tbody>
      </Table>
    </CardBody>
  </Card>
);

export default DropZones;
