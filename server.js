
var express = require("express");

var app = express();

app.use(express.static('./src'));  
app.use('/bower_components', express.static('./bower_components'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());

var query = [];

app.get("/contacts", function(request, response){
    response.send(query);
});

app.post("/add", function(request, response){
    query.push(request.body.name);
    response.send(query);
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});