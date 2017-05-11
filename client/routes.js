import React from 'react';
import { Route, IndexRoute } from 'react-router';

// All components need to be imported to ensure hot reloading works properly
import App from './components/App';
import Landing from './components/Landing';
import Main from './components/Main';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Landing} />
    <Route path="dashboard" component={Main} />
  </Route>
);
