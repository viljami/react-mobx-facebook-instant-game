/* global FBInstant */

import React from 'react';
import ReactDOM from 'react-dom';
import {onError} from "mobx-react"
import App from './components/App';
import * as serviceWorker from './lib/serviceWorker';
import './index.scss';

window.addEventListener('load', function load() {
  window.removeEventListener('load', load);

  FBInstant
  .initializeAsync()
  .then(() => {
    FBInstant.setLoadingProgress(100);
  })
  .then(FBInstant.startGameAsync);
});

ReactDOM.render(<App />, document.getElementById('root'));

onError(console.log);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
