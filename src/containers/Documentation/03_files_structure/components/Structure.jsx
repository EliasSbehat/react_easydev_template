import React from 'react';
import styled from 'styled-components';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const Structure = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Project Structure</CardTitle>
      </CardTitleWrap>
      <p>EasyDEV has two projects:</p>
      <p><b>/template/...</b> - contains all components and pages which you can to find
        <a href="http://previews.aspirity.com/easydev/" target="_blank" rel="noopener noreferrer"> here</a>:
      </p>
      <StructureBlock>
        <code>
          {`easydev/
|——template
|  |——config/
|  |——public/
|  |  |——img/
|  |  |——fav.ico
|  |  |——index.html
|  |——src/
|  |  |——containers/
|  |  |    |——Account/          --lock screens, log in, register, profile
|  |  |    |——App/              --App.js, Router.js
|  |  |    |——Charts/           --pages with different charts
|  |  |    |——Dashboards/       --default, e-commerce, fitness
|  |  |    |——DefaultPages/     --calendar, gallery, chat, etc.
|  |  |    |——Documentation/    --documentation of the template
|  |  |    |——ECommerce/        --cart, catalog, product page, etc.
|  |  |    |——Form/             --react-final-form, materiual-ui-next, react-hook-form
|  |  |    |——Landing/
|  |  |    |——Layout/           --topbar, sidebar
|  |  |    |——Mail/             --inbox page
|  |  |    |——Maps/             --google map, highmap
|  |  |    |——Tables/           --bootstrap tables, data tables, material table
|  |  |    |——UI/               --ui elements
|  |  |——redux/
|  |  |    |——actions/
|  |  |    |——reducers/
|  |  |——shared/
|  |  |    |——components/
|  |  |    |——prop-types/
|  |  |——translations/
|  |  |——index.js
|  |——package.json
|  |——package-lock.json
`}
        </code>
      </StructureBlock>
      <p><b>/seed/...</b> - contains main components and examples of pages:</p>
      <StructureBlock>
        <code>
          {`easydev/
|——seed
|  |——config/
|  |——public/
|  |  |——img/
|  |  |——fav.ico
|  |  |——index.html
|  |——src/
|  |  |——pages/
|  |  |    |——App/              --App.js, Router.js
|  |  |    |——Example/          --example of page
|  |  |    |——ExampleTwo/       --example of page
|  |  |    |——Layout/           --topbar, sidebar
|  |  |    |——UI/               --example of log in page
|  |  |——redux/
|  |  |    |——actions/
|  |  |    |——reducers/
|  |  |——shared/
|  |  |    |——components/
|  |  |    |——prop-types/
|  |  |——index.js
|  |——package.json
|  |——package-lock.json
`}
        </code>
      </StructureBlock>
      <p>
        In v.1.4.0 was added <b>seed-without-redux</b>. It has the same structure as the other seed,
        except redux and react-final-form.
      </p>
    </CardBody>
  </Card>
);

export default Structure;

// region STYLES

const StructureBlock = styled.pre`
  color: rgb(169, 183, 198);
  padding: 10px 15px;
`;

// endregion
