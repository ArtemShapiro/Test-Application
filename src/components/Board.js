import React from 'react'
import Square from './Square'
import NewGame from './NewGame'
import GameInfo from './GameInfo'
import Game from '../containers/Game'
import {cloneDeep} from 'lodash'
import './Board.css'

let GameContainer = new Game()

const Row = ({children}) =>
  <div className='board-row row'>
    {children}
  </div>

export default class extends React.Component {
  constructor () {
    super()
    this.state = {
      squares: Array(5).fill(null).map(_ => Array(5).fill(null)),
      xIsNext: true,
      winner: null
    }
  }

  handleClick (rowIndex, colIndex) {
    if (this.state.winner) {
      this.setNewGame()
      return
    }

    const squares = cloneDeep(this.state.squares)
    if (squares[rowIndex][colIndex]) {
      return
    }
    let result
    let turn = this.state.xIsNext ? 'X' : 'O'

    squares[rowIndex][colIndex] = turn
    if (turn === 'X') {
      result = GameContainer.xPlayerMove(rowIndex, colIndex)
    } else {
      result = GameContainer.oPlayerMove(rowIndex, colIndex)
    }

    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
      winner: result
    })
  }

  setNewGame () {
    GameContainer.newGame()
    this.setState({
      squares: Array(5).fill(null).map(_ => Array(5).fill(null)),
      xIsNext: true,
      winner: null
    })
  }

  render () {
    const data = this.state.squares.map((row, rowIndex) => row.map((column, colIndex) =>
      <Square key={colIndex} value={column} onClick={() => this.handleClick(rowIndex, colIndex)} />))

    return (
      <div className='clearfix'>
        <div className='component'>
          <GameInfo winner={this.state.winner} xIsNext={this.state.xIsNext} statistic={GameContainer.toStatistic()} />
        </div>

        <div className='game-container component col-sm-12'>
          <div>
            {data.map((value, index) =>
              <Row key={index}>{value}</Row>
            )}
          </div>
        </div>

        <div className='col-md-2 col-md-offset-5 component'>
          <NewGame onClick={this.setNewGame.bind(this)} />
        </div>
      </div>
    )
  }
}
