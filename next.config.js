require('dotenv').config();
const webpack = require('webpack');

/** Customization so that enviroment variables can be used
  * both on server side and client side.
  */
module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    );
    return config;
  }
};
