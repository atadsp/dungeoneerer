
const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const NodemonPlugin = require('nodemon-webpack-plugin'); // Ding

module.exports = {
    pagesPath: path.normalize(path.join(__dirname, "client/src")),
    webpack: {
        server: {
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        loader: "babel-loader",
                        options: {
                            babelrc: false,
                            presets: ["@babel/preset-env"],
                        },
                    },
                ],
            },
        },
        client: {
            module: {
                rules: [
                    {
                        test: /\.vue$/,
                        loader: 'vue-loader'
                    },
                    {
                        test: /\.js$/,
                        loader: "babel-loader",
                        options: {
                            babelrc: false,
                            presets: ["@babel/preset-env"],
                        },
                    },
                    {
                        test: /\.css$/,
                        use: ['style-loader', 'css-loader']
                    }
                ],
            },
        },
    },
    data: {
        foo: true,
        globalData: true,
    },
    head: {
        title: "Test",
    },
    plugins: [
        // make sure to include the plugin!
        new VueLoaderPlugin(),
        new NodemonPlugin(), // Dong
    ]
};