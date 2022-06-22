import React from 'react'

export default function ThirdQuestion(props) {
  function changeThirdQuestion(){
    props.setActive('YouWin')
    props.changeScore()
  }
  return (
    <div>
      <h2 className='question'>What  a capital of Ukraine?</h2>
      <div>
      <button className='btn5' onClick={props.wrong}>London</button>
        <button className='btn5' onClick={props.wrong}>Lviv</button>
        <button className='btn5' onClick={changeThirdQuestion}>Kyiv</button>
        <button className='btn5' onClick={props.wrong}>Sofia</button>
      </div>
    </div>
  )
}
