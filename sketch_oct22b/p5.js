var serial; //variable to hold an instance of the serial port library
var portName = 'COM7'; //fill in with YOUR port

var inData; //a variable to store incoming data
var sensor1, sensor2; //variables for each of my incoming sensor values - name these whatever you want

function setup() {
  createCanvas(600, 600);

  serial = new p5.SerialPort(); //a new instance of serial port library

  //set up events for serial communication
  serial.on('connected', serverConnected);
  serial.on('open', portOpen);
  serial.on('data', serialEvent);
  serial.on('error', serialError);

  //open our serial port
  serial.open(portName);
}

function draw() {
  background('limegreen');
  noStroke();
  var squareSize = 20;
  

  //use incoming sensor data to draw something to the screen
  //be sure to map your sensor range appropriately!!

  //map the slider to move the ellipse across the screen
  var slider1 = map(sensor2, 0, 1023, 0+squareSize/2, width-squareSize/2);
  
  var slider2= map(sensor1, 0, 1023, 0+squareSize/2, width-squareSize/2);
  
  stroke('rgba(100%,5%,100%,0.5)');
  strokeWeight(4);
  //noStroke(); // Don't draw a stroke around shapes
  var circle = ellipse(35, 35, 60, 60); // Draw left circle
  var circle2 = ellipse(175, 175, 60, 60);
  var circle3 = ellipse(320, 320, 60, 60);
  
  var ledSignal = '';
  
  if(sensor1 > 0 && sensor1 < 50 && sensor2 > 0 && sensor2 < 50){
    let c = color(0,255,255);
    fill(c);
    ledSignal = 'H'; 
    console.log(ledSignal);
    serial.write(ledSignal);
  }
  
    if(sensor1 > 250 && sensor1 < 300 && sensor2 > 250 && sensor2 < 300){
    let b = color(205,0,255);
    fill(b);
    ledSignal = 'B'; 
    console.log(ledSignal);
    serial.write(ledSignal);
  }
  
  if(sensor1 > 510 && sensor1 < 560 && sensor2 > 510 && sensor2 < 560){
    let x = color(255,255,0);
    fill(x);
    ledSignal = 'X'; 
    console.log(ledSignal);
    serial.write(ledSignal);
  }
  
  //if(sensor1 > 50 && sensor1 
  

  //one sensor value will change the fill
  //fill(map(sensor1, 0, 1023, 255, 0));

   square(slider1, slider2, squareSize);
  
  //console.log(circle);

  
  
  
  


}



//all my callback functions here:
//callback functions are useful for giving feedback
function serverConnected(){
	console.log('connected to the server');
}

function portOpen(){
  console.log('the serial port opened!');
}

//THIS IS WHERE WE ACTUALLY RECEIVE DATA!!!!!!
//make sure you're reading data based on how you're sending from arduino
function serialEvent(){
  //THIS READS BINARY - serial.read reads from the serial port, Number() sets the data type to a number
	// inData = Number(serial.read());  //reads data as a number not a string

  //THIS READS ASCII
  inData = serial.readLine(); //read until a carriage return

  //best practice is to make sure you're not reading null data
  if(inData.length > 0){
    //split the values apart at the comma
    var numbers = split(inData, ',');

    //set variables as numbers
    sensor1 = Number(numbers[0]);
    sensor2 = Number(numbers[1]);
  }

  console.log(sensor1 + ", " + sensor2);
}

function serialError(err){
  console.log('something went wrong with the port. ' + err);
}


// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 print(i + " " + portList[i]);
 }
}
