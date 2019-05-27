const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname + '/public'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(png|jpe?g|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {},
            },
          ],
        },
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new Dotenv({
        path: './.env', // Path to .env file (this is the default)
        safe: true // load .env.example (defaults to "false" which does not use dotenv-safe)
      })
    ],
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    devServer: {
      contentBase: path.join(__dirname, './public'),
      port: 3000,
      hot: true,
      historyApiFallback: true,
  },
  node: {
    fs: 'empty'
  }
}
