import React, { useState } from 'react';
import { fibonacci, factorialNum } from './functions';

function Lesson3() {
  let interval;
  const [number, setNumber] = useState(null)
  const [countDown,setCountdown] = useState(0)
  function handleChange(e) {
    setNumber(+e.target.value);
  }
  function isEven(num){
    if (num%2 === 0) return true;
    return false;
  }
  function startcountDown() {
    let x=number;
    clearInterval(interval)
    interval = setInterval(() => {
      setCountdown(x)
      x-=1
      if(x<0){
        clearInterval(interval);
      }
    }, 1000);
  }
  
  return (
      <div>
        <div>
          <input onChange={handleChange} type="number"></input>
          <button onClick={startcountDown} >start countdown</button>
        </div>
        <div>{countDown}</div>
        <div>
          { isEven(number)?'Even':'Odd'}
        </div>
        <div>
          { fibonacci(number)}
        </div>
        <div>
          { factorialNum(number)}
        </div>
      </div>
  )
}
export default Lesson3;
