var mongoose = require('mongoose');
var _animal = mongoose.model("Animal")

module.exports = {

show_all: function(req, res){
    _animal.find({}, function(err, new_animal){
        console.log(new_animal)
        if(err){
            console.log("no animals found")
        }
        else{
            res.render('index', {animals: new_animal})}
    })
},
add_new: function(req, res){
    _animal.create(req.body, function(err){
        if (err){console.log("Error Adding New")}
        res.render('new')
    })
},
show_info: function(req, res){
    _animal.find({_id: req.params.id}, function(err, update){
        if(err){console.log('error finding ID')}
            res.render('edit')
    })
},
make_edits: function(req, res){
    _animal.update({_id: req.params.id}, req.body, function(err, result){
        if (err){console.log('error updating')}
        else{
            console.log(req.params.id)
            res.redirect('/')
            }
    })
},
delete: function(req, res){
    _animal.remove({_id: req.params.id}, function(err, remove){
        if(err){console.log("Cannot Delete")}
        res.redirect('/')
        });
    }
};
