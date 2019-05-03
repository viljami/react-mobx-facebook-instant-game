import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Quiz from './Quiz';
import Result from './Result';

export default () => (
  <Router>
    <Switch>
        <Route path='/quiz' component={Quiz} />
        <Route path='/result' component={Result} />
        <Redirect to='/quiz' />
    </Switch>
  </Router>
)
