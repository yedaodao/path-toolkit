var path = require('path');

module.exports = {
    entry: {
        app: ['./index.js']
    },
    output: {
        path: path.resolve(__dirname, "build/"),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel",
                query: {compact: false}
            },
        ]
    }
};