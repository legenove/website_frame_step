const path = require('path'),
  webpack = require('webpack'),
  { merge } = require('webpack-merge'),
  webpackBaseConfig = require('./webpack.config.base.js'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'main.[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
    }),
  ],
});