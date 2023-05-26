import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import { Table } from '@/shared/components/TableElements';

const RangeSliders = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Range Sliders</CardTitle>
      </CardTitleWrap>
      <p>Sliders are based on <a href="https://github.com/schrodinger/rc-slider">rc-slider</a>. The template has two
        types of Sliders: one-value slider and range slider.
      </p>
      <CodeHighlither>
        {`import React from 'react';
import Slider from 'template/src/components/range_slider/Slider'; // or Range

const Example = () => (
  <Slider
    min={0}
    max={100}
    value={34}
    marks={{0: '0', 20: '20', 40: '40', 60: '60', 80: '80', 100: '100'}}
  />
);

export default Example;`}
      </CodeHighlither>
      <p>Props of Slider and Range:</p>
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
            <td>min (<span className="red-text">isRequired</span>)</td>
            <td>number</td>
            <td>Minimal value of slider</td>
          </tr>
          <tr>
            <td>max (<span className="red-text">isRequired</span>)</td>
            <td>number</td>
            <td>Maximum value of slider</td>
          </tr>
          <tr>
            <td>value</td>
            <td>number</td>
            <td>Start point</td>
          </tr>
          <tr>
            <td>tipFormatter</td>
            <td>func</td>
            <td>{'Format of tooltip: e.g. tipFormatter={value => value}'}</td>
          </tr>
          <tr>
            <td>marks</td>
            <td>object</td>
            <td>Mark on the slider</td>
          </tr>
        </tbody>
      </Table>
    </CardBody>
  </Card>
);

export default RangeSliders;
