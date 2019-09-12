console.log("Webpack is working!")
const MovingObject = require("./moving_object.js")
import "./board"
window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", () => {
    // const canvas = document.getElementById("")
    // const context = canvas.getContext("2d")
    // const draw = (x, y) => {
    //     context.fillStyle = "black";
    //     if (grid[y][x] == 'o') {
    //         let tile = new Tile(y, x, context);
    //         return tile
    //     } else if (grid[y][x] == 'x'){
    //         context.fillStyle = "tan";
    //     } else {
    //         context.fillStyle = "red"
    //     }
    //     context.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
    //     context.strokeRect(x * tileSize, y * tileSize, tileSize, tileSize);
    // }
    // const drawAll = () => {

    //     for (var x = 0; x < gridWidth; x++) {
    //         for (var y = 0; y < gridHeight; y++) {
    //             draw(x, y);
    //         }
    //     }
    // }

    // const getMousePos = (canvas, event) => {
    //     let rect = canvas.getBoundingClientRect();
    //     return {
    //         x: event.clientX - rect.left,
    //         y: event.clientY - rect.top
    //     }
    // }
    // const handleClick = (event) => {
    //     let pos = getMousePos(canvas, event)
    //     let y = Number.parseInt(pos.x/20)
    //     let x = Number.parseInt(pos.y/20)
    //     console.log(board[x][y])
    // }
    // canvas.addEventListener('click', handleClick)
})
