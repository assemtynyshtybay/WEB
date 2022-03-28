import React,{ useEffect, useState } from 'react';
import Comments from './Comments';


function CommentsBlock() {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    (fetch('https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/comments.json')
    .then(res => res.json()))
    .then((data) => setComment(data));
  }, []);
  // (fetch('https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/comments.json')
  //   .then(res => res.json()))
  //   .then((data) => setComment(data));
  
  return(
    <div className="App">
      {comment.map((comment, index) =>
            <Comments key={index} comment={comment} />
        )}
    </div>
  )
}

export default CommentsBlock;