const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader?-url', 'sass-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CopyPlugin([
      { from: 'src/assets/img', to: 'assets/img' },
      { from: 'src/assets/fonts', to: 'assets/fonts' }
    ]),
  ]
};