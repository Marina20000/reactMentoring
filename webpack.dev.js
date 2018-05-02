const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require("webpack");

module.exports = merge(common, {
    mode: "development",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    devtool: "source-map",
    devServer: {
        contentBase: './dist',
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    }
});