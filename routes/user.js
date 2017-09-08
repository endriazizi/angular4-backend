'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();

api.get('/test-user-contoller', UserController.test);

module.exports = api;

