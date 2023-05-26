import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const Intro = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Components</CardTitle>
      </CardTitleWrap>
      <p>These are the examples of using template components. All
        components have a basic structure and configuration. Just copy a component with its styles to your
        project.
      </p>
      <p>
        Most of components are based on
        <a href="https://react-bootstrap.github.io"> react-bootstrap </a>
        and some of them on
        <a href="https://mui.com/"> Material-UI</a>. You can read about all used packages in a
        description of components below and <Link to="/documentation/resources">here</Link>.
      </p>
    </CardBody>
  </Card>
);

export default Intro;
