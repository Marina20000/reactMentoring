import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

ReactDOM.render(
  <App />, document.getElementById('app')
);

if (process.env.NODE_ENV !== 'production') {
  module.hot.accept();
}