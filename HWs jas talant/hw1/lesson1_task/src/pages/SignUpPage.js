import styled from '@emotion/styled';
import React from 'react';
import SignUpForm from './SignUpForm';

const Wrapper = styled('div')`
  display: flex;
  margin: 200px;
  justify-content: center;
  align-items: center;
`
function SignUpPage(){

  return(
    <Wrapper>
      <SignUpForm />
    </Wrapper>
  );
}

export default SignUpPage;