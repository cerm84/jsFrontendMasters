var express = require('express');
var app = express();

app.get('/cheers/', function(request, responce){
    responce.end('Have a lovely day!!');
});

app.get('/jeers/', function(request, responce){
    responce.end('You look like my dog');
});

var server = app.listen(8080, function() {
    console.log('Listening on port 8080');
});