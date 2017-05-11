import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import routes from './routes';
import App from './App';
// Import App Styles
import './styles/styles.scss';

// Redux enhancers
let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production') {
  // Integrate Redux devToolsExtension only if it is installed in client.
  if (window.devToolsExtension && typeof (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) === 'undefined') {
    /* eslint-disable no-console */
    console.warn('Redux DevTools Chrome Extension outdated! Update it to the latest version. ' +
      'See https://github.com/zalmoxisus/redux-devtools-extension');
    /* eslint-enable no-console */
  } else {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }
}

const logger = createLogger();

let middleware;

if (process.env.NODE_ENV !== 'production') {
  middleware = applyMiddleware(
    logger,
    reduxThunk,
  );
} else {
  middleware = applyMiddleware(
    reduxThunk,
  );
}

const store = createStore(
  reducers,
  composeEnhancers(middleware),
);

const enhancedBrowserHistory = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <AppContainer>
    <App store={store} history={enhancedBrowserHistory} routes={routes} />
  </AppContainer>
  , document.getElementById('app'));

// For hot reloading of react components
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line global-require
    ReactDOM.render(
      <AppContainer>
        <NextApp store={store} history={enhancedBrowserHistory} routes={routes} />
      </AppContainer>
    , document.getElementById('app'));
  });
}
