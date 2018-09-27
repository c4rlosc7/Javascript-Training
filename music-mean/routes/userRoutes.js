'use strict'

var express = require('express');
var api = express.Router();

var UserController = require('../controllers/userCtr');

/**
 * Methods GETs
 */
api.get('/testing-controller', UserController.test);

/**
 * Methods POSTs
 */
api.post('/save-user', UserController.saveUser);
api.post('/login', UserController.loginUser);

module.exports = api;
