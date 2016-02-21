
require('dotenv').config();
var express = require("express");
var app = express();


//add static location
app.use('/public', express.static(process.env.PUBLIC_DIR_PATH));

//index route
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname+'/../app'});
});


//listen for http
app.listen(process.env.PORT, process.env.IP, function() {
    console.log('server listening on port '+ process.env.PORT);
});