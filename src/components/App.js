import React, {Component} from 'react';
import {Provider} from 'mobx-react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import Answer from '../store/Answer';
import Quiz from './Quiz';
import Result from './Result';
import './App.css';

const answer = new Answer('camels');

class App extends Component {
  render() {
    return (
      <Provider answer={answer}>
        <Router>
          <Switch>
              <Route path='/quiz' component={Quiz} state={answer} />
              <Route path='/result' component={Result} state={answer} />
              <Redirect to='/quiz' />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
