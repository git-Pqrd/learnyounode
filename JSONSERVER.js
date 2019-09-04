var http = require('http');
var fs = require('fs');

let port = process.argv[2];

var server = http.createServer(function(req, res) {
  let body = [];
  let url_parsed = req.url.split('?');
  if (req.method == 'GET' && url_parsed[0] == '/api/parsetime') {
    let args;
    args = url_parsed.slice(1, url_parsed.length);
    args.filter(arg => arg.includes('iso'));
    let iso = args[0].split('=')[1];
    let goodies = iso
      .split('T')[1]
      .split('.')[0]
      .split(':');
    let obj = {};
    obj.hour = goodies[0];
    obj.minute = goodies[1];
    obj.second = goodies[2];
    console.log(JSON.stringify(obj));
  }
  if (req.method == 'GET' && url_parsed[0] == '/api/parsetime') {
    let args;
    args = url_parsed.slice(1, url_parsed.length);
    args.filter(arg => arg.includes('iso'));
    let iso = args[0].split('=')[1];
    let goodies = iso
      .split('T')[1]
      .split('.')[0]
      .split(':');
    let obj = {};
    obj.hour = goodies[0];
    obj.minute = goodies[1];
    obj.second = goodies[2];
    console.log(JSON.stringify(obj));
  }
});
server.listen(port);

///api/parsetime?iso=2013-08-10T12:10:15.474Z

//properties. For example:

//{
//"hour": 14,
//"minute": 23,
//"second": 15
//}
