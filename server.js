var express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const server = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

server.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));
  
  server.listen(8080, function () {
    console.log('Example app listening on port 8080!\n');
  });
