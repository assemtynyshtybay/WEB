export function fibonacci(num){
  const arr = []
  if(!num || num<1){
    return('Num must be higher than 0!')
  }
  let prevNumber=0;
  let currentNumber=1;
  for(let i = 1; i <= num; i++){
    const nextNumber=prevNumber+currentNumber;
    prevNumber = currentNumber;
    arr.push(currentNumber);
    currentNumber=nextNumber;
  }
  return arr.join(' ');
}
export function factorialNum(num){
  if (!num || num<0) return 'must be since 0'
  
  if (num===0) return 1

  return factorialNum(num-1)*num
}