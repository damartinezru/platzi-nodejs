const express = require('express');

var app = express();

app.use('/', (req, res) => {res.send('Hola')} )

app.listen(3000)
console.log('La aplicacione sta escuchando http://localhost:3000')