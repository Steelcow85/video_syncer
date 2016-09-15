var express = require('express');
var app = express();
var portNum = 3000;
//creat server on portNum
var server = app.listen(portNum);

//make files in public available
app.use(express.static('public'));

console.log("Socket Server Running on port: " + portNum);

var socket = require('socket.io');
var io = socket(server);

//on new connection to server run newCOnnection
io.sockets.on('connection', newConnection);

function newConnection(socket){
  console.log('new connection');

  //if socket recieves a message called 'mouse' from client, run mouseMsg
  socket.on('mouse', mouseMsg);

  function mouseMsg(data){
    //emit to all clients that server has been pinged with reset request
    io.emit('newMsg', data);
    console.log("Reset Request Recieved on Server, sent back to clients");
  }

}
