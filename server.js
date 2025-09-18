'use strict';

const express = require('express');
const helmet = require('helmet');
const fs = require('fs');
const app = express();

// Oculta el encabezado "X-Powered-By: Express"
app.use(helmet.hidePoweredBy());

// Ruta principal
app.get('/', (req, res) => {
  res.send('Mi app de Node.js está corriendo en Render 🚀');
});

// Ruta que devuelve package.json para FreeCodeCamp
app.get('/_api/package.json', (req, res) => {
  fs.readFile(__dirname + '/package.json', 'utf8', (err, data) => {
    if (err) return res.status(500).send(err);
    res.type('json').send(data);
  });
});

// Puerto dinámico de Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor escuchando en puerto ' + PORT);
});

module.exports = app;
