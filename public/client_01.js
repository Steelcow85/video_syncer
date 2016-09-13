var socket;
var rad;

function setup(){
  createCanvas(200,200);
  background(0);
  rad=0;
  socket = io.connect('http://localhost:3000');
  socket.on('newMsg', newDrawing);
}

function newDrawing(data){
  rad = data;
  background(0);
  console.log("newMsg recieved: " + rad);

}
//
// function mouseClicked() {
//   console.log("an Event!");
//
//   var data = {
//     x: mouseX,
//     y: mouseY,
//   }
//   socket.emit('mouse',data);
//
// }

function draw() {
  noStroke();
  fill(200,100,50);
  ellipse(width/2, height/2, rad, rad)
  rad++;
}
