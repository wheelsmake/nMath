const path = require("path");
module.exports = {
    mode: "development",
    optimization: {
        minimize: false,
    },
    entry: "./src/nMath.export.ts",
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        //filename: "nMath.[contenthash:8].js"
        filename: "nMath.js"
    },
    resolve: {
        extensions: [
            ".ts",
            ".js"
        ]
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: "ts-loader",
            exclude: /node_modules/
        }]
    },
    plugins: []
};