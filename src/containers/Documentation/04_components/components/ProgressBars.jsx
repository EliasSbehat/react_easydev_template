import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const ProgressBars = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Progress Bars</CardTitle>
      </CardTitleWrap>
      <p>
        Progress is based on
        <a href="https://react-bootstrap.github.io/components/progress/"> react-bootstrap</a>
        . Example of
        using this component here:
      </p>
      <CodeHighlither>
        {`import React from 'react';
import ProgressBar from '@/shared/components/ProgressBar';

const Example = () => (
  <ProgressBar now={70} label="70%" />
);

export default Example;`}
      </CodeHighlither>
      <ol>
        <li>To change progressbar color use prop <b>color</b>:
          <span className="red-text"> {'\'yellow\''}</span>,
          <span className="red-text"> {'\'violet\''}</span>,
          <span className="red-text"> {'\'pink\''}</span>,
          <span className="red-text"> {'\'blue\''}</span>
        </li>
        <li>To change its size use the props <b>size</b>:
          <span className="red-text"> {'\'small\''}</span>,
          <span className="red-text"> {'\'middle\''}</span>,
          <span className="red-text"> {'\'big\''}</span>
        </li>
      </ol>
    </CardBody>
  </Card>
);

export default ProgressBars;
