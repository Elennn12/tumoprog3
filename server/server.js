var express = require("express");

var app = express();

app.use(express.static("../client"));

app.get("/", function(req, res){

res.redirect("index.html");

});
var server = require('http').createServer(app);

var io = require('socket.io')(server);
server.listen(3000, function(){

console.log("Game is running on port 3000");

});

var GrassEater= require("./grassEater")
var Gishatich = require("./gishatich")
var Grass = require("./grass")
var Terrorist = require("./terrorist")
var Hunter = require("./hunter")

 grassArr = []
 grassEaterArr = []
 GishatichArr = []
 hunterArr = []
 terroristArr =[]

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


function createobject(){
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y, 1)
                grassArr.push(grass)
            }
            else if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y, 2)
                grassEaterArr.push(grassEater)
            }
            else if (matrix[y][x] == 3) {
                let gishatich = new Gishatich(x, y, 3)
                GishatichArr.push(gishatich)
            }
            else if (matrix[y][x] == 4) {
                let hunter = new Hunter (x, y, 4)
                hunterArr.push(hunter)
            }
            else if (matrix[y][x] == 5) {
                let terrorist = new Terrorist (x, y, 5)
                terroristArr.push(terrorist)
            }

        }

    }
}
function game(){
    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in GishatichArr) {
        GishatichArr[i].eat();
    }
    for (var i in hunterArr) {
        hunterArr[i].eat();
    }
    for (var i in terroristArr) {
        terroristArr[i].eat();
    }

  io.sockets.emit("my_matrix", matrix);
}


generateMatrix()
createobject()
setInterval(game, 1000)

io.on('connection', function (socket) { 
    socket.emit("my_matrix", matrix);

})


