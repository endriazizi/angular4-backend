'use strict'

var mongoose = require('moongoose');
var Schema = moongose.Schema;

//Users Collections
var AnimalSchema = Schema({
    name : String,
    description : String,
    eyearmail : String,
    image : String,
    //related to user
    user : {Type: Schema.ObjectId,ref: 'User'},
});
//A model for Animal-> obeject, a collection of objects
module.exports = mongoose.model('Animal',  UserSchema);