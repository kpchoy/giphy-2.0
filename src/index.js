import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import {
  apiFetchGifs
} from './utils/api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  // window.apiFetchGifs = apiFetchGifs("happy");
  ReactDOM.render( < App / > , root)
})



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();