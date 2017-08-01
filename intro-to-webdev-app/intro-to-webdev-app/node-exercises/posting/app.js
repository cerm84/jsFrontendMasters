var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.post('/login', function(req, res){//app gets a post function instead of a get one
  //because of the username and password below, this are parameters to the post
  console.log(req.body.username + " " +  req.body.password);//prints the name and password in the server log
  if (req.body.username === "brian" && req.body.password === "pass") {
    res.json(200, {status:"success"});//we return JSON instead of simple text
  }
  else {
    res.json(401, {status:"failure"})
  }
});

var server = app.listen(8080);