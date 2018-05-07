const path = require('path');
const { NamedModulesPlugin, HotModuleReplacementPlugin, NoEmitOnErrorsPlugin, DefinePlugin, ProvidePlugin } = require('webpack');
const presetEnv = require('@babel/preset-env/lib/index.js');
delete presetEnv.default;
delete presetEnv.isPluginRequired;
delete presetEnv.transformIncludesAndExcludes;

const options = {
  devtool: 'source-map',
  mode: 'development',
  target: 'electron-renderer',
  plugins: [
    new NamedModulesPlugin(),
    new HotModuleReplacementPlugin(),
    new NoEmitOnErrorsPlugin(),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      ReactRouter: 'react-router-dom',
      classnames: 'classnames'
    })
  ],
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['.js']
  }
};
module.exports = options;