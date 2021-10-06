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
  res.render('pages/index', {
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.get('/team', function(req, res) {
  res.render('pages/team');
});

app.get('/trey', function(req, res) {
  res.render('pages/team', { name: 'Trey Floto'});
});

app.listen(8080);
console.log('Server is listening on port 8080');
