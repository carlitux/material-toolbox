const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const OUT_PATH = path.resolve('./build');
// Used with webpack-dev-server
const PUBLIC_PATH = '/assets/';

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
  ` Copyright (c) ${new Date().getFullYear()} Linkux IT.`,
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
      // localIdentName: '[local]',
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
        .sync('packages/*/node_modules')
        .map(d => path.join(__dirname, d))
        .concat(['node_modules']),
    },
  },
];

// In development, stylesheets are emitted as JS files to facilitate hot module replacement.
// In all other cases, ExtractTextPlugin is used to generate the final CSS, so these files are
// given a dummy ".js-entry" extension.
const CSS_JS_FILENAME_OUTPUT_PATTERN = `[name]${IS_PROD
  ? '.min'
  : ''}.css${IS_DEV ? '.js' : '.js-entry'}`;
const CSS_FILENAME_OUTPUT_PATTERN = `[name]${IS_PROD ? '.min' : ''}.css`;

const createCssLoaderConfig = () =>
  WRAP_CSS_IN_JS
    ? [{ loader: 'style-loader' }].concat(CSS_LOADER_CONFIG)
    : ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: CSS_LOADER_CONFIG,
      });

const createCssExtractTextPlugin = () =>
  new ExtractTextPlugin(CSS_FILENAME_OUTPUT_PATTERN);

module.exports = [
  {
    name: 'js-components',
    entry: {
      app: ['react-hot-loader/patch', path.resolve('./src/index.js')],
      layoutGrid: [path.resolve('./packages/layout-grid/src/index.js')],
      // animation: [path.resolve('./packages/mcw-animation/index.js')],
      // autoInit: [path.resolve('./packages/mcw-auto-init/index.js')],
      // base: [path.resolve('./packages/mcw-base/index.js')],
      // checkbox: [path.resolve('./packages/mcw-checkbox/index.js')],
      // dialog: [path.resolve('./packages/mcw-dialog/index.js')],
      // drawer: [path.resolve('./packages/mcw-drawer/index.js')],
      // formField: [path.resolve('./packages/mcw-form-field/index.js')],
      // gridList: [path.resolve('./packages/mcw-grid-list/index.js')],
      // iconToggle: [path.resolve('./packages/mcw-icon-toggle/index.js')],
      // linearProgress: [path.resolve('./packages/mcw-linear-progress/index.js')],
      // menu: [path.resolve('./packages/mcw-menu/index.js')],
      // radio: [path.resolve('./packages/mcw-radio/index.js')],
      // ripple: [path.resolve('./packages/mcw-ripple/index.js')],
      // select: [path.resolve('./packages/mcw-select/index.js')],
      // selectionControl: [path.resolve('./packages/mcw-selection-control/index.js')],
      // slider: [path.resolve('./packages/mcw-slider/index.js')],
      // snackbar: [path.resolve('./packages/mcw-snackbar/index.js')],
      // tabs: [path.resolve('./packages/mcw-tabs/index.js')],
      // textfield: [path.resolve('./packages/mcw-textfield/index.js')],
      // toolbar: [path.resolve('./packages/mcw-toolbar/index.js')],
    },
    output: {
      path: OUT_PATH,
      publicPath: PUBLIC_PATH,
      filename: `mcw.[name].${IS_PROD ? 'min.' : ''}js`,
      libraryTarget: 'umd',
      library: ['mcw', '[name]'],
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
  {
    //   name: 'js-all',
    //   entry: path.resolve('./packages/material-components-web/index.js'),
    //   output: {
    //     path: OUT_PATH,
    //     publicPath: PUBLIC_PATH,
    //     filename: 'material-components-web.' + (IS_PROD ? 'min.' : '') + 'js',
    //     libraryTarget: 'umd',
    //     library: 'mcw',
    //   },
    //   devServer: {
    //     disableHostCheck: true,
    //   },
    //   devtool: DEVTOOL,
    //   module: {
    //     rules: [{
    //       test: /\.js$/,
    //       exclude: /node_modules/,
    //       loader: 'babel-loader',
    //       options: {
    //         cacheDirectory: true,
    //       },
    //     }],
    //   },
    //   plugins: [
    //     createBannerPlugin(),
    //   ],
    // }, {
    name: 'css',
    entry: {
      'mcw.layout-grid': path.resolve('./packages/layout-grid/src/styles.scss'),
      // 'material-components-web': path.resolve(
      //   './packages/material-components-web/material-components-web.scss'),
      // 'mcw.animation': path.resolve('./packages/mcw-animation/mcw-animation.scss'),
      // 'mcw.button': path.resolve('./packages/mcw-button/mcw-button.scss'),
      // 'mcw.card': path.resolve('./packages/mcw-card/mcw-card.scss'),
      // 'mcw.checkbox': path.resolve('./packages/mcw-checkbox/mcw-checkbox.scss'),
      // 'mcw.dialog': path.resolve('./packages/mcw-dialog/mcw-dialog.scss'),
      // 'mcw.drawer': path.resolve('./packages/mcw-drawer/mcw-drawer.scss'),
      // 'mcw.elevation': path.resolve('./packages/mcw-elevation/mcw-elevation.scss'),
      // 'mcw.fab': path.resolve('./packages/mcw-fab/mcw-fab.scss'),
      // 'mcw.form-field': path.resolve('./packages/mcw-form-field/mcw-form-field.scss'),
      // 'mcw.grid-list': path.resolve('./packages/mcw-grid-list/mcw-grid-list.scss'),
      // 'mcw.icon-toggle': path.resolve('./packages/mcw-icon-toggle/mcw-icon-toggle.scss'),
      // 'mcw.layout-grid': path.resolve('./packages/mcw-layout-grid/mcw-layout-grid.scss'),
      // 'mcw.linear-progress': path.resolve('./packages/mcw-linear-progress/mcw-linear-progress.scss'),
      // 'mcw.list': path.resolve('./packages/mcw-list/mcw-list.scss'),
      // 'mcw.menu': path.resolve('./packages/mcw-menu/mcw-menu.scss'),
      // 'mcw.radio': path.resolve('./packages/mcw-radio/mcw-radio.scss'),
      // 'mcw.ripple': path.resolve('./packages/mcw-ripple/mcw-ripple.scss'),
      // 'mcw.select': path.resolve('./packages/mcw-select/mcw-select.scss'),
      // 'mcw.slider': path.resolve('./packages/mcw-slider/mcw-slider.scss'),
      // 'mcw.snackbar': path.resolve('./packages/mcw-snackbar/mcw-snackbar.scss'),
      // 'mcw.switch': path.resolve('./packages/mcw-switch/mcw-switch.scss'),
      // 'mcw.tabs': path.resolve('./packages/mcw-tabs/mcw-tabs.scss'),
      // 'mcw.textfield': path.resolve('./packages/mcw-textfield/mcw-textfield.scss'),
      // 'mcw.theme': path.resolve('./packages/mcw-theme/mcw-theme.scss'),
      // 'mcw.toolbar': path.resolve('./packages/mcw-toolbar/mcw-toolbar.scss'),
      // 'mcw.typography': path.resolve('./packages/mcw-typography/mcw-typography.scss'),
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
