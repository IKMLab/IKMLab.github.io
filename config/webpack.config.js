const path = require('path')

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const HTMLWebpackPulgin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes')
const postcssPresetEnv = require('postcss-preset-env')
const postcssNormalize = require('postcss-normalize')
const webpack = require('webpack')

const pathConfig = {
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  nodeModules: path.resolve(__dirname, '../node_modules'),
  eslint: path.resolve(__dirname, '.eslintrc.json'),
  stylelint: path.resolve(__dirname, '.stylelintrc.json'),
}

const devConfig = {
  host: 'localhost',
  port: 3000,
}


module.exports = (_, argv) => {
  const isProductionMode = argv.mode == 'production' ? true : false
  const isDevelopmentMode = argv.mode == 'development' ? true : false

  process.env.NODE_ENV = isProductionMode ? 'production' : 'development'
  process.env.BABEL_ENV = process.env.NODE_ENV
  process.env.BROWSERSLIST_ENV = process.env.NODE_ENV

  // webpack.output.publicPath need a trailing slash
  const PUBLIC_URL = isProductionMode ?
    'https://ikmlab.cs.nthu.edu.tw/' :
    // 'http://ikmlab.cs.nthu.edu.tw/' :
    // 'http://ikmlab.duckdns.org/' :
    `https://${devConfig.host}:${devConfig.port}/`

  const getStyleLoaders = (useSassLoader = false) => {
    const loaders = [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: useSassLoader ? 3 : 1,
          modules: {
            localIdentName: isProductionMode ?
              '[hash:base64]' : '[path][name]__[local]',
            mode: 'local',
          },
          sourceMap: isDevelopmentMode,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              postcssFlexbugsFixes(),
              postcssPresetEnv({
                stage: 3,
              }),
              postcssNormalize(),
            ],
          },
          sourceMap: isDevelopmentMode,
        },
      },
    ]

    if (useSassLoader) {
      loaders.push(
        {
          loader: 'resolve-url-loader',
          options: {
            sourceMap: true,
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
      )
    }

    return loaders
  }


  return {
    mode: isProductionMode ?
      'production' :
      isDevelopmentMode ?
        'development' :
        'none',
    bail: isProductionMode,
    devtool: isProductionMode ?
      'source-map' :
      'eval-source-map',
    devServer: {
      contentBase: pathConfig.dist,
      compress: true,
      injectHot: true,
      hot: true,
      host: devConfig.host,
      https: true,
      open: true,
      openPage: 'home.html',
      port: devConfig.port,
      quiet: false,
    },
    context: pathConfig.src,
    entry: {
      'home':
        path.resolve(pathConfig.src, 'route/home.jsx'),
      'advisor':
        path.resolve(pathConfig.src, 'route/advisor.jsx'),
      'member':
        path.resolve(pathConfig.src, 'route/member.jsx'),
      'research':
        path.resolve(pathConfig.src, 'route/research.jsx'),
    },
    output: {
      path: pathConfig.dist,
      pathinfo: isDevelopmentMode,
      publicPath: PUBLIC_URL,
      filename: '[name].bundle.js',
    },
    target: 'web',
    resolve: {
      modules: [
        pathConfig.nodeModules,
        pathConfig.src,
      ],
      alias: {
        src: pathConfig.src,
      },
      symlinks: false,
    },
    optimization: {
      minimize: isProductionMode,
      minimizer: [
        new TerserPlugin({
          // Discard comments.
          extractComments: false,
          terserOptions: {
            // Compress to ECMA-2015.
            ecma: 2015,
            format: {
              // Turned on because emoji and regex is not minified properly
              // using default. see:
              // https://github.com/facebook/create-react-app/issues/2488
              ascii_only: true,
              // Remove comments.
              comments: false,
              // Fix WebKit bugs.
              webkit: true,
            },
            // Sorry we do not support ie8.
            ie8: false,
            // Fix Safari bugs.
            safari10: true,
            // Remove unused top level variables and functions.
            toplevel: true,
          },
        }),
        new CssMinimizerPlugin(),
      ],
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          commons: {
            chunks: 'all',
            name: 'commons',
            priority: 0,
            reuseExistingChunk: true,
          },
          mui: {
            test: /[\\/]node_modules[\\/]@material-ui.*[\\/]/,
            chunks: 'all',
            name: 'mui',
            priority: 2,
            reuseExistingChunk: true,
          },
          react: {
            test: /[\\/]node_modules[\\/]react.*[\\/]/,
            chunks: 'all',
            name: 'react',
            priority: 3,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/](!react.*|!@material-ui.*)[\\/]/,
            chunks: 'all',
            name: 'vendor',
            priority: 1,
            reuseExistingChunk: true,
          },
          default: false,
        },
      },
    },
    module: {
      rules: [
        {
          // `oneOf` will traverse all following loaders until one will
          // match the requirements. When no loader matches it will fall
          // back to the "file" loader at the end of the loader list.
          // Must use `oneOf` to avoid using multiple loaders on single file
          oneOf: [
            {
              test: /\.(jsx?|tsx?)$/,
              include: [
                path.resolve(pathConfig.src),
              ],
              exclude: /node_modules/,
              use: [
                {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-react'],
                    cacheDirectory: true,
                    cacheCompression: false,
                    compact: isProductionMode,
                  },
                },
              ],
            },
            // Regular CSS files, mainly from 3rd party libraries.
            {
              test: /\.css$/,
              exclude: /\.module\.css$/,
              // Don't consider CSS imports dead code even if the
              // containing package claims to have no side effects.
              sideEffects: true,
              use: getStyleLoaders(useSassLoader = false),
            },
            // Support CSS module
            {
              test: /\.module\.css$/,
              use: getStyleLoaders(useSassLoader = false),
            },
            {
              test: /\.(sass|scss)$/,
              exclude: /\.module\.(sass|scss)$/,
              // Don't consider Sass / SCSS imports dead code even if the
              // containing package claims to have no side effects.
              sideEffects: true,
              use: getStyleLoaders(useSassLoader = true),
            },
            // Support css module
            {
              test: /\.module\.(sass|scss)$/,
              use: getStyleLoaders(useSassLoader = true),
            },
            {
              test: /\.(bmp|png|gif|jpe?g)$/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    limit: 16384,
                    name: 'media/[name].[ext]',
                  },
                },
              ],
            },
            // "file" loader makes sure those assets get served by
            // WebpackDevServer. When you `import` an asset, you get its
            // (virtual) filename. In production, they would get copied to the
            // `dist` folder. This loader doesn't use a "test" so it will
            // catch all modules that fall through the other loaders.
            {
              exclude: /\.(js|mjs|jsx|ts|tsx|html|json|css|sass|scss)$/,
              use: {
                loader: 'file-loader',
                options: {
                  name: 'media/[name].[ext]',
                },
              },
            },
          ],
        },
        // ** STOP ** Are you adding a new loader?
        // Make sure to add the new loader(s) before the "file" loader.
      ],
    },
    plugins: [
      new ESLintPlugin({
        cache: true,
        extensions: ['js', 'jsx'],
        fix: true,
        overrideConfigFile: pathConfig.eslint,
      }),
      new HTMLWebpackPulgin({
        chunks: [
          'home',
          'commons',
          'mui',
          'react',
          'vendor',
        ],
        filename: path.resolve(pathConfig.dist, 'home.html'),
        hash: isProductionMode,
        template: path.resolve(pathConfig.src, 'res/template/index.html'),
      }),
      new HTMLWebpackPulgin({
        chunks: [
          'advisor',
          'commons',
          'mui',
          'react',
          'vendor',
        ],
        filename: path.resolve(pathConfig.dist, 'advisor.html'),
        hash: isProductionMode,
        template: path.resolve(pathConfig.src, 'res/template/index.html'),
      }),
      new HTMLWebpackPulgin({
        chunks: [
          'member',
          'commons',
          'mui',
          'react',
          'vendor',
        ],
        filename: path.resolve(pathConfig.dist, 'member.html'),
        hash: isProductionMode,
        template: path.resolve(pathConfig.src, 'res/template/index.html'),
      }),
      new HTMLWebpackPulgin({
        chunks: [
          'research',
          'commons',
          'mui',
          'react',
          'vendor',
        ],
        filename: path.resolve(pathConfig.dist, 'research.html'),
        hash: isProductionMode,
        template: path.resolve(pathConfig.src, 'res/template/index.html'),
      }),
      isDevelopmentMode && new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        'PUBLIC_URL': JSON.stringify(PUBLIC_URL),
      }),
      new CaseSensitivePathsPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css',
      }),
      new StyleLintPlugin({
        configFile: pathConfig.stylelint,
        cache: true,
        cacheLocation: path.resolve(pathConfig.nodeModules, '.cache'),
        emitError: true,
        emitWarning: true,
        fix: true,
      }),
      new WebpackManifestPlugin({
        basePath: pathConfig.dist,
        fileName: 'manifest.json',
      }),
    ].filter(Boolean),
  }
}
