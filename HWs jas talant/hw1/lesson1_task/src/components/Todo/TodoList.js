import styled from "@emotion/styled"
import {TodoItem} from './TodoItem';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 30px;
`

export function TodoList({todos, onDelete}){
  return(
    <Container>
        { todos.map((todo, index) => ( 
        <TodoItem todo={todo} onDelete={()=>onDelete(index)} />
        ))}
    </Container>
  )
}