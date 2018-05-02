import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';


ReactDOM.render(
  <App />, document.getElementById('app')
);

if (process.env.NODE_ENV !== 'production') {
  module.hot.accept();
}