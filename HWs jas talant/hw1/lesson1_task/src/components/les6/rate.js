import React from 'react';
import { IconStar } from '@aws-amplify/ui-react';

function Rate({params=5}) {
  return(
    <div className="star-rating">
      {[...Array(parseInt(+params/2))].map((index) => {        
        return (         
          <IconStar key={index} color="white" width="10px" heigth="5px" />        
        );
      })}
    </div>
  )
}
export default Rate;