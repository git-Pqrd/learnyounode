const net = require('net');
let port = process.argv[2];

var server = net.createServer(function(socket) {
  const d = new Date();
  let year = d.getFullYear();
  let month = d.getMonth();
  if (month < 10) {
    month = '0' + String(month+1);
  }
  let day = d.getDate();
  if (day < 10) {
    day = '0' + String(day);
  }
  let hour = d.getHours();
  let minute = d.getMinutes();
  if (minute < 10) {
    minute = '0' + String(minute);
  }
  socket.write(
    year + '-' + month + '-' + day + ' ' + hour + ':' + minute + '\n',
  );
  socket.destroy();
});
server.listen(port);
