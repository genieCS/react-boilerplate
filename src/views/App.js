import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import PageA from './PageA';
import PageB from './PageB';

export default class App extends Component {
  render() {
    return (
      <div className="react-app">
        <Menu />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/a" component={ PageA } />
          <Route path="/b" component={ PageB } />
        </Switch>
      </div>
    );
  }
}
