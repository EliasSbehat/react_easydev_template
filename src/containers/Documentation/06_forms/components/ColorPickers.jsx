import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const ColorPickers = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Color Pickers</CardTitle>
      </CardTitleWrap>
      <p>ColorPickers are based on <a href="https://github.com/casesandberg/react-color/">react-color</a>.
        There are three types of these pickers: sketch, block and chrome. Example of using one of them:
      </p>
      <CodeHighlither>
        {`import renderBlockColorPickerField from '@/shared/components/form/BlockColorPicker';
import renderSketchColorPickerField from '@/shared/components/form/SketchColorPicker';
import renderChromeColorPickerField from '@/shared/components/form/ChromeColorPicker';`}
      </CodeHighlither>
      <CodeHighlither>
        {`<Field
  name='sketch_color'
  component={renderSketchColorPickerField}
/>`}
      </CodeHighlither>
      <p>You can find other types of color pickers <a href="http://casesandberg.github.io/react-color/">here </a>
        and create your own in this template.
      </p>
    </CardBody>
  </Card>
);

export default ColorPickers;
