import React,{ useState } from 'react';
import styled from "@emotion/styled"

const Button = styled('div')`
position: absolute;
right: 10px;
`
const Item = styled('div')`
position: relative;
display: flex;
align-items: center;
padding: 10px;
background-color: #e5bcdb;
margin: 5px;
border-radius: 10px;
`
const Text = styled('div')`
display: flex;
flex-direction: column;
margin-left: 10px;
`
const Time = styled('span')`
font-size: 20px;
color: white;
`
const Todo = styled('span')`
font-size: 40px;
color: #16044c;
`
const Check = styled('input')`
`
export function TodoItem({todo, onDelete}) {
  const [status, setStatus] = useState(todo.status);
  return(
    <Item>
      <Check type="checkbox" onChange={() => setStatus(!status)} checked={status}/>
      <Text>
        <Todo>{todo.text}</Todo>
        <Time>{todo.date.toLocaleString()}</Time>
      </Text>
      <Button onClick={onDelete}>❌</Button>
    </Item>
  )
}