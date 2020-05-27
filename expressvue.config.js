
const path = require("path");

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
    },
    data: {
        foo: true,
        globalData: true,
    },
    head: {
        title: "Test",
    },
};