var http = require('http');
var fs = require('fs');

let port = process.argv[2];
let file = process.argv[3];


var server = http.createServer(function(req, res) {
  var readStream = fs.createReadStream(file);
  // This will wait until we know the readable stream is actually valid before piping
  readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });
});
server.listen(port);
