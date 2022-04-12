import styled from "@emotion/styled";
import { Button, TextField } from "@mui/material";
import {useState, useRef} from 'react';
const Form = styled('form')`
  display: flex;
  gap: 20px;
  align-items: center;
  jastify-content: center;
  padding: 20px;
`
export function TodoForm({onCreate}){
  const [text, setText] = useState('');
  
  const cursor_ref = useRef(null);
  
  // useEffect(() => {
  //   setText('')
  // }, [onCreate])
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return(
    <>
      <Form onSubmit={handleSubmit}>
        <TextField label="Name" value={text} onChange={(e) => { setText(e.target.value);}} ref={cursor_ref}/>
        <Button onClick={()=>{onCreate({text, date: new Date(), status: false}); setText('')}} type="submit">Create</Button>
      </Form>
    </>
  )
}