import React from 'react';
import CodeHighlither from '@/shared/components/CodeHighlither';
import {
  Card,
  CardBody,
  CardTitleWrap,
  CardTitle,
} from '@/shared/components/Card';

const CoinmarketcapAPI = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>CoinMarketCap API</CardTitle>
      </CardTitleWrap>
      <p>
        The{' '}
        <a href="https://coinmarketcap.com/api/documentation/v1/#">
          CoinMarketCap API{' '}
        </a>
        is a suite of high-performance RESTful JSON endpoints that are
        specifically designed to meet the mission-critical demands of
        application developers, data scientists, and enterprise business
        platforms.
      </p>
      <p>
        In order to get the data, the proxy server is used too. It is located in
        the same file.
      </p>
      <p>
        You have to sign up (or log in) to get your own API key. Here is a link:{' '}
        <a href="https://pro.coinmarketcap.com/login/">Sign up or log in</a>
      </p>
      <p>
        Then open 
        <b>
          <i> proxy.js  </i>
        </b> and change it a bit:
      </p>

      <CodeHighlither>
        {`
// This is an original method in proxy.js
app.get('/coinmarket/*', (req, res) => {
  const cutUrl = req.originalUrl.replace('/coinmarket', '');
  let url = \`https://pro-api.coinmarketcap.com\${cutUrl}\`
  
  axios
    .get(url, {
      headers: { 'X-CMC_PRO_API_KEY': <YOUR_API_KEY> }, // here you need to paste your API key
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
    </CardBody>
  </Card>
);

export default CoinmarketcapAPI;
