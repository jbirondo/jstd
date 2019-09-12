const MovingObject = require("./moving_object");

class Projectile extends MovingObject {
    constructor() {
        this.radius = 2;
        this.speed = 15
        this.damage = 10
    }
    
}
module.exports = Projectile;