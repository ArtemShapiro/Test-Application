import React from 'react'
import './Square.css'

export default (props) => (
  <button className='square' onClick={() => props.onClick()}>
    {props.value}
  </button>
)
