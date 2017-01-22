import React from 'react'
import './GameInfo.css'

export default class extends React.Component {
  render () {
    let status = 'Next player: X'

    if (this.props.winner === 'X' || this.props.winner === 'O') {
      status = 'Winner: ' + this.props.winner
    } else if (this.props.winner === 'Draw') {
      status = this.props.winner
    } else {
      status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O')
    }

    return (
      <div className='clearfix'>
        <div className='status'>
          {status}
        </div>

        <div className='statistic col-sm-4 col-sm-offset-4'>
          <div className='col-sm-4'><p>Player (X)</p> {this.props.statistic.xWins}</div>
          <div className='col-sm-4'><p>Draws </p> {this.props.statistic.draws}</div>
          <div className='col-sm-4'><p>Player (O) </p> {this.props.statistic.oWins}</div>
        </div>
      </div>
    )
  }
}
