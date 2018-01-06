const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './app/index'
  ],
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js?[hash]',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        include: [
          path.resolve(__dirname, "app")
        ],
        exclude: /(node_modules|bower_components)/,
        use: 'babel-loader'
      },
      {
        test: /\.(less|css)/,
        use: [
          'style-loader',
          'css-loader?url=false',
          'autoprefixer-loader',
          'less-loader'
        ]
      }
    ]
  },
  externals: {
    window: 'window',
    document: 'document',
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, './app/components'),
    },
    extensions: [ '.js', '.jsx', '.css'],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './index.html'),
        to: '.'
      },
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${process.env.NODE_ENV}"`
      }
    })
  ],
  devServer: {
    host: '0.0.0.0',
    publicPath:'http://localhost:1213',
    port: 1213,
    compress: true,
    historyApiFallback: true,
    noInfo: false,
    disableHostCheck: true,
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#cheap-module-source-map'
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '\"production\"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
};
