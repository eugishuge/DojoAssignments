var mongoose = require('mongoose');
var battle = mongoose.model("Battle")

module.exports = {

show_all: function(req, res){
    battle.find({}, function(err, battle){
        console.log(battle)
        if(err){
            console.log("no notes found")
        }
        else{
            res.json(battle)}
    })
},
add_new: function(req, res){
    console.log("adding new controller")
    battle.create(req.body, function(err){
        if (err){console.log("Error Adding New")}
        res.redirect('/battle')
    })
},
show: function(req, res){
    battle.find({_id: req.params.id}, function(err, update){
        if(err){console.log('error finding ID')}
            res.json('edit')
    })
},

};
