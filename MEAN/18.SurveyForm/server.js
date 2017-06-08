// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));

// // setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view


app.get('/', function(req, res) {
    console.log("it made it here_index")
 res.render("index");
})

app.post('/results', function(req, res) {
    console.log(req.body)
 // Then redirect to the root route
 res.render('results', {survey: req.body}); // THE {} IS PASSING IN THE OBJECT TO BE CALLED IN THE RESULTS PAGE, USING THE TEMPLATING LANGUAGE
})


// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000, BOYEE_survey");
});
