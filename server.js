var express = require("express")
var mysql = require("mysql")
var bodyParser = require("body-parser")
var path = require("path")
var PORT = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var htmlRoutes = require('./app/routing/htmlRoutes')
var apiRoutes = require("./app/routing/apiRoutes")
app.use("/",htmlRoutes)
app.use("/", apiRoutes)

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
})
