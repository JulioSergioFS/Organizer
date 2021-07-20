import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home';
import Ideas from './pages/Ideas';
import Calendar from './pages/Calendar';
import Reminders from './pages/Reminders';
import ToDo from './pages/ToDo';

import { BrowserRouter, Switch, Route } from "react-router-dom";

console.log("pull request test")

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
