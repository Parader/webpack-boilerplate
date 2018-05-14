import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './react/pages/Home.jsx';
import Login from './react/pages/Login.jsx';

export default function() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" name="login" component={Login} />
        <Route path="/" name="home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
