const path = require('path');
const webpack = require("webpack");

module.exports = {
    context: path.join(__dirname, 'src'),
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