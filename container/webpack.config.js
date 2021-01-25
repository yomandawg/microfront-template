const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8080,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container', // not used; only mentioned for clarity
      remotes /* lists projects that the container can search to get additional code */: {
        products /* load the file at the listed URL if anything in Container has an `import abc from 'products'` */:
          'products@http://localhost:8081/remoteEntry.js' /* [name property in the Products webpack config file]@[URL for the remoteEntry file] */,
        cart: 'cart@http://localhost:8082/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
