import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GoogleMap from '@/containers/Maps/GoogleMap';
import VectorMap from '@/containers/Maps/VectorMap';
import VectorMapWithRequestData from '@/containers/Maps/VectorMapWithRequestData';

export default () => (
  <Switch>
    <Route path="/maps/google_map" component={GoogleMap} />
    <Route path="/maps/vector_map" component={VectorMap} />
    <Route path="/maps/map_with_request" component={VectorMapWithRequestData} />
  </Switch>
);
