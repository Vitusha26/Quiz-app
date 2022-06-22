import React from 'react'

export default function Score(props) {
  return (
    <div className='score'>
      <h3 className='scoreText'>Your score</h3>
      <p className='number'>{props.score}</p>
    </div>
  )
}
