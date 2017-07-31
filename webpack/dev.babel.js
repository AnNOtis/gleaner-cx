const webpack = require('webpack')
const WriteFilePlugin = require('write-file-webpack-plugin')
const base = require('./base.babel')

module.exports = {
  ...base,
  devServer: {
    hot: true,
    contentBase: base.output.path,
    headers: { 'Access-Control-Allow-Origin': '*' }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...base.plugins,
    new WriteFilePlugin()
  ]
}
