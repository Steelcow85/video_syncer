//mobile client script that recieves msgs from server and resets video in corresponding html file

var socket;
var myPlayer = videojs('myVideo');

function setup(){
  //connect to server @ address
  socket = io.connect('http://10.20.223.49:3000');
  //on recieving newMsg from server, run resetVid
  socket.on('newMsg', resetVid);

}

//reset video to frame 0 and play in loop
function resetVid(data){
  myPlayer.currentTime(0);
  myPlayer.loop(true);
  myPlayer.play();
  console.log("video reset ");
}



function draw() {

}
