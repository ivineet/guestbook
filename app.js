var http = require("http");
var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");

var port = 52274;
var app = express();

app.set("views",path.resolve(__dirname,"views"));
app.set("view engine", "ejs");

app.get("/",function(request, response){
	response.send("Hi");
}
);

http.createServer(app).listen(port, function(){
	console.log("Guestbook app started on port: "+port);
});