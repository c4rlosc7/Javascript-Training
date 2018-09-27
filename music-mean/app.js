'use strict'

var express = require('express');

var bodyParser = require('body-parser');

var app = express();

// load  URL
var userRoutes = require('./routes/userRoutes');

// settings body-parser
app.use(bodyParser.urlencoded({ extended: false }));
// convert to Json request Http
app.use(bodyParser.json());

// settings headers http

// loader basic paths
app.use('/api', userRoutes); // middleware

/*app.get('/test', (req, res) =>{
    res.status(200).send({message: 'Bienvendo a music'});
});*/

module.exports = app;
