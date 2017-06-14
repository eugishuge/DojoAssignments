var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
    name: String,
    food: String,
    size: String
})
var Animal = mongoose.model('Animal', AnimalSchema)
