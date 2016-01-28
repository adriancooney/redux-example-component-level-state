var path = require("path"),
    webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: "./src/index.jsx",

    module: {
        loaders: [{
            test: /\.jsx?$/,
            include: [path.resolve(__dirname, "src/")],
            loaders: ["react-hot", "babel"]
        }]
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
        fallback: path.join(__dirname, "node_modules")
    },

    resolveLoader: {
        fallback: path.join(__dirname, "node_modules")
    },

    output: {
        filename: "index.js",
        path: __dirname + "/build",
        publicPath: "/build/"
    }
};