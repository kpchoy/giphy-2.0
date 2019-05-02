import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configStore from './store/store';

import {
  HashRouter
} from 'react-router-dom';
import {
  Provider
} from 'react-redux';

const Root = () => {
  const store = configStore();

  return (
    <Provider store={store} >
      <HashRouter >
        <App />
      </HashRouter>
    </Provider >
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  ReactDOM.render(< Root />, root)
})



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();