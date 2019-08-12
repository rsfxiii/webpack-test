var path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  devServer: {
    compress: true,
    hot: true,
    stats: "errors-only",
    open: true,
    overlay: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Superbulk",
      filename: 'index.html',
      template: 'src/templates/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: "sass-loader"
      }
    ]
  },
};