var express = require("express");

var app = express();

app.use(express.static("../client"));

app.get("/", function(req, res){

res.redirect("index.html");

});

app.listen(3000, function(){

console.log("Game is running on port 3000");

});

var GrassEater= require("./grassEater")
var Gishatich = require("./gishatich")
var Grass = require("./grass")
var Terrorist = require("./terrorist")
var Hunter = require("./hunter")

matrix = []
function getRandInt(min,max){
    var z = Math.floor(Math.random()*(max-min+1))+ min;
    return z;
}
function generateMatrix(){
for (let i = 0; i<100; i++){
    matrix[i] = [];
    for (let b =0; b<120; b++){
        matrix [i][b] = getRandInt(0,5)
    }
}
}
generateMatrix()
console.log(matrix)