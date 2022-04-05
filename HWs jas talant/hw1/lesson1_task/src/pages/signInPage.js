import styled from '@emotion/styled';
import React from 'react';
import SignInForm from './signInForm';

const Wrapper = styled('div')`
  display: flex;
  margin: 200px;
  justify-content: center;
  align-items: center;
`
function SignInPage(){

  return(
    <Wrapper>
      <SignInForm />
    </Wrapper>
  );
}

export default SignInPage;