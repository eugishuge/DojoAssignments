var mongoose = require('mongoose');
var Note = mongoose.model("Note")
var notes = require('../controllers/notes.js')

module.exports = function(app){

    app.get('/notes', function(req, res){
        notes.show_all(req, res)
    })
    //DISPLAY FORM FOR MAKING A NEW ANIMAL (INDEX)
    app.get('/notes/new', function(req, res){
        res.render('new')
    })
    //ACTION ATTRIBUTE FOR CREATING NEW ANIMAL (INDEX)
    app.post('/notes', function(req, res){
        console.log("hit routes")
        notes.add_new(req, res)
        });

    //DISPLAYS INFORMATION ABOUT SPECIFIC ANIMAL
    app.get('/notes/:id', function(req, res){
        res.render('animal_info')
    })

    //DISPLAYS FORM TO MAKE EDITS TO ANIMAL
    app.get('/notes/edit/:id', function(req, res){
        notes.show(req, res)
    })

    //ACTION ATTRIBUTE FOR MAKING ANIMAL EDITS
    app.post('/notes/:id', function(req, res){
        notes.edit(req,res)
    })

    //ACTION ATTRIBUTE FOR DELETING AN ANIMAL FROM DB
    app.post('/notes/:id', function(req, res){
        notes.delete(req, res)
    })
}
