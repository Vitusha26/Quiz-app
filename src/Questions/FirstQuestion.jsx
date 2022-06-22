import React from 'react'

export default function FirstQuestion(props) {
  function changeFirstQuestion(){
    props.setActive('secondQuestion')
    props.changeScore()
  }
  return (
    <div>
    <h2 className='question'>Which color is green?</h2>
      <div>
      <button className='btn1' onClick={changeFirstQuestion}></button>
        <button className='btn2' onClick={props.wrong}></button>
        <button className='btn3' onClick={props.wrong}></button>
        <button className='btn4' onClick={props.wrong}></button>
      </div>
      </div>
  )
}
