import React, { FunctionComponent } from 'react';
import { ButtonContainer } from './Button.styled';

interface Props {
  children: React.ReactNode;
}

const Button: FunctionComponent<Props> = ({ children }) => {
  return <ButtonContainer>{children}</ButtonContainer>;
};

export default Button;
