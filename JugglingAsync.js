let bl = require('bl');
let http = require('http');
let url_1 = process.argv[2];
let url_2 = process.argv[3];
let url_3 = process.argv[4];

async function httper(url_1, url_2, url_3) {
  let promise_1 = new Promise((resolve, reject) => {
    http.get(url_1, (res, err) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(res);
      }
    });
  });
  await promise_1;
  promise_1.then(res =>
    res.pipe(
      bl(function(err, data) {
        console.log(data.toString());
      }),
    ),
  );
  let promise_2 = new Promise((resolve, reject) => {
    http.get(url_2, (res, err) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(res);
      }
    });
  });
  await promise_2;
  promise_2.then(res =>
    res.pipe(
      bl(function(err, data) {
        console.log(data.toString());
      }),
    ),
  );
  let promise_3 = new Promise((resolve, reject) => {
    http.get(url_3, (res, err) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(res);
      }
    });
  });
  await promise_3;
  promise_3.then(res =>
    res.pipe(
      bl(function(err, data) {
        console.log(data.toString());
      }),
    ),
  );
}

let promise = httper(url_1, url_2, url_3);
promise.catch(err => console.log(err));
