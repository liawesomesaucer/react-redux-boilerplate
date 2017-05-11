const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-source-map',

  entry: {
    app: [
      './client/index.js',
    ],
    vendor: [
      'react',
      'react-dom',
    ],
  },

  output: {
    path: __dirname + '/public/',
    filename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.scss$/,
        loader: ('style-loader!css-loader!sass-loader'),
      },
      {
        test: /\.css$/,
        loader: ('style-loader!css-loader'),
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.svg$/,
        loader: 'file-loader',
        query: {
          name: 'static/media/[name].[hash:8].[ext]',
        }
      },
    ],
  },

  postcss: () => [
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9',
      ],
    }),
  ],

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
};
