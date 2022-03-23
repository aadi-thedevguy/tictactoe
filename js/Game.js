export default class Game {
    constructor() {

        this.turn = 'X'
        this.board = new Array(9).fill(null)
    }
        nextTurn() {
            if(this.turn === "X") {
                this.turn = "O"
            } else {
                this.turn = "X"
            }

        }

    makeMove(i) {
        // checking if this isn't the end of the game before making a move
        if (this.endOfGame()) return

        if(this.board[i]) return
        this.board[i] = this.turn

        let winCombo = this.findWinCombos()

        // if someone wins stop the game else pick next turn
        if (!winCombo) {
            this.nextTurn()
        } 

    }

    findWinCombos() {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
          ]

          for (const combo of winningCombinations) {
              // giving variable to the individual values of a winning combination
              const [a,b,c] = combo
              // checking to see if the position of X/O in the first value of awinning combination matches with the other two values
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                return combo
            } 
            
          } return null
    }

    endOfGame() {
        let winCombo = this.findWinCombos()
        if (winCombo) return true 
        else return false
    }

}