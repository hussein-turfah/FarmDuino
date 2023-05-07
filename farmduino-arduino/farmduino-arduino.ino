#include <DHT.h>

#define DHT_PIN 2
#define DHT_TYPE DHT22

DHT dht(DHT_PIN, DHT_TYPE);

int soilMoisturePin = A0;
int soilMoistureValue = 0;
int moisturePercentage = 0;



void readDHTData() {
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();

  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.print(" °C, Humidity: ");
  Serial.print(humidity);
  Serial.println(" %");
}


void readSoilMoisture() {
  soilMoistureValue = analogRead(soilMoisturePin);
  moisturePercentage = map(soilMoistureValue, 0, 1023, 0, 100);
  Serial.print("Soil moisture: ");
  Serial.print(moisturePercentage);
  Serial.println("%");
}



void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  readDHTData();
  readSoilMoisture();
  delay(5000);
}
