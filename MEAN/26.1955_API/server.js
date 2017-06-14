var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var path = require('path');

app.set("views", path.join(__dirname,'./client'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'./static')))
app.use(bodyParser.json());

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function(){
    console.log("Port 8000_19fittyfih")
})
