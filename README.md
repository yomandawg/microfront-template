# Runtime Integration example for Micro-frontend

A basic micro-frontend template

## Architecture

Container App (orchestration Host)
<br>&rarr; Service App 1 (**Remote**)
<br>&rarr; Service App 2 (**Remote**)
<br>...
<br>&rarr; Service App N (**Remote**)

## Webpack Configuration Explanation

Container App

```js
module.exports = {
  ...
  devServer: {
    port: 8080, // a unique and notable port number
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
```

Service App

```js
module.exports = {
  ...
  devServer: {
    port: 808N, // additionally appended app may use incremented port numbers
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'products', // has to be identical to the Container `remotes` key
      filename /* sets the name of the manifest file */: 'remoteEntry.js',
      exposes: {
        /* alias */
        './ProductsIndex': './src/index.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
```

> Note that Service App's `public/index.html` template's sheer purpose is providing a development view.<br>
> The production HTML should target Container App's `public/index.html`.

## Usage

run

```
npm run start
```
