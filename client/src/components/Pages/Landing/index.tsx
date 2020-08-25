import React, { FunctionComponent } from 'react';
import { Container, Wrapper, LogoDiv, SigninDiv } from './Landing.styled';
import Signin from '../Auth/Signin';

const Landing: FunctionComponent = () => {
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
