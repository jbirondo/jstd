import Util from ("./util")

class MovingObject {
    constructor(pos, vel, radius, color, game) {
        this.pos = pos;
        this.vel = vel;
        this.radius = radius;
        this.color = color;
        this.game = game;
        this.NORMAL_FRAME_TIME_DELTA = 1000 / 60
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(
            this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
        );
        ctx.fill();
    }

    iscollideWith(otherObject) {
        const centerDist = Util.dist(this.pos, otherObject.pos);
        return centerDist < (this.radius + otherObject.radius);
    }

    move(timeDelta) {
        const velocityScale = timeDelta / this.NORMAL_FRAME_TIME_DELTA,
            offsetX = this.vel[0] * velocityScale,
            offsetY = this.vel[1] * velocityScale;

        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
    };

    remove() {
        this.game.remove(this);
    };

}

module.exports = MovingObject