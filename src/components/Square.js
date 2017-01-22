import React from 'react'
import './Square.css'

export default (props) => (
  <div className='square' onClick={() => props.onClick()}>
    {props.value}
  </div>
)
