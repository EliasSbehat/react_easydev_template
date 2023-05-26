import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import FacebookIcon from 'mdi-react/FacebookIcon';
import { auth, authError } from '@/redux/actions/authActions';
import { AccountSocialButtonFacebook } from '@/shared/components/account/AccountElements';
import facebookAuthSettings from '../../../config/facebook';

const AuthFacebookeBtn = ({ history }) => {
  const { t } = useTranslation('errors');
  const dispatch = useDispatch();

  const responseSuccess = (response) => {
    if (response.status) {
      dispatch(authError(t(response.status)));
    } else {
      dispatch(auth({ name: response.name, avatar: response.picture.data.url }));
      localStorage.setItem('easydev', response.accessToken);
      history.push('/online_marketing_dashboard');
    }
  };

  return (
    <FacebookLogin
      appId={facebookAuthSettings.appId}
      fields="name,email,picture"
      render={renderProps => (
        <AccountSocialButtonFacebook
          type="button"
          onClick={renderProps.onClick}
        >
          <FacebookIcon />
        </AccountSocialButtonFacebook>
      )}
      callback={responseSuccess}
    />
  );
};

AuthFacebookeBtn.propTypes = {
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(AuthFacebookeBtn);
