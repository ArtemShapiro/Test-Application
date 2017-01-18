import React from 'react'

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

    return <div className='status'>{status}</div>
  }
}
