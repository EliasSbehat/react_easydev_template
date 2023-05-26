import React from 'react';
import PropTypes from 'prop-types';
import FirebaseIcon from 'mdi-react/FirebaseIcon';
import withAuthFirebase from '@/shared/components/account/auth/withAuthFirebase';
import LogInFormPhoto from '@/shared/components/account/loginPhotoForm/LogInFormPhoto';
import showResults from '@/utils/showResults';
import { login as loginAuth0 } from '@/shared/components/account/auth/withAuth0';
import {
  AccountCard,
  AccountContent,
  AccountHead,
  AccountLogo,
  AccountLogoAccent,
  AccountOr,
  AccountPhoto,
  AccountSocial,
  AccountSocialButtonAuth0,
  AccountSocialButtonFirebase,
  AccountTitle,
} from '@/shared/components/account/AccountElements';
import GoogleAuthBtn from '../AuthBtn/googleAuthBtn';
import FacebookAuthBtn from '../AuthBtn/fbAuthBtn';
import MicrosoftAuthBtn from '../AuthBtn/microsoftAuthBtn';
import MetaMaskAuthBtn from '../AuthBtn/metaMaskAuthBtn';
import WalletConnectAuthBtn from '../AuthBtn/walletConnectAuthBtn';

const auth0Icon = `${process.env.PUBLIC_URL}/img/auth0.svg`;

const LogInPhoto = ({ changeIsOpenModalFireBase }) => (
  <AccountPhoto>
    <AccountContent>
      <AccountCard>
        <AccountHead>
          <AccountTitle>Welcome to
            <AccountLogo> Easy
              <AccountLogoAccent>DEV</AccountLogoAccent>
            </AccountLogo>
          </AccountTitle>
          <h4 className="subhead">Start your business easily</h4>
        </AccountHead>
        <LogInFormPhoto
          onSubmit={showResults}
          form="log_in_form"
        />
        <AccountOr>
          <p>Or Easily Using</p>
        </AccountOr>
        <AccountSocial>
          <FacebookAuthBtn />
          <GoogleAuthBtn />
          <MicrosoftAuthBtn />
          <AccountSocialButtonFirebase
            variant="secondary"
            onClick={changeIsOpenModalFireBase}
          >
            <FirebaseIcon />
          </AccountSocialButtonFirebase>
          <AccountSocialButtonAuth0
            variant="secondary"
            onClick={loginAuth0}
          >
            <img className="customizer__btn-icon" src={auth0Icon} alt="icon" />
          </AccountSocialButtonAuth0>
          <MetaMaskAuthBtn />
          <WalletConnectAuthBtn />
        </AccountSocial>
      </AccountCard>
    </AccountContent>
  </AccountPhoto>
);

LogInPhoto.propTypes = {
  changeIsOpenModalFireBase: PropTypes.func.isRequired,
};

export default withAuthFirebase(LogInPhoto);
