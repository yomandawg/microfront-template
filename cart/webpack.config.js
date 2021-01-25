const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cart', // has to be identical to container `remotes` key
      filename /* sets the name of the manifest file */: 'remoteEntry.js',
      exposes: {
        /* aliases */
        // './CartIndex': './src/index',
        './CartIndex': './src/bootstrap', // exports the `mount` function
      },
      shared: ['faker' /* shared vendor */],
      // shared: {
      //   faker: {
      //     singleton: true,
      //   },
      // },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
