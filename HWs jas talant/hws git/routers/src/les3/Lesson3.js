import React, { useState } from 'react';
import CheckNumber from './checkNumber';
import { fibonacci, factorialNum } from './functions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


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
      if(x<0){
        clearInterval(interval);
      }
    }, 1000);
  }
  
  return (
      <div>
        <div>
          <TextField onChange={handleChange} id="outlined-basic" label="Enter number" variant="outlined" />
          <Button onClick={startcountDown} variant="contained">start countdown</Button>
        </div>
        <div>{countDown}</div>
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
