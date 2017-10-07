const express = require('express')
const app = express()

var mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.render('index', {})
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})