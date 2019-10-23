const int ledPin1 = 7;
const int ledPin2 = 8;
int incomingByte;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);

}

void loop() {
  // put your main code here, to run repeatedly:
   if (Serial.available() > 0) {   // see if there's incoming serial data
    incomingByte = Serial.read(); // read it
    if (incomingByte == 'a') {    // if it's a capital H (ASCII 72),
      digitalWrite(ledPin1, HIGH); // turn on the LED
      digitalWrite(ledPin2, LOW);
    }
    if (incomingByte == 'l') {    // if it's an L (ASCII 76)
      digitalWrite(ledPin1, LOW);  // turn off the LED
      digitalWrite(ledPin2, HIGH);
    }
  }
}
