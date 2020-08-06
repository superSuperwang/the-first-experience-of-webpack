const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    app: './src/index.js'
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
  }
};