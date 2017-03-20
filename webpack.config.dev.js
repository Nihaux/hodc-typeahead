/*global __dirname, require, module*/

const webpack = require('webpack');
const path = require('path');

const config = {
  entry: [
    path.resolve(__dirname,'./sandbox/sandbox.js'),
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'index.js',
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    contentBase: path.resolve(__dirname,'./sandbox'),
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
};

module.exports = config;