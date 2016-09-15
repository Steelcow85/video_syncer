//mobile client

var socket;
var rad;
var video;
var myPlayer = videojs('client_02_vid');

function setup(){
  rad=0;
//  video = createVideo('videos/countdown_mp4_480.mp4');
  //video.loop();

  //video.addCue(5.0, resetVideo);
  //video.onended(resetVideo)

  //Question for Dima: do I need to change my IP in each sketch each time I reconnect to wifi???

  socket = io.connect('http://10.22.56.110:3000');
  socket.on('newMsg', newDrawing);
}
videojs("client_02_vid").ready(function(){
  var myPlayer = this;

  myPlayer.loop();

});

function newDrawing(data){
  // video.time(0);
  // video.play();
  myPlayer.currentTime(0);
  myplayer.loop(true);
  myPlayer.play();
  console.log("video reset");

}
function resetVideo(){
  // video.time(0);
  myPlayer.currentTime(0);
  myplayer.loop(true);
  myPlayer.play();
}



function draw() {

}
