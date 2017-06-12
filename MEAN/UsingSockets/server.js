// require express and path
var express = require("express");
var path = require("path");
// create the express app
var app = express();
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
 res.render("index");
})
// tell the express app to listen on port 8000
var server = app.listen(8000, function() {
 console.log("listening on port 8000, BOYEE_usingsockets");
})

var io = require('socket.io').listen(server);

// Whenever a connection event happens (the connection event is built in) run the following code
socket.on("button_clicked", function (data){
   // console.log('Someone clicked a button!  Reason: ' + data.reason);
   socket.emit('server_response', {response: "sockets are the best!"});
})
  //all the socket code goes in here!
