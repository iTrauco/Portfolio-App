var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(process.env.PORT || 3001);
// WARNING: app.listen(80) will NOT work here!

app.get('/', function(req, res) {
  res.send('Water you doing here?');
});

io.on('connection', function(socket) {
  // Receiving email requests
  socket.on('email', function(data) {
    console.log(data);
  });
});
