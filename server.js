var express = require('express');
var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("Socket Server Running")

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
  console.log('new connection');

  socket.on('mouse', mouseMsg);

  function mouseMsg(data){
    var rad = 0;
    io.emit('newMsg', rad);
    console.log("Reset Request Recieved on Server, sent back to clients");
  }

}
