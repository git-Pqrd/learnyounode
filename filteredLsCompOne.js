let fs = require('fs');

async function asyncGet(dir, ext, callback) {
  let promise = new Promise(function(resolve, reject) {
    let files = fs.readdir(dir, (err, content) => {
      if (!err) {
        file_g = []
        content
          .filter(fi => fi.split('.')[fi.split('.').length - 1] == ext)
          .filter(fi => fi.includes('.'))
          .map(fi => {
            file_g.push(fi);
          });
        let res = callback(null, file_g, ext);
        return resolve(res);
      } else {
        callback(err, [], ext);
        return reject(err.message);
      }
    });
  });
  return promise;
}

module.exports = asyncGet;
