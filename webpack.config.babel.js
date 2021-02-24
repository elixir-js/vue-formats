import * as path from "path";
import { CleanWebpackPlugin } from "clean-webpack-plugin";

import { name } from "./package.json";

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
    resolve: {
        extensions: [".js", ".ts"],
        alias: {
            "@assets": path.resolve(appPath, "assets"),
            "@utils": path.resolve(appPath, "utils"),
        },
        modules: [appPath, nodeModulesPath],
    },
    mode: "development",
    output: {
        filename: name + ".js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [new CleanWebpackPlugin()],
};
