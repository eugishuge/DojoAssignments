var mongoose = require('mongoose');

var BattleSchema = new mongoose.Schema({
    user: String,
    score: Number,
    avatar: String

})
var Battle = mongoose.model('Battle', BattleSchema)
