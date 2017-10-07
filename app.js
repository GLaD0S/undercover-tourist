const express = require('express')
var path = require('path')
const app = express()

app.use('/static', express.static(path.join(__dirname, 'static')))
var mustacheExpress = require('mustache-express')
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

app.get('/', function (req, res) {
  res.render('index', {})
})

app.get('/kitchen', function (req, res) {
  res.render('kitchen-index', {})
})

app.get('kitchen')

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})