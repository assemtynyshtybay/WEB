import React from 'react';
import './Comments.css';

function Answers({answer}) {
  const date = new Date(answer.created);
  function timeFormat(date){
    return `${date.getHours()}:${date.getMinutes()} ${date.toLocaleDateString()}`;
  }
  return(
    <>
      <div className="comment-block-answer">
        <div className="top">
          <img src={answer.author.avatarUrl} alt="avatar"></img>
          <span className="left-side">{answer.author.name}</span>
          <span className="right-side">{timeFormat(date)}</span>
        </div>
        <p>{answer.text}</p>
      </div>
    </>
  )
}
export default Answers;