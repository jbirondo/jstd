const Util = require("./util")

class MovingObject {
    constructor(x, y, dx, dy, radius, color, game) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
        this.game = game;
        this.NORMAL_FRAME_TIME_DELTA = 1000 / 60
    }

    draw(context){
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(
            this.x, this.y, this.radius, 0, 2 * Math.PI, true
        );
        context.fill();

    }

    iscollideWith(otherObject) {
        const centerDist = Util.dist([this.x, this.y], [otherObject.x, otherObject.y]);
        return centerDist < (this.radius + otherObject.radius);
    }

    // move(timeDelta) {
    //     const velocityScale = timeDelta / this.NORMAL_FRAME_TIME_DELTA,
    //         offsetX = this.dx * velocityScale,
    //         offsetY = this.dy * velocityScale;

    //     this.x += offsetX; 
    //     this.y += offsetY;
    // };

    remove() {
        this.game.remove(this);
    };

}

module.exports = MovingObject