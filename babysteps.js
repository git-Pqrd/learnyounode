let args = process.argv;
let results = 0;
let before_r = [];
for (var i = 0, len = args.length; i < len; i++) {
  if ( i < 2 ) {
    before_r.push(args[i]);
  } else {
    results += parseInt(args[i]);
  }
}
console.log( results);
