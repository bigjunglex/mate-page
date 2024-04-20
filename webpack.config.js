const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js',
        home: './src/pages/home.js',
        menu: './src/pages/menu.js',
        about: './src/pages/about.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin({
        title : 'Finest Syria Mate',
        template: 'src/index.html'
    })],
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(jpg|png|svg|gif)$/,
            type: 'asset/resource',
        },
        ],
    },
};