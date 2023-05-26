import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card, CardBody, CardTitleWrap, CardTitle,
} from '@/shared/components/Card';

const WalletConnect = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>WalletConnect</CardTitle>
      </CardTitleWrap>
      <p>For authorization using WalletConnect you need:</p>
      <ol>
        <li>
          Head over to 
          <a href="https://cloud.walletconnect.com/" target="_blank" rel="noreferrer"> WalletConnect Cloud </a>
          to sign in or sign up. Create (or use an existing) project.
        </li>
        <li>
          Copy its associated Project ID to a file <b>template/src/config/walletConnect.js</b>
          <CodeHighlither>
            {`export default {
  projectId: 'YOUR_PROJECT_ID',
};`}
          </CodeHighlither>
        </li>
        <li>
          Use connect/disconnect functions and walletId of useWalletConnectModal hook from 
          <b> template/src/shared/components/wallet/hooks/useWalletConnectModal.js</b>
          <CodeHighlither>
            {`const { connect, disconnect, walletId } = useWalletConnectModal();

return (
  <>
    <Button onClick={connect}>Connect</Button>
    <Button onClick={disconnect}>Disconnect</Button>
  </>
);`}
          </CodeHighlither>
        </li>
      </ol>
    </CardBody>
  </Card>
);

export default WalletConnect;
