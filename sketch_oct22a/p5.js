var serial; //variable to hold an instance of the serial port library
var portName = 'COM7'; //fill in with YOUR port

function setup() {
  createCanvas(400, 300);

  serial = new p5.SerialPort(); //a new instance of serial port library

  //set up events for serial communication
  serial.on('connected', serverConnected);
  serial.on('open', portOpen);
  serial.on('data', serialEvent);
  serial.on('error', serialError);
  serial.on('close', portClose);

  //open our serial port
  serial.open(portName);
}

function draw() {
  background('limegreen');

  // fill('mediumseagreen');
  // noStroke();
  // rect(0, 0, width/2, height);

}



//SEND ASCII CHARACTER TO ARDUINO
//when a user enters 'H' or 'L', this is sent to Arduino
 function keyPressed() {
  if (key =='a' || key ==='l') {//if the user presses H or L
    serial.write(key);             //send it out the serial port
     console.log(key);
  	}
 }



//all my callback functions here:
//these are useful for giving feedback
function serverConnected(){
	console.log('connected to the server');
}

function portOpen(){
  console.log('the serial port opened!');
}

/* this example does not receive data also,
but this is where you would incorporate that code */
function serialEvent(){

}

function serialError(err){
  console.log('something went wrong with the port. ' + err);
}

function portClose(){
  console.log('the port was closed');
}

// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 print(i + " " + portList[i]);
 }
}
