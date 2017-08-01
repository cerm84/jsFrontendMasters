var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
//node needs a parser for json and other lenguages


var tweets = [
  {text: "Hai dude.", time: new Date().getTime() - 12300},
  {text: "This is cool.", time: new Date().getTime() - 1000},
  {text: "What's up?", time: new Date().getTime()},
];
//new Date() gives a object with Date() properties

app.use(express.static(__dirname + '/public'));

app.get('/ajax', function(request, response) {
  response.type('json');
  response.end(JSON.stringify({tweets:tweets}));
});
//shows the pre-define twets of the object 

app.post('/ajax', function(request, response) {
  var newTweet = {text: request.body.tweet, time: new Date().getTime()};
  tweets.push(newTweet);
  response.type('json');
  response.end(JSON.stringify(newTweet));
});
//add the new twets to the twets object

var server = app.listen(8080);