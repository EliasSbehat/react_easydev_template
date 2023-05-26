import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Provider, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { LoadScript } from '@react-google-maps/api';
import initAuth0 from '@/shared/components/account/auth/withAuth0';
import TimepickerStyles from '@/shared/components/form/date-pickers/timepickerStyles';
import Loading from '@/shared/components/Loading';
import WalletConnectProvider from '@/shared/components/account/auth/WalletConnect';
import Router from './Router';
import store from './store';
import ScrollToTop from './ScrollToTop';
import { config as i18nextConfig } from '../../translations';
import GlobalStyles from './globalStyles';
import RechartStyles from './rechartStyles';
import NotificationStyles from './notificationStyles';
import CalendarStyles from './calendarStyles';

i18n.init(i18nextConfig);

const ThemeComponent = ({
  children, 
}) => {
  const {
    mode, direction, shadow, border,
  } = useSelector(state => ({
    mode: state.theme.className,
    direction: state.rtl.direction,
    shadow: state.shadow.className,
    border: state.border.className,
  }));
  
  const theme = createTheme({
    palette: {
      type: mode,
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider
        theme={{
          mode,
          direction,
          shadow,
          border,
        }}
      >
        <GlobalStyles />
        <NotificationStyles />
        <RechartStyles />
        <TimepickerStyles />
        <CalendarStyles />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

ThemeComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

const ConnectedThemeComponent = ThemeComponent;

const App = () => {
  useEffect(() => {
    window.addEventListener('load', initAuth0);
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter basename="/easydev">
        <I18nextProvider i18n={i18n}>
          <WalletConnectProvider>
            <ConnectedThemeComponent>
              <LoadScript
                loadingElement={<Loading loading />}
                googleMapsApiKey=""
              >
                <ScrollToTop>
                  <Router />
                </ScrollToTop>
              </LoadScript>
            </ConnectedThemeComponent>
          </WalletConnectProvider>
        </I18nextProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

