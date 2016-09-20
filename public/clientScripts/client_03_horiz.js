//mobile client script that recieves msgs from server and resets video in corresponding html file

var socket;
var myPlayer = videojs('myVideo');
var numLoops;


function setup(){
  //Is there an easy way to update the IP address for all the sketches?
  numLoops=0;
  //connect to server @ address
  socket = io.connect('http://10.20.223.49:3000');
  //on recieving newMsg from server, run resetVid
  socket.on('newMsg', resetVid);

  console.log("hi")
}

//reset video to frame 0 and play in loop
function resetVid(data){

  myPlayer.currentTime(.01);
  myPlayer.loop(true);
  myPlayer.play();
  console.log("video reset ");
  numLoops = 1;


}


function resetVideo() {
  console.log("Video Reset request sent to server");
  var data;
  socket.emit('mouse',data);

}

function draw() {
  if(myPlayer.currentTime() == 0 ){
    numLoops++;
    console.log(numLoops);
    resetVideo();
//There will have to be one master video, this calls reset on everyone else

  }


}
