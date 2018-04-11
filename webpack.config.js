const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const strip = require('strip-loader');
const FlowtypePlugin = require('flowtype-loader/plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const { NODE_ENV } = process.env;
const PROD = NODE_ENV === 'production';

const JS_LOADERS = PROD
  ? [strip.loader('debug'), 'babel-loader']
  : [
      {
        loader: 'babel-loader',
        options: { cacheDirectory: true, plugins: ['react-hot-loader/babel'] },
      },
      { loader: 'eslint-loader' },
      { loader: 'flowtype-loader' },
    ];

const appEntry = PROD
  ? ['./src/index.js']
  : ['react-hot-loader/patch', './src/index.js'];

const CSS_LOADER_CONFIG = [
  {
    loader: 'css-loader',
    options: {
      localIdentName: '[local]',
      sourceMap: true,
      importLoaders: 2,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: true,
      // eslint-disable-next-line
      plugins: () => [require('autoprefixer')({ grid: false })],
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
      includePaths: ['./node_modules'],
    },
  },
];

const createCssLoaderConfig = () =>
  PROD
    ? ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: CSS_LOADER_CONFIG,
      })
    : [{ loader: 'style-loader' }].concat(CSS_LOADER_CONFIG);

const createCssExtractTextPlugin = () =>
  new ExtractTextPlugin(
    {
      filename: 'mt.[name].css',
      disable: false,
      allChunks: true,
      } // eslint-disable-line
  );

const plugins = PROD
  ? [
      createCssExtractTextPlugin(),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new UglifyJSPlugin({
        sourceMap: true,
      }),
    ]
  : [
      createCssExtractTextPlugin(),
      new webpack.NamedModulesPlugin(),
      new FlowtypePlugin(),
    ];

module.exports = {
  mode: PROD ? 'production' : 'development',
  entry: {
    app: appEntry,
  },
  output: {
    path: path.join(path.resolve('./'), 'static'),
    publicPath: '/',
    filename: `mt.[name].js`,
  },
  devtool: PROD ? 'source-map' : 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: createCssLoaderConfig(),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: JS_LOADERS,
      },
      {
        test: /\.(gif|jpe?g|png)$/,
        loader: 'url-loader?limit=250',
        query: {
          limit: 100,
          name: '[name].[ext]',
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: !PROD,
      chunks: 'all',
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins,
};
