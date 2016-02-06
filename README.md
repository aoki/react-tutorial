React Tutorial
================

## Step 1: Install npm modules.

First create `.npmrc`. That file is wrote settings such as the following.
`.npmrc` is read automatically when the execute `npm` command.   

```
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
