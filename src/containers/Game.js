import PlayerInfo from './PlayerInfo'

class Game {
  constructor () {
    this.newGame()
    this.xWins = 0
    this.oWins = 0
    this.draws = 0
  }

  newGame () {
    this.oPlayer = new PlayerInfo()
    this.xPlayer = new PlayerInfo()
    this.turn = 0
  }

  xPlayerMove (rowIndex, colIndex) {
    if (this.xPlayer.perform(rowIndex, colIndex)) {
      ++this.xWins
      return 'X'
    } else if (++this.turn === 25) {
      ++this.draws
      return 'Draw'
    } else {
      return false
    }
  }

  oPlayerMove (rowIndex, colIndex) {
    if (this.oPlayer.perform(rowIndex, colIndex)) {
      ++this.oWins
      return 'O'
    } else if (++this.turn === 25) {
      ++this.draws
      return 'Draw'
    } else {
      return false
    }
  }

  toStatistic () {
    return {draws: this.draws, oWins: this.oWins, xWins: this.xWins}
  }
}

export default Game
