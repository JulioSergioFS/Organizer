import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home/index';
import Ideas from './pages/Ideas/index';
import Calendar from './pages/Calendar/index';
import Reminders from './pages/Reminders/index';
import ToDo from './pages/ToDo/index';

import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/ideas" component={Ideas} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/reminders" component={Reminders} />
        <Route path="/to-do" component={ToDo} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
