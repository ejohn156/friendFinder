var express = require('express')
var router = express.Router()

var surveyQuestions = require("../data/questions")
var friends = require("../data/friends")
router.get("/api/questions", function(req,res){
    return res.json(surveyQuestions);

});
router.get("/api/friends", function(req,res){
    return res.json(friends);

});

router.post("/api/friends", function(req, res) {
    friends.push(req.body);

  });

module.exports = router