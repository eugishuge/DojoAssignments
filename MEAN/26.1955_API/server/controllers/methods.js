var mongoose = require('mongoose');
var Person = mongoose.model("Person")

module.exports = {

index: function(req, res){
    Person.find({}, function(err, data){
        if(err){console.log(err)}
        res.json(data)
        })
    },

create: function(req, res){
    var people = new Person({name: req.params.name});
    people.save(function(err, newUser){
        if (err){res.json(err)}
        else{
            res.json(newUser);
            }
        })
    },
remove: function(req, res){
    Person.remove({name: req.params.name}, function(err, result){
        if (err){console.log("Could Not Delete")}
        else{
        Person.find({}, function(err, data){
            if (err){console.log(err)}
            else{
                res.json(data)
                }
            })
        }
    })
},
show: function(req, res){
    Person.find({name: req.params.name}, function(err, result){
        if(err){console.log(err)}
        else{
            res.json(result[0])
            }
        })
    }
}
