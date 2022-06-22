import React from 'react'

export default function SecondQuestion(props) {
  function changeSecondQuestion(){
    props.setActive('thirdQuestion')
    props.changeScore()
  }
  return (
    <div>
      <h2 className='question'>Which is the longest river in the world?</h2>
      <div>
      <button className='btn6' onClick={props.wrong}>Nile</button>
        <button className='btn5' onClick={changeSecondQuestion}>Amazon</button>
        <button className='btn6' onClick={props.wrong}>Yangtze</button>
        <button className='btn6'onClick={props.wrong}>Mississippi</button>
      </div>
    </div>
  )
}
