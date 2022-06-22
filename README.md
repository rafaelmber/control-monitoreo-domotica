# control-monitoreo-iot

Este proyecto consiste en el diseño de una plataforma de IoT para el encendido y apagado de algunas cargas eléctricas dentro de un hogar.

El proyecto se encuentra dividido en tres secciones:
- La interfaz de usuario remota que consiste en una aplicación Web desarrollada con React, conectada a un servicio de Firebase Realtime Database y servida por Firebase Hosting.
- Una Raspberry Pi Zero W que se encarga de conectar la información de la Firebase Realtime Database con distintos dispositivos de activación de cargas a través de un programa escrito en Python y un servidor MQTT de Mosquitto.
- Los dispositivos de activación de cargas que cuentan con un módulo WIFI ESP-01 y una etapa de potencia para controlar las diferentes cargas eléctricas como Tomacorrientes o Luminarias. 

## Ingresar a la aplicación
Para ingresar a la aplicación de prueba se puede acceder por el siguiente link
https://proyecto-domotica-select.web.app/

## Comandos

Estos son los comandos para interactuar con el proyecto

```console

# Clonar repositorio:
$ git clone https://github.com/rafaelmber/control-monitoreo-domotica

# Instalar dependencias del proyecto
$ npm install

# Correr servidor de desarrollo
$ npm run dev

# Empaquetar proyecto para producción
$ npm run build

```
