const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');
const DashboardPlugin = require('webpack-dashboard/plugin');

var aql = require('jfrog-aql'),
      username = "shafeeq",
      password = "password",
      auth = "Basic " + new Buffer(username + ":" + password).toString("base64");
  // config object is used by the Request class
  aql.config({
        uri: "http://10.207.16.108:8081/artifactory/api/search/aql",
        headers: {
           Authorization: auth
        }
     });

const app = express();
const compiler = webpack(config);
compiler.apply(new DashboardPlugin());

// app.use(express.static(path.join(__dirname, 'static')));
app.use('/', express.static(__dirname));
app.use(express.static('src/static'));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/jfrog', (req, res) => {
            console.log("jfrog")
var aqlQuery = aql.items.find().include("*").limit(10);
   aql.query(aqlQuery).then((data) => {
         console.log(data);
      });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(5000, 'localhost', (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:5000');
});
