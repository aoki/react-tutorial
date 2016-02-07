const path = require('path');

module.exports = {
  // `entry` is the entry point for the application.
  entry: {
    bundle: './src/js/app.js'
  },
  // `output.path` specifies the output destination of the generated files.
  //   NOTE THAT: `__dirname` is the directory where this configuration file exists.
  // `filename` specifies the output file name.
  //   NOTE THAT: `[name]` is the key name specified in the `entry` object. In this case `[name]` is `bundle`.
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: '[name].js'
  },
  module: {
    // `loaders` is like plugins. In this case, write settings for the babel-loader.
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/,
        test: /\.jsx?$/,
        query: {
          cacheDirectory: true
        }
      }
    ]
  }
};
