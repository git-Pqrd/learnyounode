let fs = require('fs');
let fi = process.argv[2];

fs.readFile(fi, function() {
  file = fs.readFileSync(fi);
  file_s = file.toString();
  file_a = file_s.split('\n');
  console.log(file_a.length - 1);
});
