const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const DashboardPlugin = require('webpack-dashboard/plugin');

const app = express();
const compiler = webpack(config);
compiler.apply(new DashboardPlugin());

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(4000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:4000');
});
