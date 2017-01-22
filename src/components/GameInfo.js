import React from 'react'
import './GameInfo.css'

export default (props) => {
  let status = 'Next player: X'

  if (props.winner === 'X' || props.winner === 'O') {
    status = 'Winner: ' + props.winner
  } else if (props.winner === 'Draw') {
    status = props.winner
  } else {
    status = 'Next player: ' + (props.xIsNext ? 'X' : 'O')
  }
  return (
    <div className='clearfix'>
      <div className='status'>
        {status}
      </div>

      <div className='statistic col-sm-4 col-sm-offset-4'>
        <div className='col-sm-4'><p>Player (X)</p> {props.statistic.xWins}</div>
        <div className='col-sm-4'><p>Draws</p> {props.statistic.draws}</div>
        <div className='col-sm-4'><p>Player (O)</p> {props.statistic.oWins}</div>
      </div>
    </div>
  )
}
