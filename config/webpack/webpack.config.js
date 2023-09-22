// See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { generateWebpackConfig } = require('shakapacker');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');

const webpackConfig = generateWebpackConfig({
  plugins: [new ForkTsCheckerWebpackPlugin()],
  resolve: {
    plugins: [new TsconfigPathsWebpackPlugin()],
  },
});

module.exports = webpackConfig;
