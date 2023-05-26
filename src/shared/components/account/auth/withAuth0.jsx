import createAuth0Client from '@auth0/auth0-spa-js';
import config from '../../../../config/auth0';
import store from '../../../../containers/App/store';
import { auth } from '../../../../redux/actions/authActions';

let auth0 = null;

const configureClient = async () => {
  try {
    auth0 = await createAuth0Client({
      domain: config.domain,
      client_id: config.clientId,
    });  
  } catch (e) {
    console.log(e);
  }
};

const updateState = async () => {
  try {
    const isAuthenticated = await auth0?.isAuthenticated();
    if (isAuthenticated) {
      // In real project you will get the data below from backend api
      const user = await auth0.getUser();
      store.dispatch(auth({
        name: user.name,
        avatar: user.picture,
      }));
    }
  } catch (e) {
    console.log(e);
  }
};

const initAuth0 = async () => {
  try {
    await configureClient();
    updateState();
    const isAuthenticated = await auth0?.isAuthenticated();
    if (isAuthenticated) {
      return;
    }

    const query = window.location.search;

    if (query.includes('code=') && query.includes('state=')) {
      await auth0.handleRedirectCallback();
      updateState();
      window.history.replaceState({}, document.title, '/');
    }
  } catch (e) {
    console.log(e);
  }
};

export const login = async () => {
  try {
    await auth0.loginWithRedirect({
      redirect_uri: config.redirectUri,
    });
  } catch (e) {
    console.log(e);
  }
};

export const logout = async () => {
  try {
    const isAuthenticated = await auth0?.isAuthenticated();
    if (isAuthenticated) {
      auth0.logout({
        returnTo: config.returnTo,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export default initAuth0;
