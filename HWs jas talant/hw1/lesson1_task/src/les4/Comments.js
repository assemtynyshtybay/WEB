import React from 'react';
import './Comments.css';

function formatTwoDigits(number) {
  if (number < 10) {
      return '0' + number
  }
  return number
}
function Comments({comment, depth=0}){
  const date = new Date(comment.created);
  function timeFormat(date){
    return `${formatTwoDigits(date.getHours())}:${formatTwoDigits(date.getMinutes())} ${date.toLocaleDateString()}`;
  }
  return(
    <>
      <div className="comment-block" style={{ marginLeft: depth*30 + 'px' }}>
        <div className="top">
          <img src={comment.author.avatarUrl} alt="avatar"></img>
          <span className="left-side">{comment.author.name}</span>
          <span className="right-side">{timeFormat(date)}</span>
        </div>
        <p>{comment.text}</p>
      </div>
      { comment.answers &&  comment.answers.map((comment) =>
          <Comments comment={comment} depth={depth+1}/>
        )}
    </>
  );
}

export default Comments;