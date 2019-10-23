const int ledPin1 = 8;
const int ledPin2 = 12;
const int ledPin3 = 13;

int incomingByte;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);
  pinMode(ledPin3, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  int pot1 = analogRead(A0);
  int pot2 = analogRead(A1);

  Serial.print(pot1);
  Serial.print(",");
  Serial.println(pot2);
  delay(1);

  if(Serial.available() > 0){
    incomingByte = Serial.read();
    Serial.println(incomingByte);
    if(incomingByte == 'H'){
      digitalWrite(ledPin1, HIGH);
      digitalWrite(ledPin2, LOW);
      digitalWrite(ledPin3, LOW);
    }
    if(incomingByte == 'B'){
      digitalWrite(ledPin1, LOW);
      digitalWrite(ledPin2, HIGH);
      digitalWrite(ledPin3, LOW);
    }
     if(incomingByte == 'X'){
      digitalWrite(ledPin1, LOW);
      digitalWrite(ledPin2, LOW);
      digitalWrite(ledPin3, HIGH);
    }

  }
  
}
