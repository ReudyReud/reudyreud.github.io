var express = require("express");
var app = express(); 
app.use(express.static("public"));

app.set("view engine", "ejs"); 

app.get("/", function(req, res){
    res.render("landing"); 
});
app.get("/aboutme", function(req, res){
    res.render("aboutMe"); 
});
app.get("/experiences", function(req, res){
    res.render("experiences"); 
});
app.get("/projects", function(req, res){
    res.render("projects"); 
});
app.get("/hobbies", function(req, res){
    res.render("hobbies"); 
});


app.listen(3000, '127.0.0.1', function(){ //starts server
    console.log("Server has started on port 3000"); 
});