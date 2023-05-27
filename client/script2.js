var socket = io()
socket.on("my_matrix", my_draw)
function setup() {
    frameRate(30);
    createCanvas(1000,1200);
    background('#acacac');
} //client

function my_draw(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill(29, 105, 13);
            }
            else if (matrix[y][x] == 0) {
                fill(115, 67, 3);
            }
            else if (matrix[y][x] == 2) {
                fill(120, 18, 23);
            }
            else if (matrix[y][x] == 3) {
                fill(250, 163, 12);
            }
            else if (matrix[y][x] == 4) {
                fill(13, 61, 94);
            }
            else if (matrix[y][x] == 5) {
                fill(148, 12, 114);
            }

            rect(x * 10, y * 10, 10, 10);

            //textSize (30)
            //fill("blue")
            //text(x + " " + y, x * side + side / 2, y * side + side / 2)

        }
    }

}
