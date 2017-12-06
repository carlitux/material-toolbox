const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const DashboardPlugin = require('webpack-dashboard/plugin');

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
      // eslint-disable-next-line
      plugins: () => [require('autoprefixer')({ grid: false })],
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: GENERATE_SOURCE_MAPS,
      includePaths: ['../node_modules'],
    },
  },
];

// In development, stylesheets are emitted as JS files to facilitate hot module replacement.
// In all other cases, ExtractTextPlugin is used to generate the final CSS, so these files are
// given a dummy ".js-entry" extension.
const createCssLoaderConfig = () =>
  WRAP_CSS_IN_JS
    ? [{ loader: 'style-loader' }].concat(CSS_LOADER_CONFIG)
    : ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: CSS_LOADER_CONFIG,
      });

const createCssExtractTextPlugin = () =>
  new ExtractTextPlugin(
    {
      filename: 'mcw.[name].css',
      disable: false,
      allChunks: true,
      } // eslint-disable-line
  );

const appEntry = IS_DEV
  ? ['react-hot-loader/patch', path.resolve('./src/index.js')]
  : [path.resolve('./src/index.js')];

const permanentDrawerApp = IS_DEV
  ? ['react-hot-loader/patch', path.resolve('./src/drawer-permanent/index.js')]
  : [path.resolve('./src/drawer-permanent/index.js')];

const permanentDrawerAboveApp = IS_DEV
  ? [
      'react-hot-loader/patch',
      path.resolve('./src/drawer-permanent-above/index.js'),
    ]
  : [path.resolve('./src/drawer-permanent-above/index.js')];

const persistentDrawerApp = IS_DEV
  ? ['react-hot-loader/patch', path.resolve('./src/drawer-persistent/index.js')]
  : [path.resolve('./src/drawer-persistent/index.js')];

const temporaryDrawerApp = IS_DEV
  ? ['react-hot-loader/patch', path.resolve('./src/drawer-temporary/index.js')]
  : [path.resolve('./src/drawer-temporary/index.js')];

const defaultToolbarApp = IS_DEV
  ? ['react-hot-loader/patch', path.resolve('./src/toolbar-default/index.js')]
  : [path.resolve('./src/toolbar-default/index.js')];

const fixedToolbarApp = IS_DEV
  ? ['react-hot-loader/patch', path.resolve('./src/toolbar-fixed/index.js')]
  : [path.resolve('./src/toolbar-fixed/index.js')];

const fixedMenuToolbarApp = IS_DEV
  ? [
      'react-hot-loader/patch',
      path.resolve('./src/toolbar-fixed-menu/index.js'),
    ]
  : [path.resolve('./src/toolbar-fixed-menu/index.js')];

const waterfallToolbarApp = IS_DEV
  ? ['react-hot-loader/patch', path.resolve('./src/toolbar-waterfall/index.js')]
  : [path.resolve('./src/toolbar-waterfall/index.js')];

const defaultFlexibleToolbarApp = IS_DEV
  ? [
      'react-hot-loader/patch',
      path.resolve('./src/toolbar-default-flexible/index.js'),
    ]
  : [path.resolve('./src/toolbar-default-flexible/index.js')];

const waterfallFlexibleToolbarApp = IS_DEV
  ? [
      'react-hot-loader/patch',
      path.resolve('./src/toolbar-waterfall-flexible/index.js'),
    ]
  : [path.resolve('./src/toolbar-waterfall-flexible/index.js')];

const lastFlexibleToolbarApp = IS_DEV
  ? [
      'react-hot-loader/patch',
      path.resolve('./src/toolbar-last-flexible/index.js'),
    ]
  : [path.resolve('./src/toolbar-last-flexible/index.js')];

module.exports = [
  {
    name: 'js-components',
    entry: {
      app: appEntry,
      // Drawer
      permanentDrawer: permanentDrawerApp,
      permanentDrawerAbove: permanentDrawerAboveApp,
      persistentDrawer: persistentDrawerApp,
      temporaryDrawer: temporaryDrawerApp,
      // Toolbar
      defaultToolbar: defaultToolbarApp,
      fixedToolbar: fixedToolbarApp,
      fixedMenuToolbar: fixedMenuToolbarApp,
      waterfallToolbar: waterfallToolbarApp,
      defaultFlexibleToolbar: defaultFlexibleToolbarApp,
      waterfallFlexibleToolbar: waterfallFlexibleToolbarApp,
      lastFlexibleToolbar: lastFlexibleToolbarApp,
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
          include: [
            path.resolve('./src'),
            // path.resolve('../src'),
            path.resolve('../node_modules/@material'),
          ],
          // exclude: /node_modules/,
          use: IS_PROD
            ? [{ loader: 'babel-loader', options: { cacheDirectory: true } }]
            : [
                'react-hot-loader/webpack',
                { loader: 'babel-loader', options: { cacheDirectory: true } },
              ],
          // options: {
          //   cacheDirectory: true,
          // },
        },
      ],
    },
    plugins: IS_DEV
      ? [createCssExtractTextPlugin(), createBannerPlugin()]
      : [
          createCssExtractTextPlugin(),
          createBannerPlugin(),
          new webpack.DefinePlugin({
            'process.env': {
              NODE_ENV: JSON.stringify('production'),
            },
          }),
          new webpack.optimize.UglifyJsPlugin(),
        ],
  },
];
