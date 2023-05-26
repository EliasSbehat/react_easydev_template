import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const Tooltips = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Tooltips</CardTitle>
      </CardTitleWrap>
      <p>Tooltips are based on
        <a href="https://react-bootstrap.github.io/components/overlays/#tooltips"> react-bootstrap</a>. Example of
        using this component here:
      </p>
      <CodeHighlither>
        {`import React from 'react';
import { Button, ButtonToolbar } from '@/shared/components/Button';
import Tooltip from '@/shared/components/Tooltip';

const Example = () => (
  <ButtonToolbar centered>
    <Tooltip text="Do you like dragons?" placement="top">
      <Button id="TooltipTop" variant="outline-secondary">
        Tooltip on Top
      </Button>
    </Tooltip>
  </ButtonToolbar>
);

export default Example;`}
      </CodeHighlither>
      <p>All props <a href="https://react-bootstrap.github.io/components/overlays/#tooltips">here</a>.</p>
    </CardBody>
  </Card>
);

export default Tooltips;
