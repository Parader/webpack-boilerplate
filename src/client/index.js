//import intl from 'intl';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// global styles
import './styles/styles.scss';

// apply polyfill
// if (!window.Intl) {
//   window.Intl = intl;
// }

// api.setEndpoint('/api');

ReactDOM.render(<App />, document.getElementById('app'));
