import React, { FunctionComponent } from 'react';
import { Container, Wrapper, LogoDiv, SigninDiv } from './Landing.styled';
import Signin from '../Auth/Signin';
import { useHistory } from 'react-router-dom';

const Landing: FunctionComponent = () => {
  let history = useHistory();
  const token = localStorage.getItem('token');
  if (token) history.push('/list');

  return (
    <Container>
      <Wrapper>
        <LogoDiv>
          <img src='img_logo.png' />
          <div>Performance Review</div>
        </LogoDiv>
        <SigninDiv>
          <Signin />
        </SigninDiv>
      </Wrapper>
    </Container>
  );
};

export default Landing;
