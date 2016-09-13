//mobile client

var socket;
var rad;

function setup(){
  createCanvas(200,200);
  background(0);
  rad=0;

  //Question for Dima: do I need to change my IP in each sketch each time I reconnect to wifi???

  socket = io.connect('http://10.20.56.113:3000');
  socket.on('newMsg', newDrawing);
}

function newDrawing(data){
  rad = data;
  background(0);
  console.log("newMsg recieved: " + rad);

}

function draw() {
  noStroke();
  fill(255,255,50);
  ellipse(width/2, height/2, rad, rad)
  rad++;
}
