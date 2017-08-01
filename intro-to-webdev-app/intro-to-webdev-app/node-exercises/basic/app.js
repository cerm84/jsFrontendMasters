var http = require('http');
//calls http library from node
http.createServer(function (req, res) { //calls the create server function
  res.writeHead(200, {'Content-Type': 'text/plain'});//re- routes any request in 
  //the browser to the server app page
  res.end('Hello World\n');//end the response giving the Hello world line
}).listen(8080, '127.0.0.1');
//listen for port 8080 in the local host (127.0.0.1)
console.log('Server running at http://127.0.0.1:8080/');
//console.log shows the text in the cmd when the app is run