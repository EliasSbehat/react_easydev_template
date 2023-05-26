import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const Popovers = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Popovers</CardTitle>
      </CardTitleWrap>
      <p>Popovers are based on
        <a href="https://react-bootstrap.github.io/components/overlays/#popovers"> react-bootstrap</a>.
        Example of using this component here:
      </p>
      <CodeHighlither>
        {`import React, { useState } from 'react';
import { Button } from '@/shared/components/Button';
import Popover from '@/shared/components/Popover';

const Example = () => (
  <Popover
    trigger="click"
    placement="right" 
    header="Popover right"
    body="And here's some <strong>amazing</strong> content. It's very engaging, right?"
  >
    <Button variant="success">Click me to see</Button>
  </Popover>
);

export default Example;`}
      </CodeHighlither>
      <p>All props <a href="https://react-bootstrap.github.io/components/overlays/#popover-props">here</a>.</p>
    </CardBody>
  </Card>
);

export default Popovers;
