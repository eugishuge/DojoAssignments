// var express = require('express');
// var app = express();
// var bodyParser = require("body-parser");
// var path = require('path');
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/QuotingDojo')
//
// mongoose.Promise = global.Promise;
//
// var quoteSchema = new mongoose.Schema({
//     name: String,
//     quote: String
// })
//
// var quote = mongoose.model("Quotes", quoteSchema) //
//
//
// app.set("views", path.join(__dirname,'./views'));
// app.set('view engine', 'ejs');
//
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname,'./static')))
//
// //APP ROUTES_____________________________
// app.get('/', function(req, res){
//     res.render('index')
// })
//
// app.get('/see_quotes',function(req,res){
//     quote.find({}, function(err, quote){
//         console.log(quote)
//         if(err){
//             console.log("no quotes found")
//         }
//         else{
//             res.render('see_quotes', {quote: quote}) }
//         })
//     })
//
// app.post('/submit_quotes',function(req,res){
//     console.log("Post Data from Form", req.body);
//
// quote.create(req.body, function(err){
//     if(err){console.log(err)}
//     res.redirect('see_quotes')
// });
// });
//
// app.listen(8000, function(){
//     console.log("port 8000, BOYEE_quotes")
// })

// Dependencies
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 3000;

// Create express app
var app = express();

// Use bodyParser to parse form data sent via HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));

// Tell server where views are and what templating engine I'm using
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Create connection to database
var connection = mongoose.connect("mongodb://localhost/dog_db");

// Create dog schema and attach it as a model to our database
var DogSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});

// Mongoose automatically looks for the plural version of your model name, so a Dog model in Mongoose looks for 'dogs' in Mongo.
var Dog = mongoose.model('Dog', DogSchema);

// Routes go here!
app.get('/', function(req, res){
  Dog.find({}, function(err, results){
    if (err) { console.log(err); }
    res.render('index', { dogs: results });
  });
});

// Create
app.post('/', function(req, res){
  // Create a new dog!
  Dog.create(req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/')
  });
});

// New
app.get('/new', function(req, res){
  res.render('new');
});

// Show
app.get('/:id', function(req, res){
  Dog.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('show', { dog: response[0] });
  });
});

app.get('/:id/edit/', function(req, res){
  Dog.find({ _id: req.params.id }, function(err, response) {
    if (err) { console.log(err); }
    res.render('edit', { dog: response[0] });
  })
});

// Update
app.post('/:id', function(req, res){
  Dog.update({ _id: req.params.id }, req.body, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});

// Delete
app.post('/:id/delete', function(req, res){
  Dog.remove({ _id: req.params.id }, function(err, result){
    if (err) { console.log(err); }
    res.redirect('/');
  });
});


app.listen(port, function(){
  console.log("Running on ", port);
})
