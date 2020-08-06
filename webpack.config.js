const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    index: './src/index.js',
    another: './src/another-module.js',
    // 防止重复代码
    // index: { import: './src/index.js', dependOn: 'shared' },
    // another: { import: './src/another-module.js', dependOn: 'shared' },
    // shared: 'lodash',
  },

  // 该配置只能用在开发环境
  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist',
    hot: true
  },

  plugins: [
    // 中文文档还在使用旧版本的方式
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    // index.html自动获取包
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  }
};