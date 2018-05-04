const path = require('path');
const { NamedModulesPlugin, HotModuleReplacementPlugin, NoEmitOnErrorsPlugin, DefinePlugin, ProvidePlugin } = require('webpack');
const presetEnv = require('@babel/preset-env/lib/index.js');
delete presetEnv.default;
delete presetEnv.isPluginRequired;
delete presetEnv.transformIncludesAndExcludes;

const options = {
  mode: 'development',
  target: 'electron-renderer',
  entry: [
    path.join(__dirname, 'src/renderer/main.js')
  ],
  output: {
    path: path.join(__dirname, 'dist/main/'),
    filename: '[name].js'
  },
  plugins: [
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
    new NoEmitOnErrorsPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom"
    })
  ],
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              hmr: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]',
              camelCase: 'dashesOnly'
            }
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: [
                'node_modules/foundation-sites/scss'
              ]
            }
          }]
      }
    ],
  },
};
module.exports = options;