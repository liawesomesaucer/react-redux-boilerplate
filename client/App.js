import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

export default function App({ store, history, routes }) {
  return (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  );
}

App.propTypes = {
  store: React.PropTypes.object,  // eslint-disable-line
  history: React.PropTypes.object, // eslint-disable-line
  routes: React.PropTypes.object, // eslint-disable-line
};
