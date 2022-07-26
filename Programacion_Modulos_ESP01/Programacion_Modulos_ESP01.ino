#include <ESP8266WiFi.h> //Librerias Wi-Fi para módulo ESP01
#include <PubSubClient.h> //Librerias MQTT para módulo ESP01
//...................................
#define D4   2
//...................................

// Cambiar los valores según la red a la que se desee conectar el ESP01.

const char* ssid = "TOÑA"; //Nombre de red Wi-Fi
const char* password = "3177498852"; //Contraseña de red Wi-Fi
const char* mqtt_server = "192.168.1.37"; //Servidor MQTT

WiFiClient espClient;
PubSubClient client(espClient);
unsigned long lastMsg = 0;
#define MSG_BUFFER_SIZE	(50)
char msg[MSG_BUFFER_SIZE];
int value = 0;

void setup_wifi() {

  delay(10);
  // Inicia conexión Wi-Fi del módulo ESP-01S
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  randomSeed(micros());
  //Imprime datos de la red Wi-Fi y dirección IP asignada al módulo ESP01
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
}

void callback(char* topic, byte* payload, unsigned int length) {
  Serial.print("Mensaje Recibido [");
  Serial.print(topic);
  Serial.print("] ");
  for (int i = 0; i < length; i++) { //Imprime el mensaje cada vez que se reciba un mensaje
    Serial.print((char)payload[i]);
  }
  Serial.println();
  //...................................
  // Envia un 1 a través del pin GPIO2 cada vez que se reciba un 1
  if ((char)payload[0] == '1') {
    digitalWrite(D4, HIGH);   // Activa el dispositivo que esté conectado a la salida de GPIO2
  } else {
    digitalWrite(D4, LOW);  // Si se recibe un 0 se desactiva el dispositivo que esté conectado a la salida de GPIO2
  }
  //...................................
}

void reconnect() {
  // Repetir hasta que se conecte al servidor MQTT
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    // Se entrega un nombre y una ID random al módulo para identificarlo
    String clientId = "ESP8266-Módulo3-";
    clientId += String(random(0xffff), HEX);
    // Intento de conectar al servidor MQTT
    if (client.connect(clientId.c_str())) {
      Serial.println("connected");
      // Si se conecta al servidor MQTT, imprime que se ha logrado conectar
      
      client.subscribe("systems/system_1/devices/device_3");
      // Se suscribe al topic de donde quiere recibir la información
      
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      // Si no se conecta, intentará conectarse nuevamente en 5 segundos
      delay(5000);
    }
  }
}

void setup() {
  
  pinMode(D4, OUTPUT);     // Inicializa el pin GPIO2 como salida
  //.....................
  
  Serial.begin(115200);
  setup_wifi();
  client.setServer(mqtt_server, 1883); //Servidor y puerto al que se debe conectar el módulo ESP01
  client.setCallback(callback);
}

void loop() {

  if (!client.connected()) { //Si no se logra conectar a la red Wi-Fi, lo seguirá intentando hasta que se conecte
    reconnect();
  }
  client.loop();

  unsigned long now = millis();

}
