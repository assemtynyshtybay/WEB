import React from 'react';
function CheckNumber({number}) {
  function isEven(num){
    if (num%2 === 0) return true;
    return false;
  }
  return(
    <>
    <div>
      { isEven(number)?'Even':'Odd'}
    </div>
    </>
  );
}

export default CheckNumber;