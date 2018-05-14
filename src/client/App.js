import React from 'react';
import {hot} from 'react-hot-loader';
import {Provider} from 'react-redux';
// import {IntlProvider} from 'react-intl'; <IntlProvider locale="en"></IntlProvider>


//import store from './store'; store={store}
import Router from './router';

class App extends React.Component {
  render() {
    return (
      <Provider>
            <Router />
      </Provider>
    );
  }
}

export default hot(module)(App);
