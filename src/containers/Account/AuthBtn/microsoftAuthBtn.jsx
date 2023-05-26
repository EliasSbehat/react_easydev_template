import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import MicrosoftOfficeIcon from 'mdi-react/MicrosoftOfficeIcon';
import { auth, authError } from '@/redux/actions/authActions';
import { PublicClientApplication } from '@azure/msal-browser';
import { AccountSocialButtonOffice } from '@/shared/components/account/AccountElements';
import microsoftAuthSettings from '../../../config/microsoft';

const MicrosoftAuthBtn = ({ history }) => {
  const msalInstance = new PublicClientApplication(microsoftAuthSettings);
  const dispatch = useDispatch();

  const onClick = async () => {
    try {
      const { account: { username }, accessToken } = await msalInstance.loginPopup({
          redirectUri: microsoftAuthSettings.redirectUri,
      });
      dispatch(auth({ name: username }));
      localStorage.setItem('easydev', accessToken);
      history.push('/online_marketing_dashboard');
    } catch (e) {
      dispatch(authError(e.message));
    }
  };

  return (
    <AccountSocialButtonOffice
      type="button"
      onClick={onClick}
    >
      <MicrosoftOfficeIcon />
    </AccountSocialButtonOffice>
  );
};

MicrosoftAuthBtn.propTypes = {
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(MicrosoftAuthBtn);
