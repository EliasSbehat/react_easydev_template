import React from 'react';
import { Col } from 'react-bootstrap';
import TextEditor from '@/shared/components/text-editor/TextEditor';
import {
  Card, CardBody,
} from '@/shared/components/Card';

const Editor = () => (
  <Col md={12} lg={12}>
    <Card>
      <CardBody>
        <TextEditor onChange={() => {}} />
      </CardBody>
    </Card>
  </Col>
);

export default Editor;
