import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
  <App store={store} />, document.getElementById('app')
);

if (process.env.NODE_ENV !== 'production') {
  module.hot.accept();
}