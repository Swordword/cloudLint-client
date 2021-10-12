const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  devServer:{
    client: {
      overlay: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/u,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  target:'web',
  plugins:[
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname, './index.html')
    }),
    // new webpack.ProvidePlugin({
    //   process: 'process/browser',
    // }),
  ],
  resolve: { 
    extensions: ['.js', '.jsx', '.json'] ,
    // webpack5 没有poly 了
    // alias: {
    //   assert: false,
    //   'path-browserify':false,
    //   util:false,
    //   path:false,
    // }
  },
  // performance:{
  //   maxEntrypointSize: 4000000,
  //   maxAssetSize: 10000000
  // }
}
