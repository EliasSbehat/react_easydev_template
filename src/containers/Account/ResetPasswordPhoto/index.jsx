import React from 'react';
import { NavLink } from 'react-router-dom';
import showResults from '@/utils/showResults';
import ResetPasswordForm from '@/shared/components/account/reset_password/ResetPasswordForm';
import {
  AccountCard,
  AccountContent,
  AccountHaveAccount,
  AccountHead,
  AccountLogo,
  AccountLogoAccent,
  AccountPhoto,
  AccountTitle,
} from '@/shared/components/account/AccountElements';

const ResetPasswordPhoto = props => (
  <AccountPhoto>
    <AccountContent>
      <AccountCard>
        <AccountHead>
          <AccountTitle>Welcome to
            <AccountLogo> Easy
              <AccountLogoAccent>DEV</AccountLogoAccent>
            </AccountLogo>
          </AccountTitle>
          <h4 className="subhead">Password reset</h4>
        </AccountHead>
        <ResetPasswordForm
          {...props}
          onSubmit={showResults}
        />
        <AccountHaveAccount>
          <p>Remember your password?  <NavLink to="/log_in_photo">Login</NavLink></p>
        </AccountHaveAccount>
      </AccountCard>
    </AccountContent>
  </AccountPhoto>
);

export default ResetPasswordPhoto;
