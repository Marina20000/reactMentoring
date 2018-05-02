const webpack = require("webpack");
const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    context: path.join(__dirname, 'src'),
    mode: "development",
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
    },
    devtool: "source-map",
    devServer: {
        contentBase: './dist',
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    }
}


