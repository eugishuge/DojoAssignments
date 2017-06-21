var mongoose = require('mongoose');
var Battle = mongoose.model("Battle")
var battle = require('../controllers/controller.js')

module.exports = function(app){

    app.get('/battle', function(req, res){
        console.log("i can start showing")
        battle.show_all(req, res)
    })
    //DISPLAY FORM FOR MAKING A NEW ANIMAL (INDEX)
    app.get('/battle/new', function(req, res){
        res.render('new')
    })
    //ACTION ATTRIBUTE FOR CREATING NEW ANIMAL (INDEX)
    app.post('/battle', function(req, res){
        console.log("hit routes in battle")
        battle.add_new(req, res)
        });

    // //DISPLAYS INFORMATION ABOUT SPECIFIC ANIMAL
    // app.get('/notes/:id', function(req, res){
    //     res.render('animal_info')
    // })
    //
    // //DISPLAYS FORM TO MAKE EDITS TO ANIMAL
    // app.get('/notes/edit/:id', function(req, res){
    //     notes.show(req, res)
    // })
    //
    // //ACTION ATTRIBUTE FOR MAKING ANIMAL EDITS
    // app.post('/notes/:id', function(req, res){
    //     notes.edit(req,res)
    // })
    //
    // //ACTION ATTRIBUTE FOR DELETING AN ANIMAL FROM DB
    // app.post('/notes/:id', function(req, res){
    //     notes.delete(req, res)
    // })
}
