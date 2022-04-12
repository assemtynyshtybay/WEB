import styled from '@emotion/styled';
import React, {useState, useEffect, useContext } from 'react';
import { TodoForm } from "./TodoForm";
import {TodoList} from './TodoList';
import back from '../../icons/flowers.webp';
import {Todo} from '../../components/context/Todo'

const Container = styled('div')`
  display: flex;
  height: 800px;
  flex-direction: column;
  align-items: center;
  padding: 30px 0px;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
  background-color: #e5bcdb;
`
const List = styled('div')`
  width: 450px;
`
function TodoPage() {
  const {todo,setTodo} = useContext(Todo)
  const [list, setList] = useState(todo)
  const onCreate = (todo) => {
    if(todo.text){
      setList([...list, todo]);
    }
  }
  const onDelete = (index) => {
    const newList = [...list]
    newList.splice(index,1)
    setList(newList)
  }
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(list))
  })

  return(
    <Container>
      <TodoForm onCreate={(arg) => onCreate(arg)}/>
      <List>
        <TodoList todos={list} onDelete={onDelete}/>
      </List>
    </Container>
  )
}
export default TodoPage;
