import React, {Component} from 'react';
import {Provider, observer} from 'mobx-react';
import Answer from '../store/Answer';
import logo from '../assets/logo.svg';
import './App.css';

const answer = new Answer('camels');

@observer
class App extends Component {

  render() {
    return (
      <Provider answer={answer}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              {answer.greeting}
            </p>
            <button
              className="App-link"
              onClick={() => answer.updateTitle(10)}
            >
              Update
            </button>
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
