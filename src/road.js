// import Tile from "./tile"
export default class Road{
    constructor(x, y, canvas){
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d")
        this.fillColor();
    }
    fillColor() {
        // debugger
        this.context.fillStyle = "tan"
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

}
