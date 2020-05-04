//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request= require("request");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

const port = 3000;

app.get("/", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var result = weight/(height*height);
  res.send("Your BMI is "+ result);

});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
