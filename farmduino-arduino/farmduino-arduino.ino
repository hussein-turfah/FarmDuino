#include <DHT.h>
#include <Ethernet.h>
#include <ArduinoJson.h>

#define DHT_PIN 2
#define DHT_TYPE DHT22


DHT dht(DHT_PIN, DHT_TYPE);

int soil_moisture_pin = A0;
int soil_moisture_value = 0;
int moisture_percentage = 0;
int light_intensity = -5; //for demonstrating notifications on frontend
byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED}; 


EthernetClient client;
StaticJsonDocument<200> doc;


void readDHTData() {
  float temperature = dht.readTemperature();
  float humidity = dht.readHumidity();
  doc["temperature"] = temperature;
  doc["humidity"] = humidity;
}


void readSoilMoisture() {
  soil_moisture_value = analogRead(soil_moisture_pin);
  moisture_percentage = map(soil_moisture_value, 0, 1023, 0, 100);
  doc["soil_moisture"] = moisture_percentage;
}


void sendData(String data, IPAddress arduino_ip) {
  if (client.connect("192.168.0.111", 8000)) { //server ip & port
    client.println("POST /api/v1.0.0/data HTTP/1.1");
    client.println("Host: " + arduino_ip); //arduino ip
    client.println("Connection: close");
    client.println("Content-Type: application/json");
    client.print("Content-Length: ");
    client.println(data.length());
    client.println();
    client.println(data);
  } else {
    Serial.println("Connection failed");
  }

  delay(1000);
  client.stop();
}


void setup() {
  Serial.begin(9600);
  dht.begin();
  doc["light_intensity"] = light_intensity;
}


void loop() {
  Ethernet.begin(mac);
  IPAddress ip = Ethernet.localIP();


  readDHTData();
  readSoilMoisture();
  String json_data;
  serializeJson(doc, json_data);
  sendData(json_data, ip);
  delay(3000);
}