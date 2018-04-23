const path = require('path');
const webpack = require( "webpack" );
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    mode: "development",
    devtool: "none",
    entry: ["./index.js"],
    output: {
        publicPath: "/",
        path: path.join(__dirname, '/dist'),
        filename: "bundle.js",
    }
    ,
    // entry: {
    //     app: './src/index.js'
    // },
    plugins: [
       // new CleanWebpackPlugin(['dist']),
        // new HtmlWebpackPlugin({
        //     title: 'Production'
        // })
    ],
    // output: {
    //     filename: '[name].bundle.js',
    //     path: path.resolve(__dirname, 'dist')
    // },
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
    }
};