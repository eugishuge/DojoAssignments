var mongoose = require('mongoose');
var notes = mongoose.model("Note")

module.exports = {

show_all: function(req, res){
    notes.find({}, function(err, new_note){
        console.log(new_note)
        if(err){
            console.log("no notes found")
        }
        else{
            res.json(new_note)}
    })
},
add_new: function(req, res){
    console.log("adding new controller")
    notes.create(req.body, function(err){
        if (err){console.log("Error Adding New")}
        res.redirect('/notes')
    })
},
show: function(req, res){
    notes.find({_id: req.params.id}, function(err, update){
        if(err){console.log('error finding ID')}
            res.json('edit')
    })
},

};
