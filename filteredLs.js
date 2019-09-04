let asyncGet = require('./filteredLsCompOne.js');
let dir = process.argv[2];
let ext = process.argv[3];

function filterer(err, files_f, ext) {
  if (err) {
    console.log(err);
  } else {
    return files_f;
  }
}

let promise = asyncGet(dir, ext, filterer);
promise.catch(x => console.log(x));
promise.then(all_f => all_f.map(fi => console.log(fi)));
