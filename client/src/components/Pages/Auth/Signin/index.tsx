import React, { FunctionComponent } from 'react';
import { Container, Label } from './Signin.styled';
import Input from '../../../commons/Input';
import Button from '../../../commons/Button';

const Signin: FunctionComponent = () => {
  return (
    <Container>
      <Label>Signin</Label>
      <Input placeholder='Username' />
      <Input placeholder='Password' />
      <Button>Signin</Button>
    </Container>
  );
};

export default Signin;
