class Tower {
    constructor(x, y, canvas) {
        this.x = x;
        this.y = y;
        this.range = 4 * tileSize
        this.canvas = canvas
        this.context = this.canvas.getContext("2d")
        this.fillColor()
    }

    fillColor() {
        this.context.fillStyle = "red"
        console.log(this.x, this.y)
        this.context.strokeRect(this.x * tileSize, this.y * tileSize, tileSize, tileSize);
        this.context.fillRect(this.x * tileSize, this.y * tileSize, tileSize, tileSize);
    }


}

module.exports = Tower