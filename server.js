var express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const url = require('url');

var app = express();

var rawdata = fs.readFileSync('teamprofiles.json');
var profiles = JSON.parse(rawdata);

rawdata = fs.readFileSync('comments.json');

app.use(bodyParser.urlencoded({extended: true}));


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
    line1:"🎓Programming student, class of 2023", //too bad!
    line2:"🔧Future software engineer.",
    line3:"Music and audio enthusiast. Technology & open-source enthusiast. Car enthusiast. Sci-fi enthusiast. Forward thinker. My specialties include managing people, and committing to work. In my career, make enough money to sustain me.",
  });
});

app.get('/parker', function(req, res) {
  res.render('pages/team', {
    name: "Parker Fink",//epic :mortar_board:
    line1: "🎓Programming Student at YorkTech",
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
  


app.get('/feedback',function (req, res) {
  rawdata = fs.readFileSync('comments.json');
  let commentfile = JSON.parse(rawdata);
  console.log(commentfile.comments);
  res.render('pages/feedback.ejs', {
    comments: commentfile.comments
  })
});
app.post('/feedback', function(req, res) {
  var name = req.body.name //the boxes in feedback.ejs
  var comment = req.body.comment //this: <input type="text" name="Name" placeholder="Enter your name here.." value="">
  var feedbackobjects = {name: name, comment: comment}
  if (feedbackobjects.name && feedbackobjects.comment) {
    var rawdata = fs.readFileSync('comments.json')
    //open and read the comments file, save to variable
    var comment = JSON.parse(rawdata)
    //convert the raw data to JSON with JSON.parse(), save to variable
    comment['comments'].push(feedbackobjects)
    //push feedbackobjects to commentfiles's comment array
    var sendwords = JSON.stringify(comment)
    //stringify the commentsfile variable
    fs.writeFile('comments.json', sendwords, 'utf8', function(){//writes the list to comments.json
      console.log('file is written, epic');//lets fucking gooooooooo
    })
    //write commentsfile variable to the file again
    res.redirect('/feedback')
    //render feedback template with success message or res.redirect() to /feedback
  } else {
    res.send('missing data')
    //render feedback with error message
  }
});

app.listen(8080);//now listen closely heres a story about how my life got flip-turned upside down, and Id like to take a minute just sit right there imma tell you how I became the fresh prince of a town called bel-air.
console.log('Server is listening on port 8080');
