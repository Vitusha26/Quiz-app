import React from 'react'
import useSound from 'use-sound';
import Victory from '../Audio/victory.mp3';

export default function ThirdQuestion(props) {
  const [playVictory] = useSound(Victory);

  function changeThirdQuestion(){
    props.setActive('YouWin')
    props.changeScore()
    playVictory()
  }
  return (
    <div>
      <h2 className='question'>What  a capital of Ukraine?</h2>
      <div>
      <button className='btn6' onClick={props.wrong}>London</button>
        <button className='btn6' onClick={props.wrong}>Lviv</button>
        <button className='btn5' onClick={changeThirdQuestion}>Kyiv</button>
        <button className='btn6' onClick={props.wrong}>Sofia</button>
      </div>
    </div>
  )
}
