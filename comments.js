// Create web server
// 1. Create a web server with the http module
// 2. Create a server object
// 3. Run the server on port 8080

// 1. Create a web server with the http module
var http = require('http');

// 2. Create a server object
var server = http.createServer(function(request, response) {
  console.log('Request received');
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello World');
  response.end();
});

// 3. Run the server on port 8080
server.listen(8080);

console.log('Server running at http://localhost:8080');