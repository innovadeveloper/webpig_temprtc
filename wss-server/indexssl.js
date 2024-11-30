require('dotenv').config(); // Para cargar variables de entorno desde un archivo .env
const fs = require('fs');
const https = require('https');
const express = require('express');
const WebSocket = require('ws');
const bodyParser = require('body-parser');

// Cargar los certificados SSL
const privateKey = fs.readFileSync('./private-key.pem', 'utf8');
const certificate = fs.readFileSync('./certificate.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const app = express();
const server = https.createServer(credentials, app); // Creamos el servidor HTTPS

// Crear el servidor WebSocket
const wss = new WebSocket.Server({ server }); // Usamos el mismo servidor para WebSockets

// Configuración de Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware para permitir CORS si es necesario
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
});

// Manejo de conexiones WebSocket
wss.on('connection', ws => {
  console.log('Cliente conectado');
  
  // Manejar mensajes entrantes
  ws.on('message', message => {
    console.log('Mensaje recibido:', message);
  });

  // Enviar un mensaje de bienvenida al cliente
  ws.send('Bienvenido al servidor WebSocket seguro!');
});

// Levantar el servidor HTTPS
const PORT = process.env.PORT || 9091;
server.listen(PORT, () => {
  console.log(`Servidor HTTPS y WebSocket corriendo en https://localhost:${PORT}`);
});