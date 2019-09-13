const MovingObject =  require("./moving_object")

class Projectile extends MovingObject {
    constructor(x, y, dx, dy, radius, color, game) {
        super(x, y, dx, dy, radius, color, game)
        this.radius = 2;
        this.speed = 15
        this.damage = 10
    }
    
}
module.exports = Projectile