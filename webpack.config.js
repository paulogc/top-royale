const path = require('path');

const config = {
  entry: ['./src/i*ndex.js', 
    'webpack-dev-server/client?http://localhost:8080',
  ],
  output: {
    path: path.resolve(__diename, 'build'),
    filename: 'bundle.js',
    publicPath: 'build',
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  devServer: {
    port: 8081,
    historyApiFallback: true,
  }
};

module.exports = config;