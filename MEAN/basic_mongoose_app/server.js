var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require('path');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


mongoose.connect('mongodb://localhost/basic_mongoose');

//THIS IS CREATING A NEW SCHEME WITH COLLECTIONS
var UserSchema = new mongoose.Schema({
 name: String,
 age: Number
})

//THIS IS CREATING A NEW COLLECTION
mongoose.model('User', UserSchema);
var User = mongoose.model('User')

app.set("views", path.join(__dirname,'./views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'./static')))

app.get('/', function(req, res){
    User.find({name: "Arif"}, function(err, users){
        console.log(users)
    })
    res.render('index');
    })


app.post('/users', function(req, res){
    console.log("Post Data from Form", req.body);

    var user = new User({name: req.body.name, age: req.body.age});

    user.save(function(err) {
    if(err) {
    console.log('something went wrong');
  } else {
          console.log('successfully added a user!');
              res.redirect('/');
          }
      })

  })

app.listen(8000, function(){
    console.log("port 8000, BOYEE")
})
