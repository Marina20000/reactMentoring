const merge = require('webpack-merge');
var webpack = require('webpack');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    mode: "production",
    plugins: [
         new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    devtool: "none",
    devServer: {
        contentBase: './dist',
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    }
});