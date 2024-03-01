const express = require('express');
const server = express();


// require('babel-core/register');
// ['.css', '.less', '.sass', '.ttf', '.woff', '.woff2'].forEach((ext) => require.extensions[ext] = () => {});
// require('babel-polyfill');

if(process.env.NODE_ENV === 'development'){
  const webpack = require('webpack');
  const config = require('../webpack');
  const compiler = webpack(config);
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackHotServerMiddleware = require('webpack-hot-server-middleware');

server.use(webpackDevMiddleware(compiler));
server.use(webpackHotMiddleware(compiler.compilers.find(c => c.name ==='client')));
server.use(webpackHotServerMiddleware(compiler));
}
else {
const serverRenderer = require('./src/ssr/serverRenderer').default;
server.use(serverRenderer());
server.use(express.static('public'))
}
 
module.exports = server;
