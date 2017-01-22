class PlayerInfo {
  constructor () {
    this.rows = new Array(5).fill(0)
    this.cols = new Array(5).fill(0)
    this.diagonals = new Array(2).fill(0)
  }

  perform (rowIndex, colIndex) {
    const rowResult = this.incrementRow(rowIndex)
    const colResult = this.incrementCol(colIndex)
    let diagonalResult = false

    if (colIndex === rowIndex) {
      diagonalResult = this.incrementDiagonal(0)
    }
    if (rowIndex + colIndex === 4) {
      diagonalResult = this.incrementDiagonal(1)
    }

    return rowResult || colResult || diagonalResult
  }

  incrementRow (index) {
    return ++this.rows[index] === 5
  }

  incrementCol (index) {
    return ++this.cols[index] === 5
  }

  incrementDiagonal (index) {
    return ++this.diagonals[index] === 5
  }
}

export default PlayerInfo
