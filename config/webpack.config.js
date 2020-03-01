const path = require('path')

const webpack = require('webpack')
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes')
const postcssPresetEnv = require('postcss-preset-env')
const postcssNormalize = require('postcss-normalize')
const stylelint = require('stylelint')
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


module.exports = (_, argv) => {
  const isProductionMode = argv.mode == 'production' ? true : false
  const isDevelopmentMode = argv.mode == 'development' ? true : false

  process.env.NODE_ENV = isProductionMode ? 'production' : 'development'
  process.env.BABEL_ENV = process.env.NODE_ENV
  process.env.BROWSERSLIST_ENV = process.env.NODE_ENV

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
          modules: true,
          importLoaders: useSassLoader ? 3 : 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          indent: 'postcss',
          sourceMap: true,
          plugins: () => [
            stylelint({
              configFile: pathConfig.stylelint,
              fix: true,
              cache: true,
              cacheLocation:
                path.resolve(pathConfig.nodeModules, '.cache'),
            }),
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
      host: 'localhost',
      https: true,
      open: true,
      openPage: 'home.html',
      port: 3000,
      quiet: false,
    },
    context: pathConfig.src,
    entry: {
      'home':
        path.resolve(pathConfig.src, 'route/home.jsx'),
      'advisor':
        path.resolve(pathConfig.src, 'route/advisor.jsx'),
      'member/alumni':
        path.resolve(pathConfig.src, 'route/member/alumni.jsx'),
      'member/master':
        path.resolve(pathConfig.src, 'route/member/master.jsx'),
      'member/phd':
        path.resolve(pathConfig.src, 'route/member/phd.jsx'),
      'research/competition':
        path.resolve(pathConfig.src, 'route/research/competition.jsx'),
      'research/project':
        path.resolve(pathConfig.src, 'route/research/project.jsx'),
      'research/publication':
        path.resolve(pathConfig.src, 'route/research/publication.jsx'),
      'relate':
        path.resolve(pathConfig.src, 'route/relate.jsx'),
    },
    output: {
      path: pathConfig.dist,
      pathinfo: isDevelopmentMode,
      publicPath: isProductionMode ?
        'https://IKMLab.github.io/dist' :
        'https://localhost:3000/',
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

      // runtimeChunk: {
      //   name: (entrypoint) => `runtime-${entrypoint.name}`,
      // },
      // splitChunks: {
      //   // chunks: 'all',
      //   cacheGroups: {
      //     vendor: {
      //       test: /[\\/]node_modules[\\/]/,
      //       name: false, // some problem here "vendors"
      //       chunks: 'all',
      //       reuseExistingChunk: true,
      //     },
      //     react: {
      //       test: /[\\/](react|react-dom)[\\/]/,
      //       name: false, // some problem here "react"
      //       chunks: 'all',
      //       reuseExistingChunk: true,
      //     },
      //     styles: {
      //       test: /\.css$/,
      //       name: false, // some problem here "styles"
      //       chunks: 'all',
      //       reuseExistingChunk: true,
      //     },
      //     default: false,
      //   },
      // },
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
                // cacheDirectory: true,
                // cacheCompression: false,
                // compact: isProductionMode,
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
        // "file" loader makes sure those assets get served by WebpackDevServer.
        // When you `import` an asset, you get its (virtual) filename.
        // In production, they would get copied to the `dist` folder.
        // This loader doesn't use a "test" so it will catch all modules
        // that fall through the other loaders.
        {
          exclude: /\.(js|mjs|jsx|ts|tsx|html|json|css|sass|scss)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'media/[name].[ext]',
            },
          },
        },
        // ** STOP ** Are you adding a new loader?
        // Make sure to add the new loader(s) before the "file" loader.
      ],
    },
    plugins: [
      new HTMLWebpackPulgin({
        template: path.resolve(pathConfig.src, 'template/index.html'),
        chunks: [
          'home',
          'vendor~home',
          'runtime-home',
        ],
        filename: path.resolve(pathConfig.dist, 'home.html'),
      }),
      new HTMLWebpackPulgin({
        template: path.resolve(pathConfig.src, 'template/index.html'),
        chunks: [
          'advisor',
          'vendor~advisor',
          'runtime-advisor',
        ],
        filename: path.resolve(pathConfig.dist, 'advisor.html'),
      }),
      new HTMLWebpackPulgin({
        template: path.resolve(pathConfig.src, 'template/index.html'),
        chunks: [
          'member/alumni',
          'vendor~member/alumni',
          'runtime-member/alumni',
        ],
        filename: path.resolve(pathConfig.dist, 'member/alumni.html'),
      }),
      new HTMLWebpackPulgin({
        template: path.resolve(pathConfig.src, 'template/index.html'),
        chunks: [
          'member/master',
          'vendor~member/master',
          'runtime-member/master',
        ],
        filename: path.resolve(pathConfig.dist, 'member/master.html'),
      }),
      new HTMLWebpackPulgin({
        template: path.resolve(pathConfig.src, 'template/index.html'),
        chunks: [
          'member/phd',
          'vendor~member/phd',
          'runtime-member/phd',
        ],
        filename: path.resolve(pathConfig.dist, 'member/phd.html'),
      }),
      new HTMLWebpackPulgin({
        template: path.resolve(pathConfig.src, 'template/index.html'),
        chunks: [
          'research/competition',
          'vendor~research/competition',
          'runtime-research/competition',
        ],
        filename: path.resolve(pathConfig.dist, 'research/competition.html'),
      }),
      new HTMLWebpackPulgin({
        template: path.resolve(pathConfig.src, 'template/index.html'),
        chunks: [
          'research/project',
          'vendor~research/project',
          'runtime-research/project',
        ],
        filename: path.resolve(pathConfig.dist, 'research/project.html'),
      }),
      new HTMLWebpackPulgin({
        template: path.resolve(pathConfig.src, 'template/index.html'),
        chunks: [
          'research/publication',
          'vendor~research/publication',
          'runtime-research/publication',
        ],
        filename: path.resolve(pathConfig.dist, 'research/publication.html'),
      }),
      new HTMLWebpackPulgin({
        template: path.resolve(pathConfig.src, 'template/index.html'),
        chunks: [
          'relate',
          'vendor~relate',
          'runtime-relate',
        ],
        filename: path.resolve(pathConfig.dist, 'relate.html'),
      }),
      isDevelopmentMode && new webpack.HotModuleReplacementPlugin(),
      new CaseSensitivePathsPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].bundle.css',
      }),
      new ManifestPlugin({
        fileName: path.resolve(pathConfig.dist, 'manifest.json'),
      }),
    ].filter(Boolean),
  }
}
