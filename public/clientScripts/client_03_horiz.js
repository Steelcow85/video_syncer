//mobile client script that recieves msgs from server and resets video in corresponding html file

var socket;
var myPlayer = videojs('myVideo');

function setup(){

  //Question for Dima: do I need to change my IP in each sketch each time I reconnect to wifi???

  //connect to server @ address
  socket = io.connect('http://10.20.57.20:3000');
  //on recieving newMsg from server, run resetVid
  socket.on('newMsg', resetVid);
}

//reset video to frame 0 and play in loop
function resetVid(data){

  myPlayer.currentTime(0);
  myplayer.loop(true);
  myPlayer.play();
  console.log("video reset");

}

function draw() {

}
