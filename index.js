const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Ruta principal para la página de inicio
app.get('/', (req, res) => {
  res.send('Bienvenido a la página de descargas de libros!');
});

// Servidor escuchando en el puerto definido
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});