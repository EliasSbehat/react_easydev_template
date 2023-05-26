import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import RegisterForm from '@/shared/components/account/login_register/LoginRegisterForm';
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

const RegisterPhoto = ({ history }) => {
  const [error, setError] = useState('');

  const registerFireBase = (user) => {
    createUserWithEmailAndPassword(getAuth(), user.email, user.password)
      .then(() => {
        history.push('/log_in');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <AccountPhoto>
      <AccountContent>
        <AccountCard>
          <AccountHead>
            <AccountTitle>
              Welcome to
              <AccountLogo> Easy
                <AccountLogoAccent>DEV</AccountLogoAccent>
              </AccountLogo>
            </AccountTitle>
            <h4 className="subhead">Create an account</h4>
          </AccountHead>
          <RegisterForm onSubmit={registerFireBase} errorMessage={error} />
          <AccountHaveAccount>
            <p>Already have an account? <NavLink to="/log_in_photo">Login</NavLink></p>
          </AccountHaveAccount>
        </AccountCard>
      </AccountContent>
    </AccountPhoto>
  );
};

RegisterPhoto.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(RegisterPhoto);
