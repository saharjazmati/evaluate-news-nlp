const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',
    entry: './src/client/index.js',
    output:{
        libraryTarget:  'var',
        library: 'Client',
        path: path.resolve('./src/client/views/index.html'),
        filename: 'bundle.min.js'
	   },
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                use: {
                loader: "babel-loader"
            },
            {
		        test: /\.scss$/,
		        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
	    }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}