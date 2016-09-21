//mobile client script that recieves msgs from server and resets video in corresponding html file

var socket;
var myPlayer = videojs('myVideo');
var resetReady;

function setup(){
  //connect to server @ address
  socket = io.connect('http://10.20.223.49:3000');
  //on recieving newMsg from server, run resetVid
  socket.on('newMsg', resetVid);

  resetReady = false;
}

//reset video to frame 0 and play in loop
function resetVid(data){
  myPlayer.currentTime(0);
  myPlayer.loop(true);
  myPlayer.play();
  console.log("video reset ");
}

//send request to server to reset all videos
function resetAll() {
  console.log("Video Reset request sent to server");
  var data;
  socket.emit('mouse',data);
}

function draw() {
  if((myPlayer.currentTime() == 0) && (resetReady == true)){
    resetAll();
    resetReady = false;
  }
  if(myPlayer.currentTime() > 0){
    resetReady = true;
  }
}
