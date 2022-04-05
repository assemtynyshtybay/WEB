import React, {useState, useEffect} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function CounterFunc(){
  const [counter, setCounter] = useState(null)
  const [countDown, setCountDown] = useState(null)
  let interval
  function handleChange(e){
    setCounter(+e.target.value);
  }
  function startCountDown(){
    let x = counter;
    clearInterval(interval)
    interval = setInterval(() => {
      setCountDown(x)
      x-=1
      console.log(x)
      if(x<0){
        clearInterval(interval)
      }
    }, 1000);
  }
  useEffect(() => {
    return () => {
      clearInterval(interval)
    }
  }, [])
  return(
    <>
      <TextField onChange={handleChange} />
      <Button onClick={startCountDown}>CountDown</Button>
      <h1>{countDown}</h1>
    </>
  )
}

export default CounterFunc;