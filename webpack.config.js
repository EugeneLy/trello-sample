var webpack = require('webpack');

module.exports = {
    entry: "./client/main.js",
    output: {
        path: '/public/build/',
        publicPath: "build/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: [/node_modules/, /public/],
                query:
                    {
                        presets:['react']
                    }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!autoprefixer-loader",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader",
                exclude: [/node_modules/, /public/]
            }
        ]
    }
}
