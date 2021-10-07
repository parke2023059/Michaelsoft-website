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

app.get('/trey', function(req, res) {
  res.render('pages/team', {
    name: "Trey Floto", //I don't know how, I don't know why, but adding new things here don't work without restarting the PC.
    line1:"🎓Programming student, class of 2023",
    line2:"🔧Future software engineer.",
    line3:"Music and audio enthusiast. Technology & open-source enthusiast. Car enthusiast. Sci-fi enthusiast. Forward thinker. My specialties include managing people, and committing to work. In my career, make enough money to sustain me.",
  });
});

app.get('/parker', function(req, res) {
  res.render('pages/team', {
    name: "Parker Fink",//epic :mortar_board:
    line1: ":mortar_board:Programming Student at YorkTech",
    line2: "I know a little bit of python, and am currently learning javascript.I am open to learning new programming languages.",
    line3: "", //you'll notice that these values are the bios themselves. This is because the team.ejs file takes these for the pages
  });
});

app.get('/leniece', function(req, res) {
  res.render('pages/team', {
    name: "Leniece Bennett",
    line1: "🎮Future game developer🎓 Programming student, YTECH. ‘22, Game Development, FSU. ‘26",
    line2: "Rhythm game enthusiast, Currently learning Javascript, open to learning many other programming languages!",
    line3:""
  });
});


app.get('/logan', function(req, res) {
  res.render('pages/team', {
    name: "Logan Hiller",//maybe update this in the future, but not until Logan actually gets caught up.
    line1: "Logan whatshisface was born in like 2004 or something. He was a student at York County School of Technology, and made it to Sophomore year. ",
    line2: "Logan was an okayish man. He died the way he lived. Quietly. He existed, and then he was gone. Just like that. Bam! He even left his 2021-22 year agenda on his desk. This is so tragic.",
    line3: "2004(?)-September 2021"
  });
});

app.listen(8080);//now listen closely heres a story about how my life got flip-turned upside down, and Id like to take a minute just sit right there imma tell you how I became the fresh prince of a town called bel-air.
console.log('Server is listening on port 8080');
