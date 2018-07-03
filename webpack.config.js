const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/app/index.html',
  filename: 'index.html',
  inject: 'body'
})
module.exports = {
  entry: './client/app/App.jsx',
  output: {
    path: path.resolve(__dirname, 'production'),
    // below line only works for webpack 1.0
    // path: './dist', 
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.jsx?$/, 
        use: 'babel-loader', 
        exclude: /node_modules/ 
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
}