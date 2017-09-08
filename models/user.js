'use strict'

var mongoose = require('moongoose');
var Schema = moongose.Schema;

//Users Collections
var UserSchema = Schema({
    name : String,
    surname : String,
    email : String,
    password : String,
    role : String,
});
//A model for User-> obeject, a collection of objects
module.exports = mongoose.model('User',  UserSchema);