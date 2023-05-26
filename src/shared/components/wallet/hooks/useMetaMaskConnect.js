import {
 useRef, useState, useEffect, useCallback, 
} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import MetaMaskOnboarding from '@metamask/onboarding';
import { connectWallet, connectWalletError } from '@/redux/actions/walletActions';

const useMetaMaskConnect = () => {
  const history = useHistory();
  const onboarding = useRef();
  const [isDisabled, setDisabled] = useState(false);
  const [accounts, setAccounts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!onboarding.current) {
      onboarding.current = new MetaMaskOnboarding();
    }
  }, []);

  useEffect(() => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
      if (accounts.length > 0) {
        setDisabled(true);
        onboarding.current.stopOnboarding();
      } else {
        setDisabled(false);
      }
    }
  }, [accounts]);

  const connect = useCallback(async () => {
    if (MetaMaskOnboarding.isMetaMaskInstalled()) {
     try {
      const permissions = await window.ethereum.request({
        method: 'wallet_requestPermissions',
        params: [{ eth_accounts: {} }],
      });
      const acc = permissions[0].caveats[0].value;
      dispatch(connectWallet(acc[0]));
      setAccounts(acc);
      history.push('/online_marketing_dashboard');
     } catch (e) {
      dispatch(connectWalletError(e.message));
     }
    } else {
      onboarding.current.startOnboarding();
    }
  }, [dispatch, history]);

  return { connect, isDisabled };
};

export default useMetaMaskConnect;
