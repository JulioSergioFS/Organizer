import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home/index';
import Ideas from './pages/Ideas/index';

import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/ideas" component={Ideas} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
