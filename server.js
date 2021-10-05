var express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

var app = express();

app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static('./static'));


// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.get('/trey', function(req, res) {

  res.render('pages/team');
});

app.get('/parker', function(req, res) {

  res.render('pages/team');
});

app.get('/leniece', function(req, res) {

  res.render('pages/team');
});

app.get('/logan', function(req, res) {

  res.render('pages/team');
});

app.listen(8080);
console.log('Server is listening on port 8080');
