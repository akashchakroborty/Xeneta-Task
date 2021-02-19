const dotenv = require('dotenv');
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
    inline: true,
    compress: true,
    port: 3000,
    hot: true,
    stats: {
      modules: false,
    },
    historyApiFallback: {
      disableDotRule: true,
    },
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed),
    }),
  ],
};
