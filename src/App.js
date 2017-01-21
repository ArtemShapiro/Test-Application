import React, { Component } from 'react'
import './App.css'

import Game from './components/Game'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='text-center'>
          <h3>Tic-Tac-Toe</h3>
        </div>

        <Game />
      </div>
    )
  }
}

export default App
