const path = require('path'),
  webpack = require('webpack'),
  { merge } = require('webpack-merge'),
  webpackBaseConfig = require('./webpack.config.base.js'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      maxSize: 60000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          filename: '[name].[contenthash].js',
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html',
    }),
    // new webpack.optimize.SplitChunksPlugin({
    //   name: 'vendor',
    // }),
  ],
});