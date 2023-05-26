import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const AddNewNavItem = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Add New Navigation Item</CardTitle>
      </CardTitleWrap>
      <p>The template uses <a href="https://github.com/ReactTraining/react-router">react-router</a> for navigation.
        Add a new Route in <b>template/src/app/Router.js</b> to add new navigation item:
      </p>
      <CodeHighlither>
        {'<Route path=\'/path_to_page\' component={Page}/>'}
      </CodeHighlither>
      <p>Then add new SidebarLink in <b>template/src/pages/_layout/sidebar/SidebarContent.js</b></p>
      <CodeHighlither>
        {`<SidebarLink title='Page' route='/path_to_page' onClick={this.hideSidebar}/>
//also you can add icon`}
      </CodeHighlither>
      <p>Or add TopbarNavLink in <b>template/src/pages/_layout/topbar_with_navigation/topbar_nav</b> and
        SidebarLink in <b>template/src/pages/_layout/topbar_with_navigation/sidebar_mobile/SidebarContent.js</b>
        if you want use Top Menu
      </p>
      <CodeHighlither>
        {'<TopbarNavLink title=\'Page\' icon=\'store\' route=\'/path_to_page\'/>'}
      </CodeHighlither>
    </CardBody>
  </Card>
);

export default AddNewNavItem;
