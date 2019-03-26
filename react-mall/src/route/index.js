import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../views/home/index.js';
import Personal from '../views/personal/index.js';
// import Welcome from '../views/welcome/welcome';

export default class RouteConfig extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/personal' component={Personal} />
          <Redirect to='/' />
        </Switch>
      </Router>
    )
  }
}