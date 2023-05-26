import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardTitleWrap,
  CardTitle,
} from '@/shared/components/Card';

const InstallationSteps = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Installation</CardTitle>
      </CardTitleWrap>
      <p>
        EasyDEV is based on create-react-app and has its README.md which you can
        find very useful.
      </p>
      <p>To get started follow this steps:</p>
      <ol>
        <li>
          Install <a href="https://nodejs.org/en/">Node</a>, npm and
          <a href="https://docs.docker.com/get-docker/"> Docker</a>.
        </li>
        <li>Download and open project.</li>
        <li>
          Install packages: <b>npm i</b>, <b>npm install</b> or{' '}
          <b>yarn install</b>.
        </li>
        <li>
          Here are two ways how the project can be started:
          <ol>
            <li>
              <b>npm start</b> or <b>yarn start</b> (running on port 3000). But
              the proxy server won&apos;t be started and CoinCap and CoinMarketCap
              API&apos;s won&apos;t work. So{' '}
              <Link to="/documentation/finance_dashboard">
                Finance dashboard
              </Link>{' '}
              won&apos;t display any data.
            </li>
            <li>
              <b>docker-compose up</b> (running on port 3000). In this case,
              the proxy server will be started and CoinCap and CoinMarketCap API&apos;s
              will work. So{' '}
              <Link to="/documentation/finance_dashboard">
                Finance dashboard
              </Link>{' '}
              will display the data. Here you
              can read about{' '}
              <a href="https://docs.docker.com/get-started/08_using_compose/">
                docker-compose
              </a>.
            </li>
          </ol>
        </li>
        <li>Make necessary changes.</li>
        <li>
          Build app for production: <b>npm run build</b> or <b>yarn build</b>.
        </li>
      </ol>
      <p>
        <b>Video instruction:</b>
      </p>
      <VideoInstructionWrap>
        <iframe
          src="https://player.vimeo.com/video/296369527"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Install video"
        />
      </VideoInstructionWrap>
    </CardBody>
  </Card>
);

export default InstallationSteps;

// region STYLES

const VideoInstructionWrap = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

// endregion
