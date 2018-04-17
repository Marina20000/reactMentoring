const webpack = require("webpack");

module.exports = {
    entry: ["./src/index.js"],
     output: {
        publicPath: "/",
        path: __dirname + '/dist',
        filename: "bundle.js",
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
      ],
    module: {
        rules: [
            { test: /\.(js|jsx)$/, loader: "babel-loader", exclude: [/node_modules/] },
        ],
    },
    devServer: {
        contentBase: './dist'
    }
}


