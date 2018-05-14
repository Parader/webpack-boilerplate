var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');


var baseConfig = require('./webpack.base.config');
var optimizationConfig = require('./webpack.opt.config');

const productionConfiguration = function (env) {
  const NODE_ENV = env.NODE_ENV ? env.NODE_ENV : 'development';
  return {
    plugins: [
      new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(NODE_ENV) }),
      new HtmlWebpackPlugin({
        hash: true,
        inject: true,
        template: resolve(__dirname, '..', 'src', 'client', 'index.html'),
        //favicon: resolve(__dirname, '..', 'src', 'client', 'static', 'favicon.png'),
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      })
    ]
  };
}

module.exports = merge.smart(baseConfig, optimizationConfig, productionConfiguration);
