const  MovingObject = require("./moving_object")
const Tower = require("./tower")

class Enemy extends MovingObject {
    constructor(x, y, dx, dy, radius, color, game) {
        super(x, y, dx, dy, radius, color, game)
        this.x = 4;
        this.y = 50;
        this.dx = 1;
        this.dy = 1;
        this.radius = 8;
        this.color = "black"
        this.speed = 1;
        this.hp = 10
    }

    // collideWith(projectile) {
    //     this.hp -= projectile.damage
    //     if (this.hp <= 0) {
    //         this.remove()
    //     }
    // }

    update(context) {
        if (this.x + this.radius < 498 && this.y === 50) {
            this.x += this.dx;
        }
        // right
        if (this.x === 490 && this.y + this.radius < 318) {
            this.y += this.dy
        }
        // // down
        if (this.x + this.radius > 378 && this.y === 310) {
            this.x -= this.dx
        }
        // // left
        if (this.x === 370 && this.y + this.radius > 138 && this.y < 330) {
            this.y -= this.dy
        }
        // // up
        if (this.x + this.radius > 278 && this.x + this.radius < 379 && this.y === 130) {
            this.x -= this.dx
        }
        // // left
        if (this.x === 270 && this.y + this.radius < 318 && this.y > 100 ) {
            this.y += this.dy
        }
        // // down
        if (this.x + this.radius > 178 && this.x < 317 && this.y === 310) {
            this.x -= this.dx
        }
        // // left
        if (this.x === 170 && this.y + this.radius > 138 && this.y < 338 ) {
            this.y -= this.dy
        }
        // // up
        if (this.x + this.radius > 78 && this.x + this.radius < 250 && this.y === 130) {
            this.x -= this.dx
        }
        // left
        if (this.x === 70 && this.y + this.radius < 378 && this.y > 100 ) {
            this.y += this.dy
        }
        // down
        if (this.x + this.radius < 578 && this.y < 371 && this.y > 369) {
            this.x += this.dx;
        }
        // right
        this.draw(context)



        if (this.x === 570 && this.y === 370) {
            lives--
            this.remove()
        }
    }


}
module.exports = Enemy