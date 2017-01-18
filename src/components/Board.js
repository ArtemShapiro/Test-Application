import React from 'react'
import calculateWinner from '../calculators/calculator'
import Square from './Square'
import GameInfo from './GameInfo'

const Row = ({data, start, end}) =>
  <div className='board-row col-md-4 col-md-offset-4'>
    {data.slice(start, end)}
  </div>

export default class extends React.Component {
  constructor () {
    super()
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      xPlayer: {rows: [], cols: [], diagonals: []},
      oPlayer: {rows: [], cols: [], diagonals: []}
    }
  }

  handleClick (i) {
    const squares = this.state.squares.slice()
    if (calculateWinner(squares)) {
      this.setState({
        squares: Array(9).fill(null),
        xIsNext: this.state.xIsNext
      })
      return
    }
    if (squares[i]) {
      return
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O'
    if (this.state.xIsNext === 'X') {
      const rows = this.state.xPlayer.rows.slice()
      const cols = this.state.xPlayer.cols.slice()
      const diagonals = this.state.xPlayer.diagonals.slice()
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext,
        xPlayer: {}
      })
    } else {
      this.setState({
        squares: squares,
        xIsNext: !this.state.xIsNext
      })
    }
  }

  renderSquare (value, index) {
    return <Square key={index} value={value} onClick={() => this.handleClick(index)} />
  }

  render () {
    const winner = calculateWinner(this.state.squares)
    const data = this.state.squares.map((value, index) => this.renderSquare(value, index))
    return (
      <div>
        <GameInfo winner={winner} xIsNext={this.state.xIsNext} />
        <Row data={data} start={0} end={3} />
        <Row data={data} start={3} end={6} />
        <Row data={data} start={6} end={9} />
      </div>
    )
  }
}
