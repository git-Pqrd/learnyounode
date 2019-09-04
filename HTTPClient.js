let http = require('http');
let url = process.argv[2]

let httper = new Promise((resolve, reject) => {
  http.get(url, (res, err) => {
    if (err) {
      reject(err);
    } else {
      res.on('data', function(x) {
        console.log(x.toString());
      });
    }
  });
});
