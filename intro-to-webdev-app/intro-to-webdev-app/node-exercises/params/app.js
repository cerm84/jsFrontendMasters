var express = require('express');
var app = express();

app.get('/team/:name', function(req, res){//:name ask for a parameter the user inputs in the nav bar
  res.setHeader('Content-Type','text/plain');
  res.send("You picked " + req.params.name);
});

var server = app.listen(8080);