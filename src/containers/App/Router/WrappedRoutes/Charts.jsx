import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ChartsJS from '@/containers/Charts/ChartJs';
import ReactVis from '@/containers/Charts/ReactVis';
import Recharts from '@/containers/Charts/Recharts';
import Amcharts from '@/containers/Charts/Amcharts';

export default () => (
  <Switch>
    <Route path="/charts/charts_js" component={ChartsJS} />
    <Route path="/charts/react_vis" component={ReactVis} />
    <Route path="/charts/recharts" component={Recharts} />
    <Route path="/charts/amcharts" component={Amcharts} />
  </Switch>
);
