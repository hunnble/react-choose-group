var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: [
    './example/example.js'
  ],
  output: { path: __dirname + '/example', filename: 'exampleBundle.js' },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        loader: 'babel',
        exclude: ['node_module', 'test'],
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
}