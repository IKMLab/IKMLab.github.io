const path = require('path')

const webpack = require('webpack')
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes')
const postcssPresetEnv = require('postcss-preset-env')
const postcssNormalize = require('postcss-normalize')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HTMLWebpackPulgin = require('html-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

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
    'https://ikmlab.csie.ncku.edu.tw/' :
    `https://${devConfig.host}:${devConfig.port}/`

  const getStyleLoaders = (useSassLoader = false) => {
    const loaders = [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: isDevelopmentMode,
          reloadAll: true,
        },
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          importLoaders: useSassLoader ? 3 : 1,
          modules: {
            mode: 'local',
            localIdentName: isProductionMode ?
              '[hash:base64]' : '[path][name]__[local]',
          },
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          indent: 'postcss',
          sourceMap: true,
          plugins: () => [
            postcssFlexbugsFixes,
            postcssPresetEnv({
              stage: 3,
            }),
            postcssNormalize(),
          ],
        },
      },
    ]

    if (useSassLoader) {
      loaders.push({
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
      })
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
          extractComments: false,
          sourceMap: true,
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 6,
            },
            mangle: {
              safari10: true,
            },
            output: {
              // Turned on because emoji and regex is not minified properly
              // using default. see:
              // https://github.com/facebook/create-react-app/issues/2488
              ascii_only: true,
              comments: false,
              ecma: 6,
              safari10: true,
              webkit: true,
            },
            // Sorry.
            ie8: false,
          },
        }),
        new OptimizeCSSAssetsPlugin(),
      ],
      // HTMLWebpackPlugin does not inject vendor chunks.
      // See issue:
      // https://github.com/jantimon/html-webpack-plugin/issues/882
      // This must be solve using next version of HTMLWebpackPlugin
      // See issue:
      // https://github.com/jantimon/html-webpack-plugin/issues/878
      runtimeChunk: {
        name: (entrypoint) => `runtime-${entrypoint.name}`,
      },
      splitChunks: {
        // chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: false, // some problem here "vendors"
            chunks: 'all',
            reuseExistingChunk: true,
          },
          react: {
            test: /[\\/](react|react-dom)[\\/]/,
            name: false, // some problem here "react"
            chunks: 'all',
            reuseExistingChunk: true,
          },
          styles: {
            test: /\.css$/,
            name: false, // some problem here "styles"
            chunks: 'all',
            reuseExistingChunk: true,
          },
          default: false,
        },
      },
    },
    module: {
      rules: [
        // First, run the linter.
        // It's important to do this before Babel processes the JS.
        {
          test: /\.(jsx?|tsx?)$/,
          include: [
            pathConfig.src,
          ],
          enforce: 'pre',
          use: [
            {
              loader: 'eslint-loader',
              options: {
                cache: true,
                fix: true,
                configFile: pathConfig.eslint,
              },
            },
          ],
        },
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
              use: getStyleLoaders(useSassLoader=false),
            },
            // Support CSS module
            {
              test: /\.module\.css$/,
              use: getStyleLoaders(useSassLoader=false),
            },
            {
              test: /\.(sass|scss)$/,
              exclude: /\.module\.(sass|scss)$/,
              // Don't consider Sass / SCSS imports dead code even if the
              // containing package claims to have no side effects.
              sideEffects: true,
              use: getStyleLoaders(useSassLoader=true),
            },
            // Support css module
            {
              test: /\.module\.(sass|scss)$/,
              use: getStyleLoaders(useSassLoader=true),
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
      new HTMLWebpackPulgin({
        template: path.resolve(pathConfig.src, 'res/template/index.html'),
        chunks: [
          'home',
          'vendor~home',
          'runtime-home',
        ],
        filename: path.resolve(pathConfig.dist, 'home.html'),
      }),
      new HTMLWebpackPulgin({
        template: path.resolve(pathConfig.src, 'res/template/index.html'),
        chunks: [
          'member',
          'vendor~member',
          'runtime-member',
        ],
        filename: path.resolve(pathConfig.dist, 'member.html'),
      }),
      new HTMLWebpackPulgin({
        template: path.resolve(pathConfig.src, 'res/template/index.html'),
        chunks: [
          'research',
          'vendor~research',
          'runtime-research',
        ],
        filename: path.resolve(pathConfig.dist, 'research.html'),
      }),
      new HTMLWebpackPulgin({
        template: path.resolve(pathConfig.src, 'res/template/index.html'),
        chunks: [
          'relate',
          'vendor~relate',
          'runtime-relate',
        ],
        filename: path.resolve(pathConfig.dist, 'relate.html'),
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
      new ManifestPlugin({
        fileName: path.resolve(pathConfig.dist, 'manifest.json'),
      }),
    ].filter(Boolean),
  }
}
