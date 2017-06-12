var express = require('express');
var path = require('path');
var app = express();


app.set('views', path.join(__dirname,'./views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index')
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000, BOYEE_epicbutton");
});

var io = require('socket.io').listen(server)

io.sockets.on('connection', function(socket){
    var counter = 0;
    socket.on('posting_push_count', function (data){
        counter +=1;
        console.log(data.whatisthis)
        socket.emit('send_counter', {response : counter});
        console.log(counter)
    })
    
    socket.on('reset', function (data){
        counter = 0;
        console.log(data.reset)
        socket.emit('reset_now', {response : counter});
        console.log(counter)
    })
})
