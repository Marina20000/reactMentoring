const webpack = require("webpack");
const path = require('path');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.join(__dirname, 'src'),
    mode: "development",
    devtool: "none",
    entry: ["./index.js"],
    output: {
        publicPath: "/",
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js",
    },
    resolve: {
        extensions: ['.js']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new ExtractTextPlugin("styles.css")
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
                query: {
                    presets: ["stage-2", "react"],
                },
                exclude: [/node_modules/]
            },
            // {
            //     test: /\.css$/,
            //     use:  ['css-hot-loader'].concat(ExtractTextPlugin.extract({
            //       fallback: "style-loader",
            //       use: "css-loader"
            //     }))
            // }
            {
                test: /\.html$/,
                use: [
                    "htmllint-loader",
                    {
                        loader: "html-loader",
                        options: {
                        }
                    }
                ]
            }
        ],
    },
    devtool: "source-map",
    devServer: {
        contentBase: './dist',
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        noInfo: true, // only errors & warns on hot reload
    }
}


