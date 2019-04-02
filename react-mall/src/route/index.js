import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Routes from './routeMap'

@connect(
  state => ({ token: state.token }),
)

class RouteConfig extends Component {
  render() {
    const { token } = this.props;
    return (
      <Router>
        <Switch>
          {Routes.map((item, index) => {
            return <Route key={index} path={item.path} exact render={props =>
              (!item.auth ? (<item.component {...props} />) : (token ? <item.component {...props} /> : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
              }} />)
              )} />
          })}
          <Redirect to='/' />
        </Switch>
      </Router>
    )
  }
}
export default RouteConfig;