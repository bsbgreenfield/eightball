import React, {useState} from 'react';
import './eightball.css';

function Eightball({answers}) {
  const [ballText, setBallText] = useState("Think of a Question")
  const [ballColor, setBallColor] = useState('black')
  function shakeBall(){
    let newAnswer = answers[Math.floor(Math.random() * answers.length)]
    setBallText(newAnswer.msg)
    setBallColor(newAnswer.color)
  }
  return (
    <div className="eightball" style={{backgroundColor: ballColor}} onClick={shakeBall}>
      <p className='eightball-text'>{ballText}</p>
    </div>
  );
}

export default Eightball;
