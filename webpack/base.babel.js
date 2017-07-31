const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATH = {
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),

  background: path.resolve(__dirname, '../src', 'background', 'index.js'),
  backgroundTemplate: path.resolve(__dirname, '../src', 'background', 'index.html'),
  popup: path.resolve(__dirname, '../src', 'popup', 'index.js'),
  popupTemplate: path.resolve(__dirname, '../src', 'popup', 'index.html')
}

module.exports = {
  entry: {
    background: PATH.background,
    popup: PATH.popup
  },
  output: {
    filename: '[name].bundle.js',
    path: PATH.dist
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PATH.backgroundTemplate,
      filename: 'background.html',
      chunks: ['background']
    }),
    new HtmlWebpackPlugin({
      template: PATH.popupTemplate,
      filename: 'popup.html',
      chunks: ['popup']
    })
  ]
}
