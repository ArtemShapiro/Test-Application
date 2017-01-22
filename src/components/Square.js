import React from 'react'
import './Square.css'

export default (props) => (
  <div className='square' onClick={() => props.onClick()}
    style={{color: (props.value === 'X') ? 'red' : 'blue'}}>
    {props.value}
  </div>
)
