const path = require('path');
const APP_DIR = path.resolve(__dirname, '../');

module.exports = {
  entry: APP_DIR+"/",
  output: {
    path: APP_DIR,
    publicPath: "/public/"
  },
  devServer: {
      inline: true,
      contentBase: APP_DIR,
      port: 5000
  },
  module: {
    loaders: [{
      test: /\.html$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    },{
      test: /\.jsx$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      include: APP_DIR,
      query: {
        presets: [ "es2015", "react", "react-hmre", 'stage-2' ]
      }
    },{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },{
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  }
}
