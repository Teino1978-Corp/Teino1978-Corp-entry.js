var webpack = require('webpack');

module.exports = {
    entry: {
        app: './entry.js'
    },
    output: {
        path: __dirname,
        publicPath: '/assets/',
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
          { test: /\.less$/, loader: "style!css!less" },
          { test: /\.jpg$/, loader: "url-loader?limit=10000" },
          { test: /\.html$/, loader: "html" }
        ]
    }
};