var path = require('path');

module.exports = {
    entry: {
        "path-tookit": ['./index.js']
    },
    output: {
        path: path.resolve(__dirname, "build/"),
        filename: "[name].js",
        libraryTarget: 'umd'
    }
};