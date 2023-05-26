import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colorAdditional, colorBlue } from '@/utils/palette';
import { marginRight } from '@/utils/directions';

const ProfileActivity = ({
  img, name, date, children,
}) => (
  <ProfileActivityWrap>
    <ProfileActivityAvatar>
      <img src={img} alt="" />
    </ProfileActivityAvatar>
    <div>
      <ProfileActivityName>
        {name}
        <ProfileActivityDate> {date}</ProfileActivityDate>
      </ProfileActivityName>
      {children}
    </div>
  </ProfileActivityWrap>
);

ProfileActivity.propTypes = {
  date: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ProfileActivity.defaultProps = {
  date: '',
  img: '',
  name: '',
};

export default ProfileActivity;

// region STYLES

const ProfileActivityWrap = styled.div`
  display: flex;
  border-bottom: solid 1px #e7e7e7;
  padding: 20px 0;

  &:last-child {
    border: none;
  }

  img {
    display: inline-block;
    vertical-align: top;
    margin-top: 10px;
    width: auto;
    ${marginRight}: 20px;

    &:last-child {
      ${marginRight}: 0;
    }

    @media screen and (max-width: 576px) {
      width: 100%;
    }
  }
`;

const ProfileActivityAvatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  min-width: 64px;
  ${marginRight}: 20px;

  img {
    height: 64px;
    width: 64px;
    margin: 0;
  }
`;

const ProfileActivityName = styled.p`
  font-weight: 700;
  color: ${colorBlue};
`;

const ProfileActivityDate = styled.span`
  font-weight: 400;
  color: ${colorAdditional};
  font-size: 10px;
`;

// endregion
