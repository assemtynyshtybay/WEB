import React, { useState, useEffect } from 'react';
import CheckNumber from './checkNumber';
import { fibonacci, factorialNum } from './functions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Counter from './counter';

function Lesson3() {
  let interval;
  const [number, setNumber] = useState(null)
  const [countDown,setCountdown] = useState(0)
  function handleChange(e) {
    setNumber(+e.target.value);
  }
  function startcountDown() {
    let x=number;
    
    clearInterval(interval)
    interval = setInterval(() => {
      setCountdown(x)
      x-=1
      console.log(x)  
      if(x<0){
        clearInterval(interval);
      }
    }, 1000);
  }
  useEffect(() => {
    
    return () => {
      clearInterval(interval);
    }
  })
  return (
      <div>
        <div>
          <TextField onChange={handleChange} id="outlined-basic" label="Enter number" variant="outlined" />
          <Button onClick={startcountDown} variant="contained">start countdown func</Button>
        </div>
        <div>{countDown}</div>
        <div><Counter count={number}/></div>
        <CheckNumber number={number}/>
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
