console.log("Webpack is working!")
const Game = require("./game");
const GameView = require("./game_view");
const Tower = require("./tower")
const Enemy = require("./enemy")

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas")
    const context = canvas.getContext("2d")
    const game = new Game(context);
    const getMousePos = (canvas, event) => {
        let rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        }
    }
    const handleClick = (event) => {    
        let pos = getMousePos(canvas, event)
        let y = Number.parseInt(pos.x/20)
        let x = Number.parseInt(pos.y/20)
        if (grid[x][y] === "o"){ 
            let tower = new Tower(y, x, canvas)
            grid[x][y] = tower
            game.add(tower)
        }
    }
     setInterval(() => {
            let enemy = new Enemy(4, 50, 1, 1, 8, "black", game)
            if (game.enemies.length < 10){
                game.add(enemy)
                // console.log(enemy)
            }
        }, 3000);
    canvas.addEventListener('click', handleClick)
    new GameView(game, context).start();
    
})
