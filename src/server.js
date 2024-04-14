const express = require('express');
const app = express();
const mongoose = require('mongoose');  
const bodyParser = require('body-parser');
require('dotenv').config();

const URL_CONNECT = process.env.URL_CONNECT;
const PORT = process.env.PORT || 3000; // Definir el puerto predeterminado

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(URL_CONNECT, { //useNewUrlParser: true, useUnifiedTopology: true 
});
const db = mongoose.connection;

db.on('error', (error) => {
    console.error('Error en la conexión a MongoDB:', error);
});

db.once('open', () => {
    console.log('Conexión exitosa a MongoDB');

    app.use('/api', require('./routes/index.js'));

    app.listen(PORT, () => {
        console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error interno del servidor');
});

module.exports = app;
