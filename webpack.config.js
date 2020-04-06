const webpack = require('webpack')
const isProd = process.env.NODE_ENV === 'production'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'static/[name].[ext]'
        }
      }
    ]
  },

  devtool: 'eval',

  devServer: {
    port: 3000
  },

  resolve: {
    alias: {
      'delta': path.join(__dirname, 'src/delta')
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: '../public/index.html'
    }),

    new FaviconsWebpackPlugin({
      logo: './app/components/Header/logo.svg',
      prefix: 'static/',
    })
  ]
}
