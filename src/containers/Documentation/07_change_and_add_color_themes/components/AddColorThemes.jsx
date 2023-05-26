import React from 'react';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const AddColorThemes = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Add Color Theme</CardTitle>
      </CardTitleWrap>
      <p>To create a new color theme for your project you have to:</p>
      <ol>
        <li>
          choose a new name for it and create a new action in template/src/redux;
        </li>
        <li>
          then add new values for each variable in template/src/utils/palette.js;
        </li>
      </ol>
      <p>
        Variables for ltr-rtl are contained in template/src/utils/directions.js,
        and for shadow and border-radius styles are in template/src/utils/styles.js.
      </p>
      <p />
      <p>
        For more information read the following documentation:
        {' '}
        <a href="https://styled-components.com/docs/advanced#theming" target="_blank" rel="noreferrer">
          https://styled-components.com/docs/advanced#theming
        </a>
      </p>
    </CardBody>
  </Card>
);

export default AddColorThemes;
