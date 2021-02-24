const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { name } = require('./package.json')

const appPath = path.resolve(__dirname, "./src");
const nodeModulesPath = path.resolve("./node_modules");

module.exports = {
    entry: {
        main: "./src/index.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: ["babel-loader"],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    output: {
        filename: name + ".js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [new CleanWebpackPlugin()],
    resolve: {
        extensions: [".js", ".ts"],
        alias: {
            "@assets": path.resolve(appPath, "assets"),
            "@utils": path.resolve(appPath, "utils"),
        },
        modules: [appPath, nodeModulesPath],
    },
    mode: "production",
};
