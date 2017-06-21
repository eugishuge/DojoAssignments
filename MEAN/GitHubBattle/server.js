var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require('path');

app.use(bodyParser.urlencoded({extended: true})); //
app.use(bodyParser.json()); // this line allows for json to be RECEIVED, front-end --> server
app.use(express.static(path.join(__dirname,'./public/dist')))

require('./server/config/mongoose.js');
// These two lines of code replace all of the routes that were previously in the server.js Now found in server/config/routes.js

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.get("*", function(req, res){
    res.redirect('/')
    // res.sendfile(path.resolve("./dist/index.html"))
})

app.listen(8000, function(){
    console.log("Port 8000, GitHubBattle")
})
