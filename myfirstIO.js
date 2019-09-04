let fs = require('fs');
let file = fs.readFileSync(process.argv[2]);
file_s = file.toString();
file_a = file_s.split('\n');
console.log(file_a.length -1);
