import  MovingObject from "./moving_object";

class Enemy extends MovingObject {
    constructor() {
        this.radius = 15;
        this.speed = 4;
        this.hp = 10
    }

    collideWith(projectile) {
        this.hp -= projectile.damage
        if (this.hp <= 0) {
            this.remove()
        }
    }

}
module.exports = Enemy;