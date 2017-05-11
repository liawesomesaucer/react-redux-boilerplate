import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
// import Header from './Header';

export default function App(props) {
  return (
    <div className="stretch">
      <div className="stretch">
        <Helmet
          title="Avant-Garde"
          titleTemplate="%s"
          meta={[
            { charset: 'utf-8' },
            {
              'http-equiv': 'X-UA-Compatible',
              content: 'IE=edge',
            },
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
          ]}
        />
        {/* <Header /> */}
        <div className="stretch">
          {props.children}
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
};
