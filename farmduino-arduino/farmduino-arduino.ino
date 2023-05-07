#include <DHT.h>
#include <Wire.h>

#define DHT_PIN 2
#define DHT_TYPE DHT22
#define GY30_ADDR 0x23


DHT dht(DHT_PIN, DHT_TYPE);

int soil_moisture_pin = A0;
int soil_moisture_value = 0;
int moisture_percentage = 0;
int light_intensity = -5; //for demonstrating notifications on frontend



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
  soil_moisture_value = analogRead(soil_moisture_pin);
  moisture_percentage = map(soil_moisture_value, 0, 1023, 0, 100);
  Serial.print("Soil moisture: ");
  Serial.print(moisture_percentage);
  Serial.println("%");
}


void setup() {
  Serial.begin(9600);
  dht.begin();
}

void loop() {
  readDHTData();
  readSoilMoisture();
  Serial.print(light_intensity);
  Serial.println(" lux");
  delay(3000);
}
