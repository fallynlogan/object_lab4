void setup() {
  Serial.begin(9600);
}

void loop() {
  int pot1 = analogRead(A0);
  int pot2 = analogRead(A1);

  Serial.print(pot1);
  Serial.print(",");
  Serial.println(pot2);
  delay(1); //allows the serial port to keep up
}
