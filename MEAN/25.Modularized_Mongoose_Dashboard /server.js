var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require('path');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'./Animal/dist')))

require('./server/config/mongoose.js');
// These two lines of code replace all of the routes that were previously in the server.js Now found in server/config/routes.js

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.get("*", function(req, res){
    res.sendfile(path.resolve("./dist/index.html"))
})

// var new_animal = mongoose.model("Animal", AnimalSchema)
// //INDEX
// app.get('/', function(req, res){
//     console.log("At Index")
//
//     new_animal.find({}, function(err, new_animal){
//         console.log(new_animal)
//         if(err){
//             console.log("no animals found")
//         }
//         else{
//             res.render('index', {animals: new_animal})}
//     })
// })
// //DISPLAY FORM FOR MAKING A NEW ANIMAL
// app.get('/animal/new', function(req, res){
//     console.log("At New")
//     res.render('new')
// })
// //ACTION ATTRIBUTE FOR CREATING NEW ANIMAL
// app.post('/new_animal', function(req, res){
//     console.log(req.body)
//     new_animal.create(req.body, function(err){
//         if(err){console.log(err)}
//         res.redirect('/')
//         });
//     });
//
// //DISPLAYS INFORMATION ABOUT SPECIFIC ANIMAL
// app.get('/animal/:id', function(req, res){
//     res.render('animal_info')
// })
//
// //DISPLAYS FORM TO MAKE EDITS TO ANIMAL
// app.get('/animal/edit/:id', function(req, res){
//     new_animal.find({_id: req.params.id}, function(err, update){
//         if(err){console.log('error finding ID')}
//         else{
//             res.render('edit', {update})
//         }
//     })
// })
//
// //ACTION ATTRIBUTE FOR MAKING ANIMAL EDITS
// app.post('/submit_edit/:id', function(req, res){
//     new_animal.update({_id: req.params.id}, req.body, function(err, result){
//         if (err){console.log('error updating')}
//         else{
//             console.log(req.params.id) //req.bod.id isnt returning the RABBIT ID
//             res.redirect('/')
//             }
//     })
// })
//
// //ACTION ATTRIBUTE FOR DELETING AN ANIMAL FROM DB
// app.post('/animal/destroy/:id', function(req, res){
//     new_animal.remove({_id: req.params.id}, function(err, remove){
//         if(err){console.log("Cannot Delete")}
//         res.redirect('/')
//     })
// })

app.listen(8000, function(){
    console.log("Port 8000, animals_modular")
})
