var http = require('http');

var server = http.createServer(function (req, res) {
  res.statusCode=405;
  res.statusMessage='Not found';
  res.end();
});
server.listen(8080);