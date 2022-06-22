import React, { useState } from 'react'
import FirstQuestion from './Questions/FirstQuestion'
import SecondQuestion from './Questions/SecondQuestion'
import ThirdQuestion from './Questions/ThirdQuestion'
import Score from './Score'
import YouWin from './YouWin'

export default function QuestionAnswer() {
  const [score,setScore] = useState(0)
  const [active,setActive] = useState('firstQuestion')

  function changeScore(){
    setScore(score + 1)
  }

  function wrong(){
    alert("You wrong")
  }

  
  return (
    <div className='questionAnswer'>
      <Score score={score}/>
      {active === 'firstQuestion' && <FirstQuestion changeScore={changeScore} wrong={wrong} setActive={setActive}/>}
      {active === 'secondQuestion' && <SecondQuestion changeScore={changeScore} wrong={wrong} setActive={setActive}/>}
      {active === 'thirdQuestion' && <ThirdQuestion changeScore={changeScore} wrong={wrong} setActive={setActive}/>}
      {active === 'YouWin' && <YouWin/>}
    </div>
  )
}
