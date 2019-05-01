import React from 'react';
import {Provider} from 'mobx-react';
import Answer from '../store/Answer';
import logo from '../assets/logo.svg';
import './App.css';

const answer = new Answer();

const app = () => (
  <Provider answer={answer}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </Provider>
);

export default app;
