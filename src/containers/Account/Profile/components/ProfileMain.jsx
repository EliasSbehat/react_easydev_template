import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import MessageTextOutlineIcon from 'mdi-react/MessageTextOutlineIcon';
import { Card } from '@/shared/components/Card';
import { Button } from '@/shared/components/Button';
import { colorAdditional, colorBlue, colorBorder } from '@/utils/palette';
import { paddingLeft, left } from '@/utils/directions';
import { ProfileCard } from '../ProfileBasicComponents';

const Ava = `${process.env.PUBLIC_URL}/img/12.png`;

const ProfileMain = () => (
  <Col md={12} lg={12} xl={12}>
    <Card>
      <ProfileCard>
        <ProfileInformation>
          <ProfileAvatar>
            <img src={Ava} alt="avatar" />
          </ProfileAvatar>
          <ProfileData>
            <ProfileName>Larry Boom</ProfileName>
            <ProfileWork>Senior Account Manager</ProfileWork>
            <ProfileContact>mailmethisletter@gmail.com</ProfileContact>
            <ProfileContact dir="ltr">+23-123-743-23-21</ProfileContact>
            <ProfileButton variant="primary">
              <MessageTextOutlineIcon /> <span>Message</span>
            </ProfileButton>
          </ProfileData>
        </ProfileInformation>
        <ProfileStats>
          <ProfileStat>
            <ProfileStatNumber>05</ProfileStatNumber>
            <ProfileStatTitle>Projects</ProfileStatTitle>
          </ProfileStat>
          <ProfileStat>
            <ProfileStatNumber>24</ProfileStatNumber>
            <ProfileStatTitle>Tasks</ProfileStatTitle>
          </ProfileStat>
          <ProfileStat>
            <ProfileStatNumber>12</ProfileStatNumber>
            <ProfileStatTitle>Reports</ProfileStatTitle>
          </ProfileStat>
        </ProfileStats>
      </ProfileCard>
    </Card>
  </Col>
);

export default ProfileMain;

// region STYLES

const ProfileInformation = styled.div`
  padding: 30px 40px;
  display: flex;
  text-align: ${left};
  border-bottom: 1px solid ${colorBorder};

  @media (max-width: 1345px) and (min-width: 1200px) {
    padding: 30px 15px;
  }

  @media screen and (max-width: 360px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const ProfileAvatar = styled.div`
  height: 140px;
  width: 140px;
  overflow: hidden;
  border-radius: 50%;

  img {
    height: 100%;
  }

  @media (max-width: 1345px) and (min-width: 1200px) {
    height: 130px;
    width: 130px;
  }
`;

const ProfileData = styled.div`
  width: calc(100% - 140px);
  ${paddingLeft}: 25px;
  
  @media screen and (max-width: 360px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0;
  }
`;

const ProfileName = styled.p`
  font-weight: 900;
  text-transform: uppercase;
  margin: 0;
  line-height: 18px;
`;

const ProfileWork = styled.p`
  font-weight: 500;
  margin-bottom: 10px;
  margin-top: 0;
  opacity: 0.6;
  line-height: 18px;
`;

const ProfileContact = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  line-height: 18px;
`;

const ProfileButton = styled(Button)`
  margin-top: 10px;
  margin-bottom: 0;
  padding: 8px 15px;
`;

const ProfileStats = styled.div`
  display: flex;
  justify-content: space-around; 
`;

const ProfileStat = styled.div`
  text-align: center;
  padding-top: 5px;
  padding-bottom: 15px;
`;

const ProfileStatNumber = styled.p`
  color: ${colorBlue};
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
`;

const ProfileStatTitle = styled.p`
  margin: 0;
  color: ${colorAdditional};
  font-size: 12px;
  line-height: 14px;
`;

// endregion
