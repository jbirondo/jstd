import Tile from "./tile.js"
import Road from "./road.js"

let grid;
grid = [
["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o",],
["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o",],
["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o",],
["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
["o", "o", "o", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
["o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
["o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
["o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
["o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
["o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
["o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
["o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
["o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o", "x", "o", "o", "o", "o", "o",],
["o", "o", "o", "x", "o", "o", "o", "o", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "x", "x", "x", "x", "x", "x", "x", "o", "o", "o", "o", "o",],
["o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o",],
["o", "o", "o", "x", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "x", "x",],
["o", "o", "o", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x",],
["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "x", "x", "x",],
["o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o", "o",]
]

class Board {
    constructor(gridWidth, gridHeight) {
        this.grid = [];
        this.gridWidth = gridWidth;
        this.gridHeight = gridHeight;
        this.generateBoard()
    }

    generateBoard() {
        const board = document.getElementById("board")
        for (let i = 0; i < this.gridHeight; i++) {
            this.grid.push([]);
            const rowDiv = document.createElement("div")
            rowDiv.className = "row-div";
            for (let j = 0; j < this.gridWidth; j++) {
                let tile;
                const colCanvas = document.createElement("canvas")
                colCanvas.setAttribute("style", `height: ${tileSize}; width: ${tileSize}`)
                if (grid[i][j] === "o") {
                    // debugger
                    tile = new Tile( i, j, colCanvas);
                } else if (grid[i][j] === "x") {
                    tile = new Road(i, j, colCanvas)
                }
                this.grid[i].push(tile);
                rowDiv.append(colCanvas)
            }
            board.append(rowDiv)
        }
        return board
    }

    onBoard(pos) {
        return (
            pos[0] >= 0 && pos[0] < this.gridSize &&
            pos[1] >= 0 && pos[1] < this.gridSize
        );
    }
}
document.addEventListener("DOMContentLoaded", () => {
    board = new Board(gridWidth, gridHeight)
    console.log(board)
})