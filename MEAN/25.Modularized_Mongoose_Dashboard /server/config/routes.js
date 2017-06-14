var mongoose = require('mongoose');
var _Animal = mongoose.model("Animal")
var animal_ = require('../controllers/methods.js')

module.exports = function(app){

    app.get('/', function(req, res){
        animal_.show_all(req, res)
    })
    //DISPLAY FORM FOR MAKING A NEW ANIMAL (INDEX)
    app.get('/animal/new', function(req, res){
        res.render('new')
    })
    //ACTION ATTRIBUTE FOR CREATING NEW ANIMAL (INDEX)
    app.post('/new_animal', function(req, res){
        animal_.add_new(req, res)
        });

    //DISPLAYS INFORMATION ABOUT SPECIFIC ANIMAL
    app.get('/animal/:id', function(req, res){
        res.render('animal_info')
    })

    //DISPLAYS FORM TO MAKE EDITS TO ANIMAL
    app.get('/animal/edit/:id', function(req, res){
        animal_.show_info(req, res)
    })

    //ACTION ATTRIBUTE FOR MAKING ANIMAL EDITS
    app.post('/submit_edit/:id', function(req, res){
        animal_.make_edits(req,res)
    })

    //ACTION ATTRIBUTE FOR DELETING AN ANIMAL FROM DB
    app.post('/animal/destroy/:id', function(req, res){
        animal_.delete(req, res)
    })
}
