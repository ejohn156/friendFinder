var express = require("express")
var mysql = require("mysql")
var bodyParser = require("body-parser")
var path = require("path")
var PORT = process.env.PORT || 8080;
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
})

app.get("/survey", function(req,res){
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
})


app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
})
