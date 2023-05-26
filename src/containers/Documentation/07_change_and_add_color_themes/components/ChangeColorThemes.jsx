import React from 'react';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';
import CodeHighlither from '@/shared/components/CodeHighlither';

const ChangeColorThemes = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Change Color Theme</CardTitle>
      </CardTitleWrap>
      <p>This template contains dark and light themes. All style variables are contained
        in <b>template/src/utils/</b> folder, and actions to change between them are located in template/src/redux.
      </p>
      <p>You can change values of the variables as you want or add new ones. There for types of the variables:</p>
      <ol>
        <li><b>mode</b> for colors;</li>
        <li><b>direction</b> for styles depending on rtl and ltr view;</li>
        <li><b>shadow</b> to choose between designs with and without shadows;</li>
        <li><b>border</b> to choose between styles with and without border radius.</li>
      </ol>

      <CodeHighlither>
        {`const colorBackground = theme('mode', {
  light: 'white',
  dark: '#232329',
});`}
      </CodeHighlither>
    </CardBody>
  </Card>
);

export default ChangeColorThemes;
