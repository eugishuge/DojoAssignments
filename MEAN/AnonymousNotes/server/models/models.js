var mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    content: String,

})
var Note = mongoose.model('Note', NoteSchema)
