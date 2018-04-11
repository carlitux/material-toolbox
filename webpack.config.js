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
      filename: 'mt-[name].css',
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
    path: path.join(path.resolve('./'), 'docs'),
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

// const path = require('path');
// const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const FlowtypePlugin = require('flowtype-loader/plugin');
//
// const OUT_PATH = path.resolve('./docs');
//
// // Used with webpack-dev-server
// const PUBLIC_PATH = '/';
//
// const IS_DEV = process.env.NODE_ENV === 'development';
// const IS_PROD = process.env.NODE_ENV === 'production';
// const DEVTOOL = IS_DEV ? 'source-map' : false;
//
// const LIFECYCLE_EVENT = process.env.npm_lifecycle_event;
// if (LIFECYCLE_EVENT === 'test' || LIFECYCLE_EVENT === 'test:watch') {
//   process.env.BABEL_ENV = 'test';
// }
//
// const CSS_LOADER_CONFIG = [
//   {
//     loader: 'css-loader',
//     options: {
//       localIdentName: '[local]',
//       sourceMap: IS_DEV,
//       importLoaders: 2,
//       modules: true,
//     },
//   },
//   {
//     loader: 'postcss-loader',
//     options: {
//       sourceMap: IS_DEV,
//       // eslint-disable-next-line
//       plugins: () => [require('autoprefixer')({ grid: false })],
//     },
//   },
//   {
//     loader: 'sass-loader',
//     options: {
//       sourceMap: IS_DEV,
//       includePaths: ['../node_modules'],
//     },
//   },
// ];
//
// // In development, stylesheets are emitted as JS files to facilitate hot module replacement.
// // In all other cases, ExtractTextPlugin is used to generate the final CSS, so these files are
// // given a dummy ".js-entry" extension.
// const createCssLoaderConfig = () =>
//   IS_DEV
//     ? [{ loader: 'style-loader' }].concat(CSS_LOADER_CONFIG)
//     : ExtractTextPlugin.extract({
//         fallback: 'style-loader',
//         use: CSS_LOADER_CONFIG,
//       });
//
// const createCssExtractTextPlugin = () =>
//   new ExtractTextPlugin(
//     {
//       filename: 'css/mcw.[name].css',
//       disable: false,
//       allChunks: true,
//       } // eslint-disable-line
//   );
//
// // const permanentDrawerApp = IS_DEV
// //   ? ['react-hot-loader/patch', path.resolve('./src/drawer-permanent/index.js')]
// //   : [path.resolve('./src/drawer-permanent/index.js')];
// //
// // const permanentDrawerAboveApp = IS_DEV
// //   ? [
// //       'react-hot-loader/patch',
// //       path.resolve('./src/drawer-permanent-above/index.js'),
// //     ]
// //   : [path.resolve('./src/drawer-permanent-above/index.js')];
// //
// // const persistentDrawerApp = IS_DEV
// //   ? ['react-hot-loader/patch', path.resolve('./src/drawer-persistent/index.js')]
// //   : [path.resolve('./src/drawer-persistent/index.js')];
// //
// // const temporaryDrawerApp = IS_DEV
// //   ? ['react-hot-loader/patch', path.resolve('./src/drawer-temporary/index.js')]
// //   : [path.resolve('./src/drawer-temporary/index.js')];
// //
// // const defaultToolbarApp = IS_DEV
// //   ? ['react-hot-loader/patch', path.resolve('./src/toolbar-default/index.js')]
// //   : [path.resolve('./src/toolbar-default/index.js')];
// //
// // const fixedToolbarApp = IS_DEV
// //   ? ['react-hot-loader/patch', path.resolve('./src/toolbar-fixed/index.js')]
// //   : [path.resolve('./src/toolbar-fixed/index.js')];
// //
// // const fixedMenuToolbarApp = IS_DEV
// //   ? [
// //       'react-hot-loader/patch',
// //       path.resolve('./src/toolbar-fixed-menu/index.js'),
// //     ]
// //   : [path.resolve('./src/toolbar-fixed-menu/index.js')];
// //
// // const waterfallToolbarApp = IS_DEV
// //   ? ['react-hot-loader/patch', path.resolve('./src/toolbar-waterfall/index.js')]
// //   : [path.resolve('./src/toolbar-waterfall/index.js')];
// //
// // const defaultFlexibleToolbarApp = IS_DEV
// //   ? [
// //       'react-hot-loader/patch',
// //       path.resolve('./src/toolbar-default-flexible/index.js'),
// //     ]
// //   : [path.resolve('./src/toolbar-default-flexible/index.js')];
// //
// // const waterfallFlexibleToolbarApp = IS_DEV
// //   ? [
// //       'react-hot-loader/patch',
// //       path.resolve('./src/toolbar-waterfall-flexible/index.js'),
// //     ]
// //   : [path.resolve('./src/toolbar-waterfall-flexible/index.js')];
// //
// // const lastFlexibleToolbarApp = IS_DEV
// //   ? [
// //       'react-hot-loader/patch',
// //       path.resolve('./src/toolbar-last-flexible/index.js'),
// //     ]
// //   : [path.resolve('./src/toolbar-last-flexible/index.js')];
//
// module.exports = [
//   {
//     name: 'js-components',
//     entry: {
//       app: appEntry,
//       // // Drawer
//       // permanentDrawer: permanentDrawerApp,
//       // permanentDrawerAbove: permanentDrawerAboveApp,
//       // persistentDrawer: persistentDrawerApp,
//       // temporaryDrawer: temporaryDrawerApp,
//       // // Toolbar
//       // defaultToolbar: defaultToolbarApp,
//       // fixedToolbar: fixedToolbarApp,
//       // fixedMenuToolbar: fixedMenuToolbarApp,
//       // waterfallToolbar: waterfallToolbarApp,
//       // defaultFlexibleToolbar: defaultFlexibleToolbarApp,
//       // waterfallFlexibleToolbar: waterfallFlexibleToolbarApp,
//       // lastFlexibleToolbar: lastFlexibleToolbarApp,
//     },
//     output: {
//       path: OUT_PATH,
//       publicPath: PUBLIC_PATH,
//       filename: `js/mcw.[name].js`,
//     },
//     // See https://github.com/webpack/webpack-dev-server/issues/882
//     // Because we only spin up dev servers temporarily, and all of our assets are publicly
//     // available on GitHub, we can safely disable this check.
//     devServer: {
//       disableHostCheck: true,
//     },
//     devtool: DEVTOOL,
//     module: {
//       rules: [
//         {
//           test: /\.scss$/,
//           use: createCssLoaderConfig(),
//         },
//         {
//           test: /\.js$/,
//           // include: [
//           //   path.resolve('./docs/src'),
//           //   path.resolve('./src'),
//           //   // path.resolve('../node_modules/@material'),
//           // ],
//           exclude: [/node_modules/],
//           use: IS_PROD
//             ? [{ loader: 'babel-loader', options: { cacheDirectory: true } }]
//             : [
//                 {
//                   loader: 'babel-loader',
//                   options: {
//                     cacheDirectory: true,
//                     plugins: ['react-hot-loader/babel'],
//                   },
//                 },
//                 { loader: 'eslint-loader' },
//                 { loader: 'flowtype-loader' },
//               ],
//           // options: {
//           //   cacheDirectory: true,
//           // },
//         },
//       ],
//     },
//     plugins: IS_DEV
//       ? [
//           createCssExtractTextPlugin(),
//           new webpack.optimize.CommonsChunkPlugin({
//             children: true,
//             async: true,
//             minChunks: 3,
//           }),
//           new FlowtypePlugin(),
//         ]
//       : [
//           createCssExtractTextPlugin(),
//           new webpack.DefinePlugin({
//             'process.env': {
//               NODE_ENV: JSON.stringify('production'),
//             },
//           }),
//           new webpack.optimize.CommonsChunkPlugin({
//             children: true,
//             async: true,
//             minChunks: 3,
//           }),
//
//           new webpack.optimize.UglifyJsPlugin(),
//         ],
//   },
// ];
