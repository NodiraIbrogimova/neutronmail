const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
const APPDIR = 'src/';
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, APPDIR, 'index.html'),
    filename: 'index.html',
    inject: 'body'
});
// const webpack = require('webpack');

module.exports = {
    entry:
        './src/index.js'
    ,
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    watch: true,
    module: {
        rules: [
            {test: /\.txt$/, use: 'raw-loader'},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    },
                ],
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
        HTMLWebpackPluginConfig,
        // new HtmlWebpackPlugin({hash: true, template: './src/index.html', filename: './dist/index.html'}),
        new CleanWebpackPlugin()
    ],
    devServer: {
        contentBase: './src',
        open: true
    }
};
