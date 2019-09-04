var http = require('http');
var fs = require('fs');

let port = process.argv[2];

var server = http.createServer(function(req, res) {
  let body = [];
  if (req.method == 'POST') {
    req.on('data', chunk => {
      word = chunk.toString(); // convert Buffer to string
      res.write(word.toUpperCase());
    });
  }
});
server.listen(port);
