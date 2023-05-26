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
  AccountTitle,
  AccountWrap,
} from '@/shared/components/account/AccountElements';

const ResetPassword = props => (
  <AccountWrap>
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
          <p>Remember your password?  <NavLink to="/log_in">Login</NavLink></p>
        </AccountHaveAccount>
      </AccountCard>
    </AccountContent>
  </AccountWrap>
);

export default ResetPassword;
