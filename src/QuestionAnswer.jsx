import React, { useState } from 'react'
import FirstQuestion from './Questions/FirstQuestion'
import SecondQuestion from './Questions/SecondQuestion'
import ThirdQuestion from './Questions/ThirdQuestion'
import Score from './Score'
import YouWin from './YouWin'
import useSound from 'use-sound';
import WrongAnswer from './Audio/wrongAnswer.mp3';
import NextQuestion from './Audio/nextQuestion.mp3';


export default function QuestionAnswer() {
  const [score,setScore] = useState(0)
  const [active,setActive] = useState('firstQuestion')
  const [nextQuestion] = useSound(NextQuestion);
  const [wrongPlay] = useSound(WrongAnswer);


  function changeScore(){
    setScore(score + 1)
    nextQuestion()
  }

  function wrong(){
    wrongPlay()
    
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
