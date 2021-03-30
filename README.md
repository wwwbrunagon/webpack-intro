# webpack-intro

webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging ...
[Getting Started](https://webpack.js.org/)

---

# Let's Code

## tips:

Use the shortcut `shift + alt + f` to format the code

---
Install vscode [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) plugin to launch a local development server with live reload feature for static & dynamic pages.

---
`npm init -y`
to create a default json pack file

---
`npm install webpack webpack-cli —save-dev`
- webpack (js packaging framework)

- webpack cli (structure we use to work with the webpack command lines)

- —save-dev === save as a development dependency

---
`npm install webpack-dev-server —save-dev`
live server

---
`npx webpack —config webpack.config.js`
check that the webpack is configured correctly

---
`npm install html-webpack-plugin —save-dev`
create new HTML file for production and will give us new possibilities for configuring html files

---
`node-sass sass-loader style-loader css-loader mini-css-extract-plugin —save-dev`
- node-sass: sass compiler for node
- sass-loader: loads sass webpack
- style-loader: inject styles into the gift
- css-loader: interprets css directives as import url and resolves your directives
- mini-css-extract-plugin: extract the css out of the js and create a separate css file

---
`npm install file-loader —save-dev`
Image loader
