var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var nodemailer = require('nodemailer');

server.listen(3001);
// WARNING: app.listen(80) will NOT work here!

// Default message if you visit the API URL
app.get('/', function(req, res) {
  res.send('Water you doing here?');
});

// Nodemailer
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport(
  'smtps://' + process.env.EMAIL + ':' + process.env.PASS + '@smtp.gmail.com'
);

// setup e-mail data with unicode symbols
var mailOptions = {
  from: '"Fred Foo ?" <foo@blurdybloop.com>', // sender address
  to: 'gageprod@gmail.com', // list of receivers
  subject: 'MESSAGE FROM PORTFOLIO SITE!', // Subject line
  text: 'Hello world ?', // plaintext body
  html: '<b>Hello world ?</b>' // html body
};

// Handling Socket Connections/Requests
io.on('connection', function(socket) {
  // Receiving email requests
  socket.on('email', function(data) {
    mailOptions.from = '"Fred Foo ?" <' + data.email + '>';
    mailOptions.text = data.email + '  ' + data.message;
    mailOptions.html =
      '<b>From: ' + data.email + '</b><br /><hr><br />' + data.message;

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        return console.log(error);
      }
      console.log('Message send: ' + info.response);
    });
  });
});
