import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, CardBody } from '@/shared/components/Card';
import { colorAccent, colorText } from '@/utils/palette';

const navigationLinksData = [
  { link: 'introduction', title: 'Introduction' },
  { link: 'installation', title: 'Installation' },
  { link: 'file_structure', title: 'File Structure' },
  { link: 'components', title: 'Components' },
  { link: 'finance_dashboard', title: 'Finance dashboard' },
  { link: 'form', title: 'Form' },
  { link: 'color_themes', title: 'Color Themes' },
  { link: 'navigation_item', title: 'Navigation Item' },
  { link: 'authentication', title: 'Authentication' },
  { link: 'resources', title: 'Resources' },
  { link: 'changelog', title: 'Changelog' },
  { link: 'faq', title: 'FAQ Troubleshooting' },
];

const Navigation = ({ active }) => (
  <DocumentationNavWrap height="auto">
    <CardBody>
      {navigationLinksData.map(item => (
        <DocumentationNavLink
          key={`index_${item.link}`}
          to={`/documentation/${item.link}`}
          active={active === item.link}
        >
          {item.title}
        </DocumentationNavLink>
      ))}
    </CardBody>
  </DocumentationNavWrap>
);

Navigation.propTypes = {
  active: PropTypes.string,
};

Navigation.defaultProps = {
  active: '',
};

export default Navigation;

// region STYLES

const DocumentationNavWrap = styled(Card)`
  width: 100%;
  position: sticky;
  top: 70px;

  @media screen and (max-width: 991px) {
    position: relative !important;
    top: 0 !important;
    margin-top: 0 !important;
    width: 100% !important;
  }
`;

const DocumentationNavLink = styled(Link).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => !['active'].includes(prop) && defaultValidatorFn(prop),
})`
  display: block;
  padding: 5px 0;
  font-weight: 400;
  width: 100%;
  font-size: 14px;
  color: ${props => (props.active ? colorAccent : colorText)};

  &:hover {
    color: ${colorAccent};
  }
`;

// endregion
