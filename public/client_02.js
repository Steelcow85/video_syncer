//mobile client

var socket;
var rad;
var video;

function setup(){
  rad=0;
  video = createVideo('videos/countdown_mp4_480.mp4');
  video.loop();
  //video.addCue(5.0, resetVideo);
  //video.onended(resetVideo)

  //Question for Dima: do I need to change my IP in each sketch each time I reconnect to wifi???

  socket = io.connect('http://10.20.56.113:3000');
  socket.on('newMsg', newDrawing);
}

function newDrawing(data){
  video.time(0);
  video.play();
  console.log("video reset");

}
function resetVideo(){
  video.time(0);
}
function draw() {


}
