import Game from "./Game.js"
import GameView from "./GameView.js"

let game = new Game()
let gameView = new GameView()

let tiles = document.querySelectorAll('.board__tile')

document.querySelector('.restart').addEventListener('click',() => {
    onRestartClick()
})

tiles.forEach((tile) => {
    tile.addEventListener('click',() => {
        onTileClick(tile.dataset.index)
    })
})

function onTileClick(i) {
        // make a move
        game.makeMove(i)

        //update board
        gameView.updateBoard(game)

}

gameView.updateBoard(game)

function onRestartClick() {
    game = new Game()
    gameView.updateBoard(game)
}


// giving the gameView class the game object that we defined above as an argument
// doing this will insure that u can use all of the game properties and methods of Game class in GameView class


