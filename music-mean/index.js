'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.connect('mongodb://localhost:27017/music_db', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("CONEXION DB ESTA CORRECTA!!!");
        app.listen(port, function () {
            console.log("Servidor del API REST esta escuchando en http:localhost:" + port);
        });
    }
});
