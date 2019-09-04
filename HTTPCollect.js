let bl = require('bl');
let http = require('http');
let url = process.argv[2];

async function httper(url) {
  let promise = new Promise((resolve, reject) => {
    http.get(url, (res, err) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(res);
      }
    });
  });
  return promise;
}

let promise = httper(url);
promise.then(res =>
  res.pipe(
    bl(function(err, data) {
      console.log(data.toString().length);
      console.log(data.toString());
    }),
  ),
);
promise.catch(err => console.log(err));
