import React from 'react';
import styled from 'styled-components';
import { AccountCard, AccountContent, AccountWrap } from '@/shared/components/account/AccountElements';
import { colorAdditional } from '@/utils/palette';
import LockScreenForm from './components/LockScreenForm';

const Ava = `${process.env.PUBLIC_URL}/img/11.png`;

const LockScreen = () => (
  <AccountWrap>
    <AccountContent>
      <AccountCard>
        <AccountProfile>
          <AvatarImage src={Ava} alt="" />
          <AccountName>Larry Boom</AccountName>
          <AccountSub>Unlock your account</AccountSub>
        </AccountProfile>
        <LockScreenForm onSubmit />
      </AccountCard>
    </AccountContent>
  </AccountWrap>
);

export default LockScreen;

// region STYLES

const AccountProfile = styled.div`
  text-align: center;
`;

const AvatarImage = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 50%;
  overflow: hidden;
`;

const AccountName = styled.p`
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 15px;
  margin-top: 5px;
`;

const AccountSub = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  color: ${colorAdditional};
  font-size: 11px;
  line-height: 15px;
`;

// endregion
