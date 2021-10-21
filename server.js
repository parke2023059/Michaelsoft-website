var express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const url = require('url');

var app = express();

var rawdata = fs.readFileSync('Teamprofiles.json');
var profiles = JSON.parse(rawdata);

rawdata = fs.readFileSync('Comments.json');

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


app.get('/feedback', function(req, res) {
  res.render('pages/feedback', {
  });
});

//var namesAndComments = []
//namesAndComments.push('name', 'comment');
//console.log(namesAndComments);

app.post('/feedback', function(req, res) {
  var name = req.body.name //the boxes in feedback.ejs
  var comment = req.body.comment //this: <input type="text" name="Name" placeholder="Enter your name here.." value="">
  var feedbackobjects = {name: name, comment: comment}; //this and the previous 2 variables are required for the if statement. Don't remove.
  //this is team c's work
  var rawcomments = fs.readFileSync('comments.json') //reading json file
  var comment = JSON.parse(rawcomments)// using json raw data to data

  if (feedbackobjects.name && feedbackobjects.comment) {
    console.log('Name and Comment have been inputted');

    comment['comments'].push(feedbackobjects) // put it in the array //

  } else if (feedbackobjects.comment) {
    console.log('John Doe has attempted to submit a comment (no name)')
  } else if (feedbackobjects.name) { //if name but no comment, probably
    console.log('no comment')
    res.render('pages/feedback')
  } else {
    console.log('no name or comment.')
  }
});


/*
        _       _                                                      _       _             _       _
      | |     (_)                                                    | |     (_)           | |     (_)
   __| | ___  _ _ __    _   _ _ __   _ __ ___   ___  _ __ ___     __| | ___  _ _ __     __| | ___  _ _ __    _   _ _ __   _ __ ___   ___  _ __ ___
 / _` |/ _ \| | '_ \  | | | | '__| | '_ ` _ \ / _ \| '_ ` _ \   / _` |/ _ \| | '_ \   / _` |/ _ \| | '_ \  | | | | '__| | '_ ` _ \ / _ \| '_ ` _ \
| (_| | (_) | | | | | | |_| | |    | | | | | | (_) | | | | | | | (_| | (_) | | | | | | (_| | (_) | | | | | | |_| | |    | | | | | | (_) | | | | | |
\__,_|\___/|_|_| |_|  \__,_|_|    |_| |_| |_|\___/|_| |_| |_|  \__,_|\___/|_|_| |_|  \__,_|\___/|_|_| |_|  \__,_|_|    |_| |_| |_|\___/|_| |_| |_|
*/

/*
app.get('/feedback',function(req, res){
  res.render('pages/feedback',{
  const feedback = url.parse(req.url,true).query;
  console.log(feedback);

  if (feedback.name && feedback.adjective){
    res.send(`howdy, ${feedback.name} your overlords have noticed that you're doing ${feedback.adjective}. Care to elaborate?`);
    var rawdata = fs.readFileSync('comments.json')
    var comment = JSON.parse(rawdata)
    var feedbackobjects = {name: feedback.name, adjective: feedback.adjective}
    comment['comments'].push(feedbackobjects)
    var sendwords = JSON.stringify(comment)
    fs.writeFile('comments.json', sendwords, 'utf8', function(){
      console.log('file is written, epic');
    })
  }}

  if (feedback.adjective == null || feedback.adjective == undefined){
      res.send("DO THE ADJECTIVE NOW");}
  if (feedback.name == null || feedback.name == undefined)
   { res.send("DO THE NAME");
  }
  });

/*
__          ___             _       _   _     _           _ _  __  __ _            _ _
\ \        / / |           (_)     | | | |   (_)         | (_)/ _|/ _(_)          | | |
 \ \  /\  / /| |__  _   _   _ ___  | |_| |__  _ ___    __| |_| |_| |_ _  ___ _   _| | |_
  \ \/  \/ / | '_ \| | | | | / __| | __| '_ \| / __|  / _` | |  _|  _| |/ __| | | | | __|
   \  /\  /  | | | | |_| | | \__ \ | |_| | | | \__ \ | (_| | | | | | | | (__| |_| | | |_
    \/  \/   |_| |_|\__, | |_|___/  \__|_| |_|_|___/  \__,_|_|_| |_| |_|\___|\__,_|_|\__|
                     __/ |
                    |___/
*/
app.listen(8080);//now listen closely heres a story about how my life got flip-turned upside down, and Id like to take a minute just sit right there imma tell you how I became the fresh prince of a town called bel-air.
console.log('Server is listening on port 8080');
