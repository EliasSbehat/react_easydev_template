import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import EmailOutlineIcon from 'mdi-react/EmailOutlineIcon';
import { colorAdditional, colorBorder } from '@/utils/palette';
import { right, marginRight, left } from '@/utils/directions';
import { Button } from '@/shared/components/Button';

const ProjectMember = ({
  img, name, post, link,
}) => (
  <ProjectMemberWrap>
    <ProjectMemberAvatarWrap>
      <img src={img} alt="" />
    </ProjectMemberAvatarWrap>
    <div>
      <ProjectMemberName>{name}</ProjectMemberName>
      <ProjectMemberPost>{post}</ProjectMemberPost>
    </div>
    <ProjectMemberLink
      as={Link}
      variant="outline-primary"
      to={link}
    >
      <EmailOutlineIcon />
    </ProjectMemberLink>
  </ProjectMemberWrap>
);

ProjectMember.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  post: PropTypes.string,
  link: PropTypes.string.isRequired,
};

ProjectMember.defaultProps = {
  post: '',
};

export default ProjectMember;

// region STYLES

const ProjectMemberWrap = styled.div`
  display: flex;
  position: relative;
  padding: 10px 0;
  text-align: ${left};
  border-bottom: 1px solid ${colorBorder};

  &:last-child {
    border-bottom: none;
  }
`;

const ProjectMemberLink = styled(Button)`
  margin-top: 3px;
  position: absolute;
  ${right}: 0;
  padding: 5px 10px;
  line-height: 16px;

  svg {
    ${marginRight}: 0;
    margin-top: 2px;
    height: 16px;
    width: 16px;
  }
`;

const ProjectMemberAvatarWrap = styled.div`
  width: 40px;
  min-width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  ${marginRight}: 10px;

  img {
    height: 100%;
    min-width: 100%;
  }
`;

const ProjectMemberName = styled.p`
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 0;
  margin-top: 3px;
`;

const ProjectMemberPost = styled.p`
  color: ${colorAdditional};
  line-height: 15px;
  font-size: 11px;
  margin: 0;
  
  @media (max-width: 1100px) and (min-width: 990px) {
    font-size: 10px;
  }
`;

// endregion
