const ENV = 'production'
const webpack = require('webpack');
const path = require('path');
const getLoaders = require('./loaders')

const BUILD_DIR = path.resolve(__dirname, '../');
const APP_DIR = path.resolve(__dirname, '../');
const DEV_DIR = path.resolve(__dirname, '../');

let config = {
  entry: APP_DIR + '/app.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: DEV_DIR
  },
  devtool: 'source-map',
  module : {
    loaders: [{
      test: /\.jsx$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      include: APP_DIR,
      query: {
        presets: [ "es2015", "react", 'stage-2' ]
      }
    },{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  }
};

module.exports = config;
