var socket = io()
socket.on("my_matrix", my_draw)
socket.on("season_change", updateSeason)
function setup() {
    frameRate(20);
    createCanvas(1200, 1000);
    background('#acacac');
} //client

var season = "spring"

function changeSeason(newSeason) {
    socket.emit("change_season", newSeason)
}

function updateSeason(newSeason) {
    season = newSeason
    redrawCanvas();
}
var springButton = document.getElementById("springButton");
var summerButton = document.getElementById("summerButton");
var autumnButton = document.getElementById("autumnButton");
var winterButton = document.getElementById("winterButton");

springButton.addEventListener("click", function () {
    changeSeason("spring");
});
summerButton.addEventListener("click", function () {
    changeSeason("summer");
});
autumnButton.addEventListener("click", function () {
    changeSeason("autumn");
});
winterButton.addEventListener("click", function () {
    changeSeason("winter");
});

function redrawCanvas() {
    clear();
    background('#acacac');
    socket.emit("my_matrix", matrix); // Request updated matrix from the server
}





function my_draw(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                if (season === "winter") {
                    fill(255, 255, 255)
                }
                else {
                    fill(29, 105, 13); // grass kanach
                }
            }


            else if (matrix[y][x] == 0) {
                fill(115, 67, 3);
            }
            else if (matrix[y][x] == 2) {
                fill(120, 18, 23); // grasseater bordo
            }
            else if (matrix[y][x] == 3) {
                fill(250, 163, 12); // gishatich dexin
            }
            else if (matrix[y][x] == 4) {
                fill(13, 61, 94); //hunter kapuyt
            }
            else if (matrix[y][x] == 5) {
                fill(148, 12, 114); //terrorist manushakaguyn
            }

            rect(x * 10, y * 10, 10, 10);

            //textSize (30)
            //fill("blue")
            //text(x + " " + y, x * side + side / 2, y * side + side / 2)

        }
    }

}
var grassCount = 0;
var grassEaterCount = 0;
var hunterCount = 0;
var gishatichCount=0;
var terroristCount = 0;