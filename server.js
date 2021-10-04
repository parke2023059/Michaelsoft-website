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
  let members = [
    { name: 'Trey Floto', },
    { name: 'Parker Fink'},
    { name: 'Leniece Bennett'},
    { name: 'Logan Hiller'}
  ];
  var tagline = "No programming concept is complete without our members.";

  res.render('pages/index', {
    members: members,
    tagline: tagline
  });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.get('/team', function(req, res) {
  res.render('pages/team');
});

app.get('/teamtest', function(req, res) {
  res.render('pages/teamtest');
});

app.listen(8080);
console.log('Server is listening on port 8080');
