//### EXPRESS and BODYPARSER ###

//new javascript functionality EMAC
'use strict' 

//use express module

var express = require('express');

//module bodyParser convert application body to json object
var bodyParser = require('body-parser');

//invoke express function, express framework
var app = express();

//routes

//middlewares bodyParser

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// cors

//routes

module.exports =  app;
