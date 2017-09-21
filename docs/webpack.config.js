const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const OUT_PATH = path.resolve('./');
// Used with webpack-dev-server
const PUBLIC_PATH = '/';

const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = process.env.NODE_ENV === 'production';
const WRAP_CSS_IN_JS = IS_DEV;
// Source maps break extract-text-webpack-plugin, so they need to be disabled when WRAP_CSS_IN_JS is set to false.
const GENERATE_SOURCE_MAPS =
  process.env.MDC_GENERATE_SOURCE_MAPS === 'true' ||
  (process.env.MDC_GENERATE_SOURCE_MAPS !== 'false' &&
    IS_DEV &&
    WRAP_CSS_IN_JS);
const DEVTOOL = GENERATE_SOURCE_MAPS ? 'source-map' : false;

const banner = [
  '/*!',
  ' React Material Components for the web',
  ` Copyright (c) ${new Date().getFullYear()} Luis Carlos Cruz Carballo.`,
  ' License: MIT',
  '*/',
].join('\n');

const createBannerPlugin = () =>
  new webpack.BannerPlugin({
    banner,
    raw: true,
    entryOnly: true,
  });

const LIFECYCLE_EVENT = process.env.npm_lifecycle_event;
if (LIFECYCLE_EVENT === 'test' || LIFECYCLE_EVENT === 'test:watch') {
  process.env.BABEL_ENV = 'test';
}

const CSS_LOADER_CONFIG = [
  {
    loader: 'css-loader',
    options: {
      // localIdentName: '[local]___[hash:base64:5]',
      localIdentName: '[local]',
      sourceMap: GENERATE_SOURCE_MAPS,
      importLoaders: 2,
      modules: true,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: GENERATE_SOURCE_MAPS,
      plugins: () => [require('autoprefixer')({ grid: false })],
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: GENERATE_SOURCE_MAPS,
      includePaths: glob
        .sync('../packages/*/node_modules')
        .map(d => path.join(__dirname, d))
      .concat(['./node_modules']),
    },
  },
];

// In development, stylesheets are emitted as JS files to facilitate hot module replacement.
// In all other cases, ExtractTextPlugin is used to generate the final CSS, so these files are
// given a dummy ".js-entry" extension.
const CSS_JS_FILENAME_OUTPUT_PATTERN = `[name]${IS_PROD
  ? '.min'
  : ''}.css${IS_DEV ? '.js' : '.js-entry'}`;
const CSS_FILENAME_OUTPUT_PATTERN = `[name].css`;

const createCssLoaderConfig = () =>
  WRAP_CSS_IN_JS
    ? [{ loader: 'style-loader' }].concat(CSS_LOADER_CONFIG)
    : ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: CSS_LOADER_CONFIG,
      });

const createCssExtractTextPlugin = () =>
  new ExtractTextPlugin(IS_DEV
    ? CSS_FILENAME_OUTPUT_PATTERN
  : {
      filename: 'mcw.[name].css',
      disable: false,
      allChunks: true
    });

const appEntry = IS_DEV
  ? ['react-hot-loader/patch', path.resolve('./src/index.js')]
  : [path.resolve('./src/index.js')];

module.exports = [
  {
    name: 'js-components',
    entry: {
      app: appEntry,
      // layoutGrid: [path.resolve('./packages/layout-grid/src/index.js')],
    },
    output: {
      path: OUT_PATH,
      publicPath: PUBLIC_PATH,
      filename: `mcw.[name].js`,
    },
    // See https://github.com/webpack/webpack-dev-server/issues/882
    // Because we only spin up dev servers temporarily, and all of our assets are publicly
    // available on GitHub, we can safely disable this check.
    devServer: {
      disableHostCheck: true,
    },
    devtool: DEVTOOL,
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: createCssLoaderConfig(),
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      ],
    },
    plugins: [createCssExtractTextPlugin(), createBannerPlugin()],
  },
];

if (IS_DEV) {
  module.exports.push({
    name: 'app',
    entry: {
      'demo-styles': path.resolve('./src/styles.scss'),
    },
    output: {
      path: OUT_PATH,
      publicPath: PUBLIC_PATH,
      filename: CSS_JS_FILENAME_OUTPUT_PATTERN,
    },
    devServer: {
      disableHostCheck: true,
    },
    devtool: DEVTOOL,
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: createCssLoaderConfig(),
        },
      ],
    },
    plugins: [createCssExtractTextPlugin(), createBannerPlugin()],
  });
}
