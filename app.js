var http = require("http");
var path = require("path");
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");

var port = 52280;
var app = express();

app.set("views",path.resolve(__dirname,"views"));
app.set("view engine", "ejs");

var entries = [];
app.locals.entries = entries;

app.use(bodyParser.urlencoded({ extended: false }));

//used to log every request
app.use(logger("dev"));

app.get("/",function(request, response){
	response.render("index");
}
);

app.get("/new-entry",function(request, response){
	response.render("new-entry");
}
);

app.get("/new-entry",function(request, response){
	
	if((!request.body.title) || (!request.body.body)){
		response.status(400).send("Entries must have a title and a body.");
		return;
	}
	entries.push({
		title : request.body.title,
		content : request.body.body,
		published : new Date()
	});
	
	response.redirect("/");
}
);

app.use(function(request, response){
	response.status(404).render("404");
	
});


http.createServer(app).listen(port, function(){
	console.log("Guestbook app started on port: "+port);
});