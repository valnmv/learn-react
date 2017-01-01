const path = require('path');

module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/app.jsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

  devtool: 'source-map',

  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      loader: 'babel',
      query: {
        presets: ["react", "es2015", "stage-0"]
      }
    }],
  },

  resolve: {
    root: [path.join(__dirname, 'client/src')],
    extensions: ['', '.js', '.jsx', '.css']
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};
