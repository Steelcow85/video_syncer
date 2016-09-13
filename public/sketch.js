var socket;
var rad;

function setup(){
  createCanvas(200,200);
  background(0);
  rad=0;

  socket = io.connect('http://localhost:3000');
  socket.on('newMsg', newDrawing);

  //create a reset button
  button = createButton('reset videos');
  button.position(75, 100);
  button.mousePressed(resetVideo);
}

function newDrawing(data){
  console.log("newMsg recieved: " + data);
}

function resetVideo() {
  console.log("Video Reset request sent to server");
  var data;
  socket.emit('mouse',data);

}

function draw() {

}
