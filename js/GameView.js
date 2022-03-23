export default class GameView {

    updateBoard(game) {
           this.updateTurn(game)
            const winCombo = game.findWinCombos()

            for (let i = 0;i < game.board.length;i++) {
                const tile = document.querySelector(`.board__tile[data-index="${i}"]`)
                // tile.textContent = game.board[i]
                tile.classList.remove('tile-winner')

                let tileType = game.board[i] == 'X' ? 'tile-x' : 'tile-o'
                tile.innerHTML = `
                <span class="${tileType}">${game.board[i] ? game.board[i] : ''} </span> `

                if (winCombo && winCombo.includes[i]) {
                    tile.classList.add('tile-winner')
                }

            }  
    }

    updateTurn(game) {
        let playerX = document.querySelector('.player-x')
        let playerO = document.querySelector('.player-o')

        if (game.turn == 'X') {
            playerX.classList.add('active')
            playerO.classList.remove('active')
        } else {
            playerO.classList.add('active')
            playerX.classList.remove('active')
        }

    }
}

