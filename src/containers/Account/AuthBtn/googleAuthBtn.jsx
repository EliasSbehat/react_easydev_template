import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import GoogleLogin from 'react-google-login';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import { auth, authError } from '@/redux/actions/authActions';
import { AccountSocialButtonGoogle } from '@/shared/components/account/AccountElements';
import googleAuthSetting from '../../../config/google';

const AuthGoogleBtn = ({ history }) => {
  const { t } = useTranslation('errors');
  const dispatch = useDispatch();

  const responseSuccess = (response) => {
    dispatch(auth({ name: response.profileObj.name, avatar: response.profileObj.imageUrl }));
    localStorage.setItem('easydev', response.accessToken);
    history.push('/online_marketing_dashboard');
  };

  const responseError = (response) => {
    console.trace();
    dispatch(authError(t(response.error)));
  };

  return (
    <GoogleLogin
      clientId={googleAuthSetting.client_id}
      render={renderProps => (
        <AccountSocialButtonGoogle
          onClick={renderProps.onClick}
          type="button"
        >
          <GooglePlusIcon />
        </AccountSocialButtonGoogle>
      )}
      onSuccess={responseSuccess}
      onFailure={responseError}
      cookiePolicy="single_host_origin"
    />
  );
};

AuthGoogleBtn.propTypes = {
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(AuthGoogleBtn);
