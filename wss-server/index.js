const fs = require('fs');
const https = require('https');
const wss = require('./wss');
const log = require('loglevel');
const dotenv = require('dotenv');
dotenv.config();
log.setLevel('debug'); // Puedes usar 'trace', 'debug', 'info', 'warn', 'error'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Cargar certificados SSL
const SSL_CERT_PATH = './certificate.pem'; // Ruta del certificado SSL
const SSL_KEY_PATH = './private-key.pem';  // Ruta de la clave privada SSL

// Leer los archivos de certificado
const options = {
  key: fs.readFileSync(SSL_KEY_PATH),
  cert: fs.readFileSync(SSL_CERT_PATH),
};

// Inicializar el servidor HTTPS
const app = require('express')();  // Usamos express para crear el servidor HTTPS
const server = https.createServer(options, app); // Creamos el servidor HTTPS con los certificados

const WSSPORT = 9091;  // Puerto para WebSocket

// Iniciar el servidor HTTPS y WebSocket
server.listen(WSSPORT, () => {
    log.debug(`HTTPS WebSocket Server running on wss://localhost:${WSSPORT}`);
    wss.init(server);
});
