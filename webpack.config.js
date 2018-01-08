var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: 'babel-loader',
      },
    ],
  },
  devtool: 'source-map',
  context: __dirname,
  target: 'web',
  stats: 'errors-only',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    hot: false,
    https: false,
    noInfo: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ES6 Starting Code'
    }),
  ],
};

module.exports = config;
