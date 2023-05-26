import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card,
  CardBody,
  CardTitleWrap,
  CardTitle,
} from '@/shared/components/Card';

const CoinCapAPI = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>CoinCap API</CardTitle>
      </CardTitleWrap>
      <p>
        CoinCap API is a useful tool for real-time pricing and market activity
        for over 1,000 cryptocurrencies
      </p>
      <p>
        In order to get the data, a proxy server was created. It is located in
        the{' '}
        <b>
          <i>proxy</i>
        </b>{' '}
        folder.
      </p>
      <p>We do not use the API key, that is why there are some limits:</p>
      <ul>
        <li>200 requests per minute</li>
        <li>11 years historical data</li>
      </ul>
      <p>
        If you want more requests per minute, then you have to get the API
        key. In this case, you will have 500 requests per minute. Here is where
        you can get your API key:{' '}
        <a href="https://coincap.io/api-key" target="_blink">
          get the API key
        </a>
        . Also you have to add headers to the proxy. You need to open the file{' '}
        <b>
          <i>proxy.js</i>
        </b>
      </p>

      .
      <CodeHighlither>
        {`
// This is an original method in proxy.js
app.get('/coincap/*', (req, res) => {
const cutUrl = req.originalUrl.replace('/coincap', '');
let url = \`https://api.coincap.io\${cutUrl}\`;

axios
  .get(url, {
    headers: { }, // there are headers
  })
  .then((response) => {
    res.send(response.data);
  })
  .catch((err) => {
    console.log(err.response.data);
    res.status(err.response.status).send(err.response.data);
  });
});`}
      </CodeHighlither>
      <p>You need to make some changes in this file if you decide to use the API key.</p>
      <CodeHighlither>
        {`// You need to replace this:
headers: { }
// with this:
headers: { Authorization: "Bearer <YOUR_API_KEY>" }
          `}
      </CodeHighlither>
    </CardBody>
  </Card>
);

export default CoinCapAPI;
