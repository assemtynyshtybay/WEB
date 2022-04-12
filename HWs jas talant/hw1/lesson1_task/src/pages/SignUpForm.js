import React, {useState} from 'react';
import {Button, styled, TextField} from '@mui/material';
import axios from 'axios';

import { ReactComponent as EyeOn } from '../icons/eye_on.svg';
import { ReactComponent as EyeOff } from '../icons/eye_off.svg';

const Form = styled('form')`
  position: relative;
  display: flex;
  flex-direction: column;
`
const Icon = styled('div')`
  position: absolute;
  width: 30px;
  heigth: 30px;
  right: 5px;
`
const Container = styled('div')`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
`
// const validEmail = new RegExp(
//   '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
// );
const validPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/g;


function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [visibility, setVisibility] = useState(false);
  const [cVisibility, setCVisibility] = useState(false);

  const validateForm = (e) => {
    e.preventDefault();
    if(password.length < 8){
      alert("Password is short!")
      return
    }
    if (!validPassword.test(password)) {
      alert("Password is vulnarable!");
      return
    }
    if(cPassword !== password){
      alert("Passwords are not same!")
      return
    }
    const data = {
      email,
      password,
    }
    sendUserData(data);
  }

  function sendUserData(userData){
    axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDuHsqhY4QZKFs0X487o2bM7ITRnzbYJHU`,
      {
        email: userData.email,
        password: userData.password,
        returnSecureToken: true
      }
    )
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log({...error})
      alert(`Failed to Authorize. Error message: ${error.response.data.error.message}`)
    })
  } 

  return (
    <Form onSubmit={validateForm}>
        <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            size="small" type="email" label="Email" placeholder="Enter email" required
        />
        <br/>
        <Container>
          <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="small" type={ visibility ? "password" : "text" } label="Password" placeholder="Enter password" required />
          <Icon>
            { visibility ?
            <EyeOn onClick={() => setVisibility(false)}/>
            :
            <EyeOff onClick={() => setVisibility(true)}/>
            }
          </Icon>
        </Container>
        <br/>
        <Container>
          <TextField
              value={cPassword}
              onChange={(e) => setCPassword(e.target.value)}
              size="small" type={ cVisibility ? "password" : "text" } label="Confirm Password" placeholder="Enter password" required />
          <Icon>
            { cVisibility ?
            <EyeOn onClick={() => setCVisibility(false)}/>
            :
            <EyeOff onClick={() => setCVisibility(true)}/>
            }
          </Icon>
        </Container>
        <br/>
        <Button type="submit" variant="contained">Sign Up</Button>
    </Form>
)
}
export default SignUpForm;