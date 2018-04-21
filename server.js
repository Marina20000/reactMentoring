var express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');

const server = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

server.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

  server.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
  });
  
  server.listen(8080, function () {
    console.log('Example app listening on port 8080!\n');
  });
