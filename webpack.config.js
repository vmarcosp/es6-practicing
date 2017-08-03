module.exports = {
    context: __dirname,
    entry: "./src/module/app.js",
    devServer: {
        contentBase: [
            "assets",
            "css",
        ]
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}