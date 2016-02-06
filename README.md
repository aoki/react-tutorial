React Tutorial
================

## Step 1: Install npm modules.

First create `.npmrc`. That file is wrote settings such as the following.
`.npmrc` is read automatically when the execute `npm` command.   

```.npmrc
save = true
save-exact = true
```

If `save` is true then adding `--save` option.
 `save-exact` is true then adding `--save-exact` option.

Install the react and the react-dom modules via npm.

```
npm init
npm i react react-dom
```

Here, `react` is core module of react.js.
`react-dom` is dom rendering module.

- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)


Next, install the [webpack](https://www.npmjs.com/package/webpack).

```
npm i webpack -D
```

Install the Babel.
`babel-core` is core module of babel.
`babel-preset-es2015` translate source code to ES5 from the ES2015.
`babel-preset-react` translate to ES5 from `jsx`.
 
- [babel/packages/babel-core at master · babel/babel · GitHub](https://github.com/babel/babel/tree/master/packages/babel-core)
- [ES2015 preset · Babel](http://babeljs.io/docs/plugins/preset-es2015/)
- [React preset · Babel](http://babeljs.io/docs/plugins/preset-react/)


```
npm i babel-core babel-preset-es2015 babel-preset-react -D
```

Install babel-loader for using via the webpack. 

```
npm i babel-loader -D
```

Create a `.babelrc` and write setting such as the following.

```.babelrc
{
  "presets": ["es2015", "react"]
}
```

## Create webpack configuration

Next step is the create for configuration file for webpack.

`entry` is the entry point for the application.
`output.path` specifies the output destination of the generated files.
`__dirname` is the directory where this configuration file exists.
`filename` specifies the output file name.
`[name]` is the key name specified in the `entry` object. In this case `[name]` is `bundle`.

```webpack.config.js
const path = require('path');

module.exports = {
  entry: {
    bundle: '.src/app.js'
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        exclude: /node_modules/,
        test: /\.js[x]?$]/,
        query: {
          cacheDirectory: true
        }
      }
    ]
  }
};
```

After that, add npm run script to the `package.json`.

`-p` option equals to `--optimize-minimize` and `--optimize-occurence-order`.
`-d` option equals to `--debug`, `--devtool`, `source-map` and `--output-pathinfo`.
`--watch` option run the recompile on the file change.

```json
  "scripts": {
    "build:prod": "webpack -p",
    "build:dev": "webpack -d",
    "watch": "webpack -d --watch",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

## Create JavaScript and html files and build

- `src/js/app.js`
- `public/index.html`

```
npm run build:dev
```
