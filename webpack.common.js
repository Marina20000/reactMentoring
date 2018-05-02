const path = require('path');
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");


module.exports = {
    context: path.join(__dirname, 'src'),
    entry: ["./index.js"],
    output: {
        publicPath: "/",
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js",
    },
    resolve: {
        extensions: ['.js']
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "initial",
                    minChunks: 2
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
    },
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
            {
                test: /\.css$/,
                loader: 'style-loader'
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true
                }
            },
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
    }
};