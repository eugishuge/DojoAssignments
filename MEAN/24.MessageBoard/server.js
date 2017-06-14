var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require('path');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var port = 8000

//Express Basic set up
app.set("views", path.join(__dirname,'./views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'./static')))
// End Basic Set up

//Connect to db via Mongoose
mongoose.connect('mongodb://localhost/MessageBoard')
mongoose.Promise = global.Promise;
// Create Mongoose Schema
var messageSchema = new Schema({
    name: {type: String, required:true, minlength:4},
    content: {type: String, required:true},
    comments_1: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true});


var commentSchema = new Schema({
    _message: {type: Schema.Types.ObjectId, ref: 'Message'},
    name: {type: String, required:true, minlength:4},
    content: {type: String, required: true}
},  {timestamps: true });

// Register models
var Message = mongoose.model("Message", messageSchema);
var Comment = mongoose.model("Comment", commentSchema);

//ROUTING BEGINS HERE
app.get('/', function(req, res){
    Message.find({})
    .populate('comments_1') //this is an add-on method to Message.find({})
    .exec(function(err, results){
        if(err){console.log(err);}
    console.log(results);
    res.render('index',{messages: results});
    });
});

app.post('/messages', function(req,res){
    Message.create(req.body, function(err, result){
        if(err){console.log(err)}
        res.redirect('/')
    })
})

app.post('/messages/:id/comments', function(req, res){
    // Find Message the comment will belong to
    Message.findOne({_id:req.params.id}, function(err, message){
        // create a comment using data from form
        var comment = new Comment(req.body);
        // set the reference like this...
        comment._message = message._id // the "message"._id is from the parameter we passed in
        // the comment now belongs to the message we found from above, using the ID
        // now, save both to the DB
        comment.save(function(err){
            // push the comment into the comments array of the message we found
            message.comments_1.push(comment); //comment variable we created
            //now, save the updated message
            message.save(function(err){
                if(err){console.log(err)}
                else{
                    res.redirect('/')
                }
            })
        })
    })
})











// Server Port Set-up
app.listen(port, function(){
    console.log("Listenting on Port", port, "BOYEE_messageboard")
})
