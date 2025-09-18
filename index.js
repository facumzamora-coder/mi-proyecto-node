const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Mi app de Node.js está corriendo en Render 🚀");
});

// Render define el puerto en process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Servidor escuchando en puerto ' + PORT);
});