# control-monitoreo-iot

Este proyecto consiste en el diseño de una plataforma de IoT para el control de algunas cargas eléctricas y el monitoreo de variables en un hogar

## Estructura

Vamos a usar una aplicación PWA con React, el serividor va a ser gestionado con Firebase
La conexión MQTT se va a implementar usando Python y las liberías correspondientes
Lo que vamos a intentar es hacer una aplicación completa que notifique al usuario las diferentes medidas de los sensores que tiene el sistema, además de poder encender y apagar las luminarias y los tomacorrientes de la casa que se encuentren conectados con el sistema

## Ingresar a la aplicación
Para ingresar a la aplicación de prueba se puede acceder por el siguiente link
https://control-domotica-test.web.app/

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
