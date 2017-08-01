var express = require('express');
var app = express();

app.get('/cheer.txt', function(req, res){
  res.send("Have a nice coding.");
});

app.get('/jeer.txt', function(req, res){
  res.send("Better sell Avon.");
});

var server = app.listen(8080, function() {
    console.log('Listening on port 8080');
});