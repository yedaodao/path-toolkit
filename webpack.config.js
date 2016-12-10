var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: {
        "path-tookit": ['./index.js']
    },
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "[name].js",
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.BannerPlugin('comment demo'),
        new webpack.optimize.UglifyJsPlugin()
    ]
};