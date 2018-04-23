const merge = require('webpack-merge');
var webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin({ sourceMap: true }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    optimization: {
      splitChunks: {
          cacheGroups: {
              default: false,
              commons: {
                  test: /[\\/]node_modules[\\/]/,
                  name: "vendor",
                  chunks: "all"
              }
          }
      },
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true 
        })
      ]
  }
});