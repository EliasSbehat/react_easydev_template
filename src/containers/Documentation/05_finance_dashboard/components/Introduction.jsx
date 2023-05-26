import React from 'react';
import {
  Card,
  CardBody,
  CardTitleWrap,
  CardTitle,
} from '@/shared/components/Card';

const Introduction = () => (
  <Card height="auto">
    <CardBody>
      <CardTitleWrap>
        <CardTitle>Introduction</CardTitle>
      </CardTitleWrap>
      <p>
        Finance dashboard has different cards and panels with data.
        Two API is used here in order to display this data: CoinCap and CoinMarketCap.
      </p>
    </CardBody>
  </Card>
);

export default Introduction;
