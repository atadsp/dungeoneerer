const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Dotenv = require('dotenv-webpack');
const MinifyPlugin = require("babel-minify-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    entry: [
        "@babel/polyfill",
        './client/src/app.js',
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'client/dist')
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
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
                test: /\.s[ac]ss$/i,
                use: [
                    'vue-style-loader',
                    { loader: 'style-loader'},
                    { loader: 'css-loader'},
                    { loader: 'sass-loader'}
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader'
                }, ],
            },
        ]
    },
    devServer: {
        contentBase: './client/dist',
        open: true
    },
    plugins: [
        new Dotenv(),
        new VueLoaderPlugin(),
        new MinifyPlugin(),
        new CompressionPlugin({
            algorithm: 'gzip',
            filename: '[path].gz[query]',
          })
    ],
};