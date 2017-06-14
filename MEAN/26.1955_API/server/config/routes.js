var mongoose = require('mongoose');
var Person = mongoose.model("Person")
var people = require('../controllers/methods.js')

module.exports = function(app){

    app.get('/', function(req,res){
        people.index(req, res);
    })
    app.get('/new/:name', function(req, res){
        people.create(req, res)
    })
    app.get('/remove/:name', function(req, res){
        people.remove(req, res)
    })
    app.get('/:name', function(req, res){
        people.show(req, res)
    })
}
