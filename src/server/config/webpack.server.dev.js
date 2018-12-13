var fs = require('fs');
var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });
  
module.exports = {
  entry: __dirname + '/../index.tsx',
  externals: nodeModules,
  module: {
    loaders: [
      // All files with a '.ts' or '.tsx'
      // extension will be handled by 'ts-loader'
      {
        loader: 'ts-loader',
        test: /\.tsx?$/,
      },
    ],
  },
  output: {
    filename: 'server.js',
    path: __dirname + '/../../../build/server',
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  },
 
  target: 'node',
};