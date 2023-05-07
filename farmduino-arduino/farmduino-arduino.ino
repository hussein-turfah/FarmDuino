#include <DHT.h>
#include <Ethernet.h>
#include <ArduinoJson.h>

#define DHT_PIN 2
#define DHT_TYPE DHT22
#define fan_pin 4
EthernetServer server(80);

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
    client.println(data);
  } else {
    Serial.println("Connection failed");
  }
  client.stop();
}


void setup() {
  Serial.begin(9600);
  Ethernet.begin(mac);
  dht.begin();
  pinMode(fan_pin, OUTPUT);
  doc["light_intensity"] = light_intensity;
}


void loop() {
  readDHTData();
  readSoilMoisture();
  String json_data;
  serializeJson(doc, json_data);
  IPAddress ip = Ethernet.localIP();
  sendData(json_data, ip);

  // for hosting a server
  EthernetClient client = server.available();
  if (client) {
    if (client.connected()) {
      while (client.available()) {
        String request = client.readStringUntil('\r');

        if (request.indexOf("/fan_on") != -1) {
          digitalWrite(fan_pin, HIGH);
        } else if (request.indexOf("/fan_off") != -1) {
          digitalWrite(fan_pin, LOW);
        }
      }
      client.stop();
    }
    delay(3000);
  }
}