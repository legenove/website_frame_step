const path = require('path'),
  webpack = require('webpack'),
  { merge } = require('webpack-merge'),
  webpackBaseConfig = require('./webpack.config.base.js'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'DEV管理输出',
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: './dist',
  },
  // 多entry时，需要加上
  optimization: {
    runtimeChunk: 'single',
  },
});